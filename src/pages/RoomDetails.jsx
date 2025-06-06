import { useState } from 'react';
import { useParams, Navigate } from 'react-router';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Wifi, Star } from 'lucide-react';
import { toast } from 'sonner';

const roomsData = [
  {
    id: '1',
    title: 'Presidential Suite',
    price: 500,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
    description: 'Experience ultimate luxury in our Presidential Suite...',
    amenities: ['Free Wi-Fi', 'Room Service', 'City View', 'King Bed', 'Marble Bathroom'],
    capacity: 4,
    size: '85 sqm',
    isAvailable: true
  },
  {
    id: '2',
    title: 'Ocean View Deluxe',
    price: 350,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
    description: 'Relax in our Ocean View Deluxe room...',
    amenities: ['Ocean View', 'Balcony', 'Free Wi-Fi', 'Queen Bed', 'Mini Bar'],
    capacity: 2,
    size: '45 sqm',
    isAvailable: true
  }
];

const reviewsData = [
  {
    id: '1',
    roomId: '1',
    userName: 'John Smith',
    rating: 5,
    comment: 'Absolutely amazing experience!',
    timestamp: '2024-01-15'
  },
  {
    id: '2',
    roomId: '1',
    userName: 'Sarah Johnson',
    rating: 4,
    comment: 'Beautiful room. Would stay again.',
    timestamp: '2024-01-10'
  }
];

const RoomDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const room = roomsData.find(r => r.id === id);
  const roomReviews = reviewsData.filter(r => r.roomId === id);

  if (!room) return <Navigate to="/404" replace />;

  const handleBooking = () => {
    if (!selectedDate) {
      toast.error('Please select a booking date');
      return;
    }
    toast.success('Room booked successfully!');
    setIsBookingModalOpen(false);
    setSelectedDate('');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>{room.title} - LuxeStay Hotel</title>
        <meta name="description" content={room.description} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div>
              <img src={room.image} alt={room.title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{room.title}</h1>
                <p className="text-2xl font-bold text-blue-600">${room.price}/night</p>
              </div>

              <p className="text-gray-600">{room.description}</p>

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

              <div>
                <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Wifi className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded disabled:opacity-50"
                disabled={!room.isAvailable}
              >
                {room.isAvailable ? 'Book Now' : 'Not Available'}
              </button>

              {isBookingModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-4">
                    <h2 className="text-xl font-bold mb-2">Book {room.title}</h2>
                    <div>
                      <label htmlFor="date" className="block font-semibold mb-1">Select Date</label>
                      <input
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full border border-gray-300 p-2 rounded"
                      />
                    </div>
                    <div className="border-t pt-4 text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>Room:</span><span>{room.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price per night:</span><span>${room.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span><span>{selectedDate || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between font-semibold border-t pt-2">
                        <span>Total:</span><span>${room.price}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={handleBooking}
                        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                      >
                        Confirm Booking
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Guest Reviews</h2>
            {roomReviews.length > 0 ? (
              <div className="space-y-4">
                {roomReviews.map((review) => (
                  <div key={review.id} className="border rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{review.userName}</h4>
                        <div className="flex items-center space-x-1">{renderStars(review.rating)}</div>
                      </div>
                      <span className="text-sm text-gray-500">{review.timestamp}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
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
