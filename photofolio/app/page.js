import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/common/Footer";
import Gallery from "@/components/home/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* <main id="main" data-aos="fade" data-aos-delay="300"> */}
        <Hero />
        <Gallery />
      {/* </main> */}

      <Footer />
    </>
  );
}