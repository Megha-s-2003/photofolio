import Navbar from "@/components/common/Navbar";
import Hero from "@/components/contact/Hero";
import Section from "@/components/contact/Section";
import Footer from "@/components/common/Footer";

export default function Contact() {
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