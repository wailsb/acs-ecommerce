"use client";
import Link from "next/link";

export default function ArticleDetailed() {
  // Mock article data (replace with dynamic data from an API or props)
  const article = {
    id: 1,
    title: "Top 5 Smartwatches of 2023",
    image: "/article1.jpg",
    content: `
      <p>Smartwatches have become an essential part of our daily lives, offering features like fitness tracking, notifications, and even mobile payments. In this article, we’ll take a look at the top 5 smartwatches of 2023.</p>
      <h2>1. Apple Watch Series 8</h2>
      <p>The Apple Watch Series 8 continues to dominate the market with its sleek design, advanced health features, and seamless integration with the iOS ecosystem.</p>
      <h2>2. Samsung Galaxy Watch 5</h2>
      <p>Samsung’s Galaxy Watch 5 offers a stunning AMOLED display, long battery life, and a wide range of fitness tracking features.</p>
      <h2>3. Fitbit Sense 2</h2>
      <p>Fitbit’s Sense 2 is perfect for health enthusiasts, offering advanced stress management tools and comprehensive health metrics.</p>
      <h2>4. Garmin Fenix 7</h2>
      <p>The Garmin Fenix 7 is a rugged smartwatch designed for outdoor adventurers, with features like GPS navigation and solar charging.</p>
      <h2>5. Huawei Watch GT 3</h2>
      <p>The Huawei Watch GT 3 combines elegant design with impressive battery life and accurate health tracking.</p>
    `,
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[var(--artBg)] text-[var(--text)] p-6">
      {/* Back Button */}
      <div className="w-full max-w-4xl mb-6">
        <Link
          href="/articles"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          &larr; Back to Articles
        </Link>
      </div>

      {/* Article Content */}
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Article Image */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover"
        />

        {/* Article Details */}
        <div className="p-6">
          <h1 className="text-[var(--text)] text-3xl font-bold mb-4">{article.title}</h1>

          {/* Article Content (HTML rendered safely) */}
          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </div>
  );
}