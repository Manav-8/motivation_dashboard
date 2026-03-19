function LikedList({ likedQuotes }) {
  return (
    <div className="mt-12 w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">
        ❤️ Liked Quotes
      </h2>

      {likedQuotes.length === 0 ? (
        <p className="text-center text-gray-500">
          No liked quotes yet.
        </p>
      ) : (
        <div className="max-h-64 overflow-y-auto space-y-4 pr-2">
          {likedQuotes.map((q, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-md p-4 rounded-xl shadow hover:scale-[1.02] transition"
            >
              <p className="font-medium text-gray-800">
                “{q.quote}”
              </p>
              <p className="text-sm text-gray-500 mt-2">
                — {q.author}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LikedList;
