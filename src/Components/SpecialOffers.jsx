import { motion } from "framer-motion";
const offers = [
  {
    id: 1,
    title: "Early Bird Special",
    description: "Book 30 days in advance and save up to 25% on your stay",
    discount: "25% OFF",
    validUntil: "December 31, 2024",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
    icon: "calendar",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    title: "Romantic Getaway",
    description:
      "Perfect for couples with champagne, roses, and spa credits included",
    discount: "20% OFF",
    validUntil: "Valentine's Day 2025",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
    icon: "heart",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    title: "Family Fun Package",
    description:
      "Kids stay free with family activities and complimentary breakfast",
    discount: "30% OFF",
    validUntil: "Summer 2024",
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070",
    icon: "users",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 4,
    title: "Luxury Experience",
    description: "VIP treatment with suite upgrade and exclusive amenities",
    discount: "15% OFF",
    validUntil: "Limited Time",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070",
    icon: "star",
    color: "from-yellow-400 to-yellow-600", // gold replaced with yellow
  },
];

const icons = {
  calendar: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="16"
        y1="2"
        x2="16"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
      <line
        x1="3"
        y1="10"
        x2="21"
        y2="10"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  gift: (
    <svg
      className="w-8 h-8 mr-3 text-primary-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="2"
        y="7"
        width="20"
        height="5"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="12"
        y1="7"
        x2="12"
        y2="22"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  heart: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M12 21C12 21 7 16 7 12a5 5 0 0 1 10 0c0 4-5 9-5 9z"
      />
    </svg>
  ),
  star: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <polygon
        stroke="currentColor"
        strokeWidth="2"
        points="12 2 15 11 22 11 17 16 19 22 12 18 5 22 7 16 2 11 9 11 12 2"
      />
    </svg>
  ),
  users: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M17 11v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
};

const SpecialOffers = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#EFF6FF] dark:bg-gray-800 dark:bg-none">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            {icons.gift}
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-amber-50">
              Special{" "}
              <span className="text-[#2563EB]  dark:from-amber-50 bg-clip-text">
                Offers
              </span>
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-amber-50">
            Take advantage of our exclusive deals and make your stay even more
            memorable while saving money
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {offers.map((offer, index) => {
            const Icon = icons[offer.icon] || null;
            return (
              <motion.div
                key={offer.id}
                whileHover={{ y: -5 }}
                className="overflow-hidden transition-shadow duration-300 bg-white border shadow-xl group rounded-xl hover:shadow-2xl dark:bg-gray-700"
              >
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-4 right-4">
                    <span
                      className={`inline-block bg-gradient-to-r ${offer.color} text-white font-bold px-4 py-2 text-lg rounded-full`}
                    >
                      {offer.discount}
                    </span>
                  </div>

                  <div className="absolute flex items-center space-x-2 text-white bottom-4 left-4">
                    {Icon}
                    <span className="text-sm font-medium">
                      Limited Time Offer
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-amber-50">
                    {offer.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-200">
                    {offer.description}
                  </p>

                  <div className="flex items-center justify-between mb-6 text-sm text-gray-500 dark:text-gray-300">
                    <svg
                      className="inline w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line
                        x1="16"
                        y1="2"
                        x2="16"
                        y2="6"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line
                        x1="8"
                        y1="2"
                        x2="8"
                        y2="6"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line
                        x1="3"
                        y1="10"
                        x2="21"
                        y2="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    Valid until {offer.validUntil}
                  </div>

                  <a
                    href="/rooms"
                    className={`block w-full text-center bg-gradient-to-r ${offer.color} text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity duration-200`}
                  >
                    Claim This Offer
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#2563EB] to-[#c9cdd7] dark:bg-gray-600 dark:bg-none rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="mb-4 text-2xl font-bold dark:text-amber-50">
              🎉 Subscribe for Exclusive Deals!
            </h3>
            <p className="max-w-2xl mx-auto mb-6 text-primary-100">
              Be the first to know about our latest offers, seasonal packages,
              and special promotions. Join our newsletter and never miss a great
              deal!
            </p>
            <form className="flex flex-col max-w-md gap-4 mx-auto sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-lg focus:outline-none focus:bg-white focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white cursor-pointer text-[#2563EB] hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
