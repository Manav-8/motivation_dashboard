function QuoteCard({ quote, author, loading }) {
  return (
    <div className="backdrop-blur-lg bg-white/30 border border-white/20 shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center transition-all duration-300">
      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed text-gray-800">
            “{quote}”
          </h2>
          <p className="mt-6 text-gray-600 text-lg font-medium">
            — {author}
          </p>
        </>
      )}
    </div>
  );
}

export default QuoteCard;