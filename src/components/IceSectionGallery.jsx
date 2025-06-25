import { useState } from "react";

const categories = [
  { name: "Destination Wedding", id: "destination", count: 14 },
  { name: "Mehandi Decoration", id: "mehandi", count: 2 },
  { name: "Sangeet Decoration", id: "sangeet", count: 0 },
  { name: "Haldi Function", id: "haldi", count: 6 },
  { name: "Reception", id: "reception", count: 6 },
  { name: "Traditional", id: "traditional", count: 0 },
  { name: "Stage Decoration", id: "stage", count: 6 },
];

const generatePhotos = (folder, count) => {
  return Array.from({ length: count }, (_, i) => `/images/${folder}/${i + 1}.jpg`);
};

export default function IceSectionGallery() {
  const [selected, setSelected] = useState(null);

  const selectedCategory = categories.find((c) => c.id === selected);
  const photoList =
    selectedCategory && selectedCategory.count > 0
      ? generatePhotos(selectedCategory.id, selectedCategory.count)
      : [];

  return (
    <div className="bg-white py-10 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">✨ Our Services ✨</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelected(cat.id)}
            className={`px-4 py-2 rounded-full border text-blue-600 hover:bg-blue-400 hover:text-white transition-all ${
              selected === cat.id ? "bg-blue-500 text-white" : "border-blue-300"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {selected && (
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">{selectedCategory.name}</h3>
          {photoList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
              {photoList.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={selected}
                  className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No images available for this category.</p>
          )}
        </div>
      )}
    </div>
  );
}
