import { useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MapPin, Users, Star } from "lucide-react";
import useAuth from "../Hooks/useAuth";
import useRoomList from "../Hooks/useRoomList";
import useGetReviews from "../Hooks/useGetReviews";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
const RoomDetails = () => {
  const { user } = useAuth();
  const hotels = useRoomList();
  const reviews = useGetReviews();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const room = hotels.find((r) => r.id === id);
  const roomReviews = reviews?.filter((r) => r.roomId === id);

  if (!room) return <Navigate to="/404" replace />;

  const handleBooking = () => {
    if (!user) return navigate("/login");
    setIsBookingModalOpen(true);
  };

  const handleConfirmBooking = async () => {
    if (!selectedDate) {
      toast.error("Please select a booking date");
      return;
    }

    const bookingData = {
      roomId: id,
      status: "confirmed",
      email: user?.email,
      startDate: selectedDate[0].startDate,
      endDate: selectedDate[0].endDate,
    };
    try {
      setLoading(true);
      const token = user?.accessToken;
      const res = await axios.post(
        "https://luxestayserver.vercel.app/room/bookings",
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.acknowledged) {
        toast.success("Booking successful!");
        setIsBookingModalOpen(false);
        setSelectedDate("");
        setIsAvailable(false);
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));

  return (
    <>
      <Helmet>
        <title>{room.title} - LuxeStay Hotel</title>
        <meta name="description" content={room.description} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Room Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300">
                  {room.title}
                </h1>
                <p className="text-2xl font-bold text-blue-600">
                  ${room.price}/night
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-200">
                {room.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span>Up to {room.capacity} guests</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span>{room.size}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {room.featured?.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold">Amenities</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {room.amenities?.map((icon, idx) => (
                    <div key={idx} className="p-2 bg-gray-100 rounded-lg">
                      <span className="material-icons text-gray-600 text-base">
                        {icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 rounded disabled:opacity-50"
                disabled={!isAvailable || !room.isAvailable}
              >
                {isAvailable === false || room.isAvailable === false
                  ? "Not Available"
                  : "Book Now"}
              </button>

              {/* Booking Modal */}
              {isBookingModalOpen && (
                <div className="fixed inset-0  overflow-auto bg-opacity-30 flex items-center justify-center z-50">
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg w-full max-w-md space-y-4">
                    <h2 className="text-xl font-bold">Book {room.title}</h2>

                    <div>
                      <label
                        htmlFor="date"
                        className="block font-semibold mb-1"
                      >
                        Select Date
                      </label>
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setSelectedDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={selectedDate}
                      />
                    </div>

                    <div className="border-t pt-4 text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>Room:</span>
                        <span>{room.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price per night:</span>
                        <span>${room.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        {selectedDate[0]?.startDate &&
                        selectedDate[0]?.endDate ? (
                          <span>
                            {moment(selectedDate[0].startDate).format("MMM Do")}{" "}
                            - {moment(selectedDate[0].endDate).format("MMM Do")}
                          </span>
                        ) : (
                          <span>Not selected</span>
                        )}
                      </div>
                      <div className="flex justify-between font-semibold border-t pt-2">
                        <span>Total:</span>
                        <span>${room.price}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handleConfirmBooking}
                        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                      >
                        {loading ? "Confirming" : "Confirm"}
                      </button>
                      <button
                        onClick={() => setIsBookingModalOpen(false)}
                        className="bg-gray-300 text-black px-4 py-2 rounded w-full"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Reviews Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-6">
              Guest Reviews
            </h2>
            {roomReviews.length > 0 ? (
              <div className="space-y-4">
                {roomReviews.map((review) => (
                  <div
                    key={review.id}
                    className="border rounded-lg p-4 shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-200">
                        {moment(review.date).format("Do MMMM YYYY, h:mm:ss a")}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-200">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border p-6 text-center text-gray-500">
                No reviews available for this room yet.
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
