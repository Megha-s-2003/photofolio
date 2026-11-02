import Navbar from "@/components/common/Navbar";
import Hero from "@/components/gallery/Hero";
import Section from "@/components/gallery/Section";
import Footer from "@/components/common/Footer";

export default function Gallery() {
  return (
    <>
      <Navbar />

      {/* <main id="main" data-aos="fade" data-aos-delay="300"> */}
        <Hero />
        <Section />
      {/* </main> */}

      <Footer />
    </>
  );
}