import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import { getTopAlbums } from "./api-store/getTopAlbums";

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await getTopAlbums();
      setAlbums(response);
    };
    fetchAlbums();
    return () => {};
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Carousel data={albums} />
      <Section />
    </>
  );
}

export default App;
