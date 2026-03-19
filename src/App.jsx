import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [i, setI] = useState(0);
  const [liked, setLiked] = useState([]);
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const q = quotes[i] || {};

  
  useEffect(() => {
    setLoading(true);

    fetch("https://dummyjson.com/quotes")
      .then((r) => r.json())
      .then((d) => {
        setTimeout(() => {
          setQuotes(d.quotes);
          setLoading(false);
        }, 1000); // 
      });
  }, []);

  
  useEffect(() => {
    const s = JSON.parse(localStorage.getItem("liked"));
    if (s) setLiked(s);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);

  
  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("dark"));
    if (d) setDark(d);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  
  const next = () => {
    if (loading) return;
    setI(i < quotes.length - 1 ? i + 1 : 0);
  };

  
  const toggleLike = () => {
    liked.some((x) => x.quote === q.quote)
      ? setLiked(liked.filter((x) => x.quote !== q.quote))
      : setLiked([...liked, q]);
  };

  
  const remove = (quote) => {
    setLiked(liked.filter((x) => x.quote !== quote));
  };

  return (
    <div
      className={`min-h-screen ${
        dark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      
      <div
        className={`flex justify-between items-center px-8 py-4 border-b ${
          dark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className="text-xl font-bold text-orange-500">
          🔥 Get Motivated
        </h1>

        <div className="flex items-center gap-6">
          <span className="text-sm">Liked: {liked.length}</span>

          
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded bg-orange-500 text-white text-sm"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>

      
      <div className="p-10">

        
        <div className="text-center max-w-2xl mx-auto mt-16">

          
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed">
                “{q.quote}”
              </h2>

              <p className="mt-5 text-orange-500 font-medium">
                — {q.author}
              </p>
            </>
          )}

          
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={next}
              disabled={loading}
              className="px-6 py-2 bg-orange-500 text-white rounded-full disabled:opacity-50"
            >
              {loading ? "Wait..." : "New Quote"}
            </button>

            <button
              onClick={toggleLike}
              className={`px-6 py-2 rounded-full ${
                liked.some((x) => x.quote === q.quote)
                  ? "bg-orange-200 text-orange-700"
                  : "bg-gray-200 text-black"
              }`}
            >
              ♥
            </button>
          </div>
        </div>

        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="flex justify-between mb-4">
            <h3>Your Picks</h3>
            <span>{liked.length}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {liked.map((x, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg border relative ${
                  dark ? "bg-gray-800 border-gray-700" : "bg-white"
                }`}
              >
                
                <button
                  onClick={() => remove(x.quote)}
                  className="absolute top-2 right-2 text-red-400 hover:text-red-600"
                >
                  ✖
                </button>

                <p className="text-sm">“{x.quote}”</p>
                <p className="text-xs text-orange-500 mt-2">
                  — {x.author}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;