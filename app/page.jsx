import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Message from "./components/Message";
import About from "./components/About";
import WhyChoseUs from "./components/WhyChoseUs";
import NewsFeed from "./components/NewsFeed";
import Action from "./components/action";
import Map from "./components/Map";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Stats />
      <Message />
      <About />
      <WhyChoseUs />
      <NewsFeed />
      <Action />
      <Map />
    </div>
  );
}
