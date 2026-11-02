
// import "./globals.css";
import Preloader from "@/components/common/Preloader";
// import AOSInitializer from "@/components/common/AOSInitializer";
import Script from "next/script";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css";
import "swiper/css/pagination";
import "glightbox/dist/css/glightbox.min.css";
import "aos/dist/aos.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        {/* Main template CSS */}
        <link
          href="/assets/css/main.css"
          rel="stylesheet"
        />
      </head>

      <body>
         {/* <Preloader /> */}
         {/* <AOSInitializer/> */}
        {children}

        {/* Bootstrap JavaScript */}
        <Script
          src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Swiper */}
        <Script
          src="/assets/vendor/swiper/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        {/* GLightbox */}
        <Script
          src="/assets/vendor/glightbox/js/glightbox.min.js"
          strategy="afterInteractive"
        />

        {/* AOS */}
       {/* <Script
  src="/assets/vendor/aos/aos.js"
  strategy="beforeInteractive"
/> */}

        {/* PHP Email Form */}
        {/* <Script
          src="/assets/vendor/php-email-form/validate.js"
          strategy="afterInteractive"
        /> */}

        {/* Main template JavaScript */}
        <Script
          src="/assets/js/main.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
