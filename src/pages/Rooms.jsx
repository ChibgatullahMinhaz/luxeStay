import { useState } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

const roomsData = [
  {
    id: '1',
    title: 'Presidential Suite',
    price: 500,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400',
    description: 'Experience ultimate luxury in our Presidential Suite featuring panoramic city views.',
    amenities: ['Free Wi-Fi', 'Room Service', 'City View'],
    capacity: 4,
    reviews: 24,
    rating: 4.8
  },
  {
    id: '2',
    title: 'Ocean View Deluxe',
    price: 350,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400',
    description: 'Relax in our Ocean View Deluxe room with stunning sea views and modern amenities.',
    amenities: ['Ocean View', 'Balcony', 'Free Wi-Fi'],
    capacity: 2,
    reviews: 18,
    rating: 4.6
  },
  {
    id: '3',
    title: 'Executive Business Suite',
    price: 450,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400',
    description: 'Perfect for business travelers with dedicated workspace and premium amenities.',
    amenities: ['Business Center', 'Free Wi-Fi', 'Work Desk'],
    capacity: 2,
    reviews: 15,
    rating: 4.7
  },
  {
    id: '4',
    title: 'Family Comfort Room',
    price: 280,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400',
    description: 'Spacious family room with comfortable beds and child-friendly amenities.',
    amenities: ['Family Friendly', 'Free Wi-Fi', 'Twin Beds'],
    capacity: 6,
    reviews: 22,
    rating: 4.5
  },
  {
    id: '5',
    title: 'Romantic Honeymoon Suite',
    price: 400,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400',
    description: 'Intimate suite perfect for couples with romantic ambiance and special amenities.',
    amenities: ['Romantic Setup', 'Jacuzzi', 'Free Wi-Fi'],
    capacity: 2,
    reviews: 31,
    rating: 4.9
  },
  {
    id: '6',
    title: 'Standard City Room',
    price: 180,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400',
    description: 'Comfortable and affordable room with all essential amenities for city travelers.',
    amenities: ['City View', 'Free Wi-Fi', 'Air Conditioning'],
    capacity: 2,
    reviews: 12,
    rating: 4.3
  }
];

const Rooms = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [filteredRooms, setFilteredRooms] = useState(roomsData);

  const handlePriceFilter = () => {
    const min = parseInt(priceRange.min) || 0;
    const max = parseInt(priceRange.max) || Infinity;
    const filtered = roomsData.filter(room => room.price >= min && room.price <= max);
    setFilteredRooms(filtered);
  };

  const resetFilter = () => {
    setPriceRange({ min: '', max: '' });
    setFilteredRooms(roomsData);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-yellow-400 ${i >= Math.floor(rating) ? 'text-gray-300' : ''}`}>★</span>
    ));
  };

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRooms.map(room => (
        <motion.div key={room.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Link to={`/room/${room.id}`}>
            <div className="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img src={room.image} alt={room.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 text-sm rounded shadow">
                  ${room.price}/night
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{room.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{room.description}</p>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-1">{renderStars(room.rating)}<span className="text-xs text-gray-500">({room.reviews})</span></div>
                  <div className="text-sm text-gray-600">👥 {room.capacity} guests</div>
                </div>
                <div className="flex gap-1 flex-wrap text-xs text-gray-700 mb-3">
                  {room.amenities.slice(0, 3).map((a, i) => (
                    <span key={i} className="bg-gray-100 px-2 py-1 rounded">{a}</span>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">View Details</button>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );

  const TableView = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Room</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Capacity</th>
            <th className="p-3 text-left">Rating</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRooms.map(room => (
            <tr key={room.id} className="border-t">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <img src={room.image} alt={room.title} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <div className="font-semibold">{room.title}</div>
                    <div className="text-xs text-gray-600">{room.description}</div>
                  </div>
                </div>
              </td>
              <td className="p-3">${room.price}/night</td>
              <td className="p-3">{room.capacity} guests</td>
              <td className="p-3">{renderStars(room.rating)} <span className="text-xs text-gray-500">({room.reviews})</span></td>
              <td className="p-3">
                <Link to={`/room/${room.id}`}>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">View Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Rooms - LuxeStay Hotel</title>
        <meta name="description" content="Browse our collection of luxury hotel rooms and suites" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Our Rooms & Suites</h1>
            <p className="text-gray-600">Discover comfort and luxury in every room</p>
          </motion.div>

          {/* 🔄 Animated Filter Panel */}
          <motion.div
            className="bg-white p-6 rounded shadow-sm mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex gap-4 flex-wrap">
                <div>
                  <label htmlFor="minPrice" className="block text-sm font-medium mb-1">Min Price</label>
                  <input
                    id="minPrice"
                    type="number"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    className="border rounded px-3 py-2 w-24"
                    placeholder="Min"
                  />
                </div>
                <div>
                  <label htmlFor="maxPrice" className="block text-sm font-medium mb-1">Max Price</label>
                  <input
                    id="maxPrice"
                    type="number"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                    className="border rounded px-3 py-2 w-24"
                    placeholder="Max"
                  />
                </div>
                <div className="flex items-end gap-2">
                  <button onClick={handlePriceFilter} className="px-4 py-2 border rounded hover:bg-gray-100">Filter</button>
                  <button onClick={resetFilter} className="px-4 py-2 border rounded hover:bg-gray-100">Reset</button>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-sm">View:</span>
                <button onClick={() => setViewMode('grid')} className={`px-3 py-2 border rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}>🔳</button>
                <button onClick={() => setViewMode('table')} className={`px-3 py-2 border rounded ${viewMode === 'table' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}>📋</button>
              </div>
            </div>
          </motion.div>

          {/* 🔄 Animated Room Display */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-4">Showing {filteredRooms.length} of {roomsData.length} rooms</p>
            <AnimatePresence mode="wait">
              {filteredRooms.length > 0 ? (
                viewMode === 'grid' ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GridView />
                  </motion.div>
                ) : (
                  <motion.div
                    key="table"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TableView />
                  </motion.div>
                )
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white p-6 rounded shadow-sm text-center"
                >
                  <h3 className="text-lg font-semibold mb-2">No rooms found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your price filters</p>
                  <button onClick={resetFilter} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Reset Filters</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
