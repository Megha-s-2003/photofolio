// import Navbar from "@/components/common/Navbar";
// import Footer from "@/components/common/Footer";
// import blogs from "@/data/blogs";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// export default async function BlogDetails({ params }) {

//   const { slug } = await params;

//   const blog = blogs.find((item) => item.slug === slug);

//   if (!blog) {
//     notFound();
//   }

//   return (
//     <>
//       <Navbar />

//       <main id="main">

//         {/* Blog Header */}
//         <section className="hero page-header d-flex align-items-center">
//           <div className="container text-center">

//             <h2>{blog.title}</h2>

//             <p>{blog.description}</p>

//           </div>
//         </section>

//         {/* Blog Details */}
//         <section className="blog-details">
//           <div className="container">

//             <div className="row justify-content-center">

//               <div className="col-lg-9">

//                 <img
//                   src={`/assets/img/gallery/${blog.image}`}
//                   className="img-fluid blog-details-img"
//                   alt={blog.title}
//                 />

//                 <div className="blog-details-content">

//                   <span className="blog-category">
//                     {blog.category}
//                   </span>

//                   <h1>{blog.title}</h1>

//                   <p>{blog.content}</p>

//                   <Link href="/blog" className="read-more">
//                     ← Back to Blog
//                   </Link>

//                 </div>

//               </div>

//             </div>

//           </div>
//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// }


import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getBlog(slug) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/posts/${slug}/`,
      {
        cache: "no-store",
      }
    );

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }

    return await response.json();

  } catch (error) {
    console.error("Blog details API error:", error);
    throw error;
  }
}


export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/posts/${slug}/`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return {
        title: "Blog Not Found | PhotoFolio",
      };
    }

    const blog = await response.json();

    return {
      title: blog.meta_title || blog.heading,
      description: blog.meta_description || blog.description,
    };

  } catch (error) {
    return {
      title: "Blog | PhotoFolio",
      description: "Explore photography stories on PhotoFolio.",
    };
  }
}



export default async function BlogDetails({ params }) {

  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main id="main">

        {/* Blog Header */}
        <section className="hero page-header d-flex align-items-center">
          <div className="container text-center">

            <h2>{blog.heading}</h2>

            <p>{blog.description}</p>

          </div>
        </section>

        {/* Blog Details */}
        <section className="blog-details">
          <div className="container">

            <div className="row justify-content-center">

              <div className="col-lg-9">

                <img
                  src={blog.image}
                  className="img-fluid blog-details-img"
                  alt={blog.heading}
                />

               <div className="blog-details-content">

  <span className="blog-category">
    {blog.category}
  </span>

  <h1>{blog.heading}</h1>

  <p className="blog-author">
    By {blog.author}
  </p>

  <p style={{ whiteSpace: "pre-line" }}>
    {blog.content}
  </p>

                  <Link href="/blog" className="read-more">
                    ← Back to Blog
                  </Link>

                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
