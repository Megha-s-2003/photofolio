
"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
const reviews = [
  {
    name: "Saul Goodman",
    role: "Ceo & Founder",
    image: "testimonials-1.jpg",
    description: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
  },
  {
    name: "Sara Wilsson",
    role: "Designer",
    image: "testimonials-2.jpg",
    description: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
  },
  {
    name: "Jena Karlis",
    role: "Store Owner",
    image: "testimonials-3.jpg",
    description: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
  },
  {
    name: "Matt Brandon",
    role: "Freelancer",
    image: "testimonials-4.jpg",
    description: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
  },
  {
    name: "John Larson",
    role: "Entrepreneur",
    image: "testimonials-5.jpg",
    description: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore."
  }
];

export default function Testimonial() {

useEffect(() => {
  const swiper = new Swiper(".slides-3", {
    modules: [Pagination, Autoplay],
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
 slidesPerView: 1,
slidesPerGroup: 1,
spaceBetween: 40,

pagination: {
  el: ".swiper-pagination",
  clickable: true,
  type: "bullets",
},
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  return () => swiper.destroy(true, true);
}, []);
 

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">

        <div className="section-header">
          <h2>Testimonials</h2>
          <p>What they are saying</p>
        </div>

        <div className="slides-3 swiper">
          <div className="swiper-wrapper">

            {reviews.map((review, index) => (
              <div className="swiper-slide" key={index}>
                <div className="testimonial-item">

                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i className="bi bi-star-fill" key={star}></i>
                    ))}
                  </div>

                  <p>{review.description}</p>

                  <div className="profile mt-auto">
                    <img
                      src={`/assets/img/testimonials/${review.image}`}
                      className="testimonial-img"
                      alt={review.name}
                    />

                    <h3>{review.name}</h3>
                    <h4>{review.role}</h4>
                  </div>

                </div>
              </div>
            ))}

          </div>

          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
  );
}
