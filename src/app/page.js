
import Article from "../Components/Article";
import Banner from "../Components/Banner";
import Search from "../Components/Search";
import Image from "next/image";

export default function Home() {
  return (<div className="flex flex-col items-center">
        <Search/>
        <Banner/>
  </div>
  );
}