"use client";

export default function Article({ title, image, url }) {
  return (
    <div className="flex flex-col h-fit w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="bg-gray-800 p-4">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <a
          href={url}
          className="text-blue-400 hover:text-blue-300 mt-2 inline-block"
        >
          Read More
        </a>
      </div>
    </div>
  );
}