const StarRating = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.184 3.64a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.084 2.24a1 1 0 00-.364 1.118l1.184 3.64c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.084 2.24c-.783.57-1.838-.197-1.538-1.118l1.184-3.64a1 1 0 00-.364-1.118L3.114 9.067c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.184-3.64z" />
      </svg>
    ))}
  </div>
);
export default StarRating;
