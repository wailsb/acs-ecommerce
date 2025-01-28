import ProductCard from "@/Components/ProductCard";
import Article from "../Components/Article";
import Banner from "../Components/Banner";
import Search from "../Components/Search";
import Image from "next/image";
import DProdCard from "@/Components/DProdCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Search />
      <Banner />
      <div className="MainContainer p-8 w-full">
        {/* Featured Section Heading */}
        <h2 className="text-2xl text-white font-bold mb-6">Featured</h2>

        {/* Featured Products Grid */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        
        <h2 className="text-2xl text-white font-bold mb-6">More</h2>
        {/* Featured Products Grid detailed */}
        <div className="space-y-5">
          <DProdCard />
          <DProdCard />
          <DProdCard />
          <DProdCard />
        </div>
      </div>
    </div>
  );
}