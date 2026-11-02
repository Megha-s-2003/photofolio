import Navbar from "@/components/common/Navbar";
import Hero from "@/components/blog/Hero";
import Section from "@/components/blog/Section";
import Footer from "@/components/common/Footer";

export default function Blog() {
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