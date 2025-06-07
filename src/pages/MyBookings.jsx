import { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const mockBookings = [
  {
    id: "1",
    roomId: "1",
    roomTitle: "Presidential Suite",
    roomImage:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=200",
    price: 500,
    bookingDate: "2024-02-15",
    status: "confirmed",
  },
  {
    id: "2",
    roomId: "2",
    roomTitle: "Ocean View Deluxe",
    roomImage:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=200",
    price: 350,
    bookingDate: "2024-02-20",
    status: "confirmed",
  },
];

const MyBookings = () => {
  const [bookings, setBookings] = useState(mockBookings);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [review, setReview] = useState({ rating: 5, comment: "" });

  const handleCancelBooking = (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      setBookings((prev) => prev.filter((b) => b.id !== bookingId));
      toast.success("Booking cancelled successfully");
    }
  };

  const handleUpdateDate = () => {
    if (!newDate) {
      toast.error("Please select a new date");
      return;
    }

    setBookings((prev) =>
      prev.map((b) =>
        b.id === selectedBooking.id ? { ...b, bookingDate: newDate } : b
      )
    );

    toast.success("Booking date updated successfully");
    setIsUpdateModalOpen(false);
    setNewDate("");
  };

  const handleSubmitReview = () => {
    if (!review.comment.trim()) {
      toast.error("Please write a review comment");
      return;
    }

    toast.success("Review submitted successfully");
    setIsReviewModalOpen(false);
    setReview({ rating: 5, comment: "" });
  };

  const canCancelBooking = (bookingDate) => {
    const booking = new Date(bookingDate);
    const today = new Date();
    const timeDiff = booking.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff >= 1;
  };

  return (
    <>
      <Helmet>
        <title>My Bookings - LuxeStay Hotel</title>
        <meta
          name="description"
          content="Manage your hotel bookings and reservations"
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-2">
              My Bookings
            </h1>
            <p className="text-gray-600 dark:text-gray-200">Manage your hotel reservations</p>
          </motion.div>

          {bookings.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-600 shadow rounded-lg overflow-hidden"
            >
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">Your Reservations</h2>
              </div>
              <div className="p-4 overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-2">Room</th>
                      <th className="text-left px-4 py-2">Date</th>
                      <th className="text-left px-4 py-2">Price</th>
                      <th className="text-left px-4 py-2">Status</th>
                      <th className="text-left px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="border-t">
                        <td className="px-4 py-2">
                          <div className="flex items-center space-x-3">
                            <img
                              src={booking.roomImage}
                              alt={booking.roomTitle}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <span className="font-medium">
                              {booking.roomTitle}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-2">{booking.bookingDate}</td>
                        <td className="px-4 py-2">${booking.price}</td>
                        <td className="px-4 py-2">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 space-x-2">
                          <button
                            onClick={() => {
                              setSelectedBooking(booking);
                              setIsUpdateModalOpen(true);
                            }}
                            className="px-2 py-1 cursor-pointer  text-sm border rounded"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => {
                              setSelectedBooking(booking);
                              setIsReviewModalOpen(true);
                            }}
                            className="px-2 py-1 cursor-pointer  text-sm border rounded"
                          >
                            Review
                          </button>

                          <button
                            onClick={() => handleCancelBooking(booking.id)}
                            disabled={!canCancelBooking(booking.bookingDate)}
                            className="px-2 py-1 cursor-pointer text-sm border rounded text-red-600 dark:text-white disabled:opacity-50"
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white shadow rounded-lg p-8 text-center"
            >
              <h3 className="text-lg font-semibold mb-2">No Bookings Found</h3>
              <p className="text-gray-600 mb-4">
                You haven't made any bookings yet.
              </p>
              <button
                onClick={() => (window.location.href = "/rooms")}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Browse Rooms
              </button>
            </motion.div>
          )}
        </div>

        {/* Modals */}
        <AnimatePresence>
          {isUpdateModalOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
            >
              <div className="bg-blue-100 dark:bg-gray-700 p-6 rounded w-96">
                <h2 className="text-xl font-semibold mb-4">
                  Update Booking Date
                </h2>
                <label className="block mb-2">New Date</label>
                <input
                  type="date"
                  className="w-full border px-3 py-2 rounded mb-4"
                  value={newDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setNewDate(e.target.value)}
                />
                <button
                  onClick={handleUpdateDate}
                  className="w-full cursor-pointer bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => setIsUpdateModalOpen(false)}
                  className="w-full cursor-pointer mt-2 text-sm text-gray-500"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isReviewModalOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
            >
              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded w-96">
                <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
                <label className="block mb-2">Rating (1–5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  className="w-full border px-3 py-2 rounded mb-4"
                  value={review.rating}
                  onChange={(e) =>
                    setReview({ ...review, rating: Number(e.target.value) })
                  }
                />
                <label className="block mb-2">Comment</label>
                <textarea
                  rows={4}
                  className="w-full border px-3 py-2 rounded mb-4"
                  value={review.comment}
                  onChange={(e) =>
                    setReview({ ...review, comment: e.target.value })
                  }
                  placeholder="Share your experience..."
                />
                <button
                  onClick={handleSubmitReview}
                  className="w-full cursor-pointer bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Submit Review
                </button>
                <button
                  onClick={() => setIsReviewModalOpen(false)}
                  className="w-full cursor-pointer mt-2 text-sm text-gray-500"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default MyBookings;
