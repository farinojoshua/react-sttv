import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import FeaturedCard from "./components/FeaturedCard";
import About from "./components/About";
import Lecturer from "./components/Lecturer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCard />
      <About />
      <Lecturer />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
