import { React, useEffect } from "react";
import "./blog.css";
import { BsArrowRightShort } from "react-icons/bs";
import "aos/dist/aos.css";
import Aos from "aos";
import JapanBlog from "./Japan";
import { Link, useNavigate } from "react-router-dom";
import BlogData from "./BlogData";

const Blog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleClick = async (event) => {
    event.preventDefault();
    console.log(event);
    navigate(`/blog/${event.target.id}`);
  };
  return (
    <section className="blog section">
      <div className="secContainer">
        <div className="secIntro">
          <h2
            data-aos="fade-up"
            data-aos-duration="2000"
            className="blogTitle"
            style={{ color: "black" }}
          >
            Our Best Blog?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="2500"
            className="blogSubTitle"
            style={{ color: "black", fontSize: "18px" }}
          >
            An insight to the incredible experience in the world !
          </p>
        </div>
        <div className="blog-grid">
          {BlogData.map((blog) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="singlePost"
              >
                <div className="blogImg">
                  <img src={blog.image} />
                </div>
                <div className="postDetails">
                  <h4
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="postTitle"
                    style={{ color: "black" }}
                  >
                    {blog.title}
                  </h4>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="4000"
                    className="postSubtitle"
                  >
                    {blog.description}
                  </p>
                  <a
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    href="/blog/japan"
                    className="readFlex"
                  >
                    Read more{" "}
                    <BsArrowRightShort
                      id={blog.id}
                      onClick={handleClick}
                      className="readIcon"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
