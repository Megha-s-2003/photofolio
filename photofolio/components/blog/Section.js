// import Link from "next/link";
// import blogs from "@/data/blogs";

// export default function Section() {
//   return (
//     <section className="blog">
//       <div className="container">
//         <div className="row gy-4">

//           {blogs.map((blog) => (
//             <div className="col-xl-4 col-md-6" key={blog.slug}>
//               <div className="blog-card h-100">

//                 <Link href={`/blog/${blog.slug}`}>
//                   <img
//                     src={`/assets/img/gallery/${blog.image}`}
//                     className="img-fluid"
//                     alt={blog.title}
//                   />
//                 </Link>

//                 <div className="blog-content">
//                   <span className="blog-category">
//                     {blog.category}
//                   </span>

//                   <h3>
//                     <Link href={`/blog/${blog.slug}`}>
//                       {blog.title}
//                     </Link>
//                   </h3>

//                   <p>{blog.description}</p>

//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";

async function getBlogs() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/posts/", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return await response.json();
  } catch (error) {
    console.error("Blog API error:", error);
    return [];
  }
}

export default async function Section() {
  const blogs = await getBlogs();

  return (
    <section className="blog">
      <div className="container">
        <div className="row gy-4">

          {blogs.map((blog) => (
            <div className="col-xl-4 col-md-6" key={blog.slug}>
              <div className="blog-card h-100">

                <Link href={`/blog/${blog.slug}`}>
                  <img
                    src={blog.image}
                    className="img-fluid"
                    alt={blog.heading}
                  />
                </Link>

                <div className="blog-content">
                  <span className="blog-category">
                    {blog.category}
                  </span>

                  <h3>
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.heading}
                    </Link>
                  </h3>

                  <p>{blog.description}</p>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
