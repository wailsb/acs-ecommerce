import ProductCard from "@/Components/ProductCard";
import Article from "../Components/Article";
import Banner from "../Components/Banner";
import Search from "../Components/Search";
import DProdCard from "@/Components/DProdCard";

export default function Home() {
  // Mock data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Smart Watch",
      price: "6000DA",
      image: "/smwatch.jpeg",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      price: "4500DA",
      image: "/earbuds.webp",
    },
    {
      id: 3,
      name: "Smart Speaker",
      price: "8000DA",
      image: "/speaker.jpg",
    },
    {
      id: 4,
      name: "Fitness Tracker",
      price: "5000DA",
      image: "/fitness-tracker.jpg",
    },
  ];

  // Mock data for detailed products
  const detailedProducts = [
    {
      id: 1,
      name: "Smart Watch",
      price: "6000DA",
      image: "/smwatch.jpeg",
      description: "Snopy SN-BT96 Pretty Back Bluetooth",
      category: "Wearables",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      price: "4500DA",
      image: "/earbuds.webp",
      description: "High-quality sound with noise cancellation",
      category: "Audio",
    },
    {
      id: 3,
      name: "Smart Speaker",
      price: "8000DA",
      image: "/speaker.jpg",
      description: "Voice-controlled smart speaker",
      category: "Smart Home",
    },
    {
      id: 4,
      name: "Fitness Tracker",
      price: "5000DA",
      image: "/fitness-tracker.jpg",
      description: "Track your fitness and health metrics",
      category: "Wearables",
    },
  ];

  // Mock data for articles
  const articles = [
    {
      id: 1,
      title: "Top 5 Smartwatches of 2023",
      image: "/article1.avif",
      url: "/articles/top-5-smartwatches-2023",
    },
    {
      id: 2,
      title: "How to Choose the Right Headphones",
      image: "/article1.avif",
      url: "/articles/choose-headphones",
    },
    {
      id: 3,
      title: "The Future of Wearable Technology",
      image: "/article1.avif",
      url: "/articles/future-wearable-tech",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Search Bar */}
      <div className="w-full max-w-4xl px-4 mt-6">
        <Search />
      </div>

      {/* Banner */}
      <div className="w-full max-w-4xl px-4 mt-6">
        <Banner />
      </div>

      {/* Main Content */}
      <div className="MainContainer w-full max-w-4xl px-4 py-8">
        {/* Featured Section Heading */}
        <h2 className="text-2xl font-bold mb-6">Featured</h2>

        {/* Featured Products Grid */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        {/* More Section Heading */}
        <h2 className="text-2xl font-bold mb-6 mt-8">More</h2>

        {/* Detailed Products List */}
        <div className="space-y-4">
          {detailedProducts.map((product) => (
            <DProdCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              category={product.category}
            />
          ))}
        </div>

        {/* Articles Section */}
        <h2 className="text-2xl font-bold mb-6 mt-8">Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              image={article.image}
              url={article.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}