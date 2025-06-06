const amenities = [
    {
      icon: "📶", // Wifi
      title: "Free Wi-Fi",
      description: "High-speed internet throughout the hotel",
    },
    {
      icon: "🚗", // Car
      title: "Valet Parking",
      description: "Complimentary parking with valet service",
    },
    {
      icon: "🍴", // Utensils
      title: "Fine Dining",
      description: "Multiple restaurants with world-class cuisine",
    },
    {
      icon: "🏋️‍♂️", // Dumbbell
      title: "Fitness Center",
      description: "24/7 state-of-the-art gym facility",
    },
    {
      icon: "🌊", // Waves
      title: "Swimming Pool",
      description: "Indoor and outdoor pools with city views",
    },
    {
      icon: "🛁", // Bath
      title: "Spa & Wellness",
      description: "Full-service spa with luxury treatments",
    },
    {
      icon: "🛡️", // Shield
      title: "24/7 Security",
      description: "Round-the-clock security and safety",
    },
    {
      icon: "⏰", // Clock
      title: "Concierge",
      description: "24-hour concierge and room service",
    },
    {
      icon: "👥", // Users
      title: "Event Spaces",
      description: "Meeting rooms and event facilities",
    },
    {
      icon: "✈️", // Plane
      title: "Airport Shuttle",
      description: "Complimentary shuttle to/from airport",
    },
    {
      icon: "☕", // Coffee
      title: "Coffee Bar",
      description: "Artisan coffee and light refreshments",
    },
    {
      icon: "🤝", // HeartHandshake
      title: "Guest Services",
      description: "Personalized attention to every detail",
    },
  ];
  
  const Amenities = () => {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:bg-gray-700 dark:bg-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
            style={{ opacity: 1, transform: "translateY(0)" }} // replace motion effect
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-amber-50 mb-4">
              World-Class{" "}
              <span className="bg-gradient-to-r from-[#2563EB]  dark:from-amber-50 bg-clip-text text-transparent">
                Amenities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl dark:text-gray-300 mx-auto">
              Experience luxury at every turn with our comprehensive range of premium amenities and
              services
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="h-full border-0 shadow-md rounded-2xl hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 group"
               
              >
                <div className="p-6 text-center rounded-2xl">
                  <div className="bg-gradient-to-r from-[#DBEAFE] to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#2563EB] text-2xl">{amenity.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-amber-50 mb-2">{amenity.title}</h3>
                  <p className="text-gray-600 text-sm dark:text-gray-100">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Amenities;
  