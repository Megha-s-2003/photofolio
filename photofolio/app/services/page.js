import Navbar from "@/components/common/Navbar";
import Hero from "@/components/services/Hero";
import Section from "@/components/services/Section";
import Pricing from "@/components/services/Pricing";
import Testimonial from "@/components/services/Testimonial";
import Footer from "@/components/common/Footer";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* <main id="main" data-aos="fade" data-aos-delay="300"> */}
        <Hero />
        <Section />
        <Pricing />
        <Testimonial />
      {/* </main> */}

      <Footer />
    </>
  );
}