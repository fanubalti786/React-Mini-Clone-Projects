import React from "react";

export default function MovieCategories() {
const MovieCategory = [
  {
    category: "Recommended for you",
    images: [
      { url: "https://plus.unsplash.com/premium_photo-1683740129124-0b4aac921cc1?q=80&w=870&auto=format&fit=crop", name: "The Lost Kingdom" },
      { url: "https://plus.unsplash.com/premium_photo-1683740128939-332a77523d51?w=500&auto=format&fit=crop&q=60", name: "Silent Shadows" },
      { url: "https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?w=500&auto=format&fit=crop&q=60", name: "Ocean's Whisper" },
      { url: "https://plus.unsplash.com/premium_photo-1683740129124-0b4aac921cc1?q=80&w=870&auto=format&fit=crop", name: "Starlight Journey" },
      { url: "https://plus.unsplash.com/premium_photo-1683740128939-332a77523d51?w=500&auto=format&fit=crop&q=60", name: "Hidden Horizons" },
      { url: "https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?w=500&auto=format&fit=crop&q=60", name: "Whispering Winds" },
      { url: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60", name: "Moonlit Path" },
      { url: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60", name: "Crimson Tales" },
    ],
  },
  {
    category: "Animated Series",
    images: [
      { url: "https://plus.unsplash.com/premium_photo-1683740129124-0b4aac921cc1?q=80&w=870&auto=format&fit=crop", name: "Magic Forest" },
      { url: "https://plus.unsplash.com/premium_photo-1683740128939-332a77523d51?w=500&auto=format&fit=crop&q=60", name: "Robot Adventures" },
      { url: "https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?w=500&auto=format&fit=crop&q=60", name: "Pixel Heroes" },
      { url: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60", name: "Skybound Friends" },
      { url: "https://plus.unsplash.com/premium_photo-1683740129124-0b4aac921cc1?q=80&w=870&auto=format&fit=crop", name: "Cartoon Quest" },
      { url: "https://plus.unsplash.com/premium_photo-1683740128939-332a77523d51?w=500&auto=format&fit=crop&q=60", name: "Animated Saga" },
      { url: "https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?w=500&auto=format&fit=crop&q=60", name: "Fable Tales" },
      { url: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60", name: "Dreamy Adventures" },
    ],
  },
  {
    category: "Rediscover these classics",
    images: [
      { url: "https://plus.unsplash.com/premium_photo-1683740129124-0b4aac921cc1?q=80&w=870&auto=format&fit=crop", name: "Golden Era" },
      { url: "https://plus.unsplash.com/premium_photo-1683740128939-332a77523d51?w=500&auto=format&fit=crop&q=60", name: "Retro Nights" },
      { url: "https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?w=500&auto=format&fit=crop&q=60", name: "Classic Tales" },
      { url: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60", name: "Vintage Dreams" },
      { url: "https://plus.unsplash.com/premium_photo-1683740129124-0b4aac921cc1?q=80&w=870&auto=format&fit=crop", name: "Old Memories" },
      { url: "https://plus.unsplash.com/premium_photo-1683740128939-332a77523d51?w=500&auto=format&fit=crop&q=60", name: "Timeless Stories" },
      { url: "https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?w=500&auto=format&fit=crop&q=60", name: "Evergreen Classics" },
      { url: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60", name: "Legendary Moments" },
    ],
  },
];

  // px-9 border-2 border-red-400
  return (
  <>
    {MovieCategory.map((movies, index) => (
      <div key={index} className="px-9 gap-8 p-2">
        <h2 className="text-xl font-bold mb-2 pl-2 underline">{movies.category}</h2>
        <div
          className="flex overflow-x-auto gap-6 py-2 pl-2
          scrollbar-hide scroll-smooth mb-10"
        >
          {movies.images.map((movie, idx) => (
            <div key={idx} className="flex-shrink-0 w-[320px]">
              <img
                src={movie.url}
                alt={movie.name}
                className="rounded-lg border border-gray-400 hover:border-[3px] hover:scale-110
                  transition-all duration-200 ease-in-out cursor-pointer shadow-xl
                  w-full h-[220px] object-cover"
              />
              <p className="mt-2 font-medeum text-base break-words">{movie.name}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </>
);

}
