function Buttons({ fetchQuote, handleLike, loading, isLiked }) {
  return (
    <div className="flex gap-4 mt-8">
      <button
        onClick={fetchQuote}
        disabled={loading}
        className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
      >
        {loading ? "Loading..." : "New Quote"}
      </button>

      <button
        onClick={handleLike}
        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
          isLiked
            ? "bg-red-500 text-white hover:scale-105 hover:shadow-lg"
            : "bg-white/50 backdrop-blur hover:bg-white/70"
        }`}
      >
        {isLiked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}

export default Buttons;