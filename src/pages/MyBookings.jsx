import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import loadMyBookins from "../Service/getMyBookinsg";
import useRoomList from "../Hooks/useRoomList";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpiner";
import moment from "moment";
import Swal from "sweetalert2";
import { DateRange } from "react-date-range";

const MyBookings = () => {
  const { user } = useAuth();
  const hotels = useRoomList();
  const [newDate, setNewDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [review, setReview] = useState({ rating: 0, comment: "" });
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const token = user?.accessToken;

  const { data: myAllBookings, isPending } = useQuery({
    queryKey: ["myBooked"],
    queryFn: loadMyBookins,
  });

  const filterBookedRooms = hotels.filter((h) =>
    myAllBookings?.some((b) => b.roomId === h.id)
  );
  const bookings = filterBookedRooms.map((room) => {
    const booking = myAllBookings.find((b) => b.roomId === room.id);
    return {
      ...room,
      endDate: booking?.endDate,
      startDate: booking?.startDate,
      bookingDate: {
        endDate: booking?.endDate,
        startDate: booking?.startDate,
      },
      status: booking?.status,
    };
  });

  const handleUpdateDate = async () => {
    if (!newDate) {
      return toast.info("please Pick a Date !");
    }
    const updateExistingDate = {
      newDate,
      roomId: selectedBooking?._id,
      email: user?.email,
    };
    try {
      setLoading(true);
      const res = await axios.patch(
        "https://luxestayserver.vercel.app/booking/date/update",
        updateExistingDate,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.acknowledged) {
        toast.success("Booking Date Update successfully!");
        setIsUpdateModalOpen(false);
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async () => {
    if (!review?.rating > 0) {
      return toast.info("please give rating as number");
    }
    if (!review?.comment.length > 0) {
      return toast.info("please Write something about our room and Service");
    }

    const date = new Date();
    const reviewData = {
      name: user?.displayName,
      ...review,
      date,
      roomId: selectedBooking._id,
      avatar: user?.photoURL,
      email: user?.email,
      room: selectedBooking?.title,
    };
    try {
      setLoading(true);
      const res = await axios.post(
        "https://luxestayserver.vercel.app/give/review",
        reviewData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.acknowledged) {
        toast.success("reviews added successfully!");
        setIsReviewModalOpen(false);
        setReview({ rating: 0, comment: "" });
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId, bookingDate) => {
    const start = moment(bookingDate?.startDate).startOf("day");
    const end = moment(bookingDate?.endDate).startOf("day");
    const today = moment().startOf("day");
    const bookingDuration = end.diff(start, "days") + 1;
    const daysUntilStart = start.diff(today, "days");

    if (bookingDuration <= 1) {
      Swal.fire({
        icon: "warning",
        title: "Can't Cancel",
        text: "You can only cancel bookings at least 1 day before the booked date.",
      });
      return;
    }

    // if (daysUntilStart <= 1) {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "Can't Cancel",
    //     text: "You may cancel the booking only if the booking duration is one day or longer.",
    //   });
    //   return;
    // }

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axios.delete(
          `https://luxestayserver.vercel.app/api/delete/booking/${bookingId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: {
              bookingDate,
            },
          }
        );

        if (res.data.acknowledged) {
          Swal.fire(
            "Cancelled!",
            "Your booking has been cancelled.",
            "success"
          );
          queryClient.setQueryData(["myBooked"], (oldData) =>
            oldData?.filter((b) => b.id !== bookingId)
          );
        } else {
          Swal.fire("Failed", "Booking cancellation failed.", "error");
        }
      } catch (err) {
        Swal.fire(err.message);
      }
    }
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
            <p className="text-gray-600 dark:text-gray-200">
              Manage your hotel reservations
            </p>
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
              <div className="p-4 relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 py-3">
                    <tr className=" ">
                      <th scope="col" className="px-6 py-3">
                        Room
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr
                        key={booking.id}
                        class="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div className="flex items-center space-x-3">
                            <img
                              src={booking.image}
                              alt={booking.title}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <span className="font-medium">{booking.title}</span>
                          </div>
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-400"
                        >
                          {`${moment(booking?.startDate).format(
                            "D MMMM"
                          )} - ${moment(booking?.endDate).format("D MMMM")}`}
                        </th>
                        <td className="px-6 py-4">${booking.price}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 space-y-3 sm:space-x-2">
                          <button
                            onClick={() => {
                              setIsUpdateModalOpen(true);
                              setSelectedBooking(booking);
                            }}
                            className="px-2 py-1 cursor-pointer  text-sm border rounded"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => {
                              setIsReviewModalOpen(true);
                              setSelectedBooking(booking);
                            }}
                            className="px-2 py-1 cursor-pointer  text-sm border rounded"
                          >
                            Review
                          </button>

                          <button
                            onClick={() =>
                              handleCancelBooking(
                                booking.id,
                                booking.bookingDate
                              )
                            }
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
          ) : isPending ? (
            <LoadingSpinner />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-gray-700 shadow rounded-lg p-8 text-center"
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

                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setNewDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={newDate}
                />

                <button
                  onClick={handleUpdateDate}
                  className="w-full cursor-pointer bg-blue-600 text-white px-4 py-2 rounded"
                >
                  {loading ? "Updating" : "Update"}
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
                  required
                  min="1"
                  max="5"
                  className="w-full border px-3 py-2 rounded mb-4"
                  value={review.rating}
                  onChange={(e) =>
                    setReview({ ...review, rating: Number(e.target.value) })
                  }
                />
                <label className="block mb-2">Comment:</label>
                <textarea
                  rows={4}
                  className="w-full border px-3 py-2 rounded mb-4"
                  defaultValue={review.comment}
                  onChange={(e) =>
                    setReview({ ...review, comment: e.target.value })
                  }
                  placeholder="Share your experience..."
                />
                <label className="block mb-2">Name: {user?.displayName}</label>

                <button
                  onClick={handleSubmitReview}
                  className="w-full cursor-pointer bg-blue-600 text-white px-4 py-2 rounded"
                >
                  {loading ? "Submitting" : "Submit Review"}
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
