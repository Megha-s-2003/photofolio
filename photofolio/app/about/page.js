
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/about/Hero";
import Section from "@/components/about/Section";
import Footer from "@/components/common/Footer";
import Testimonials from "@/components/about/Testimonials";

export default function About() {
  return (
    <>
      <Navbar />
  {/* <main id="main" data-aos="fade" data-aos-delay="300"> */}
        <Hero />
        <Section />
        <Testimonials />
      {/* </main> */}

      <Footer />
    </>
  );
}
