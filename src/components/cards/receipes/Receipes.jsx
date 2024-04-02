import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./Receipe.module.css";
import Popular from "../popular/Popular";

const Receipes = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blogs/`
        );
        setBlog(response.data); //taking all data from response and putting inside the blog
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container py-5">
      <div>
      {blog.map((post) => (
        <Link
          to={`details/${post.slug}`}
          style={{ textDecoration: "none", color: "inherit" }} key={post.id}>
          
            <div className="card flex-row mb-4" >
              <div className={`col-md-6 p-0 ${styles.cardImage}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={`card-img-left example-card-img-responsive
                    ${styles.images}`}
                />
              </div>
              <div className="card-body ">
                <h4 className="card-title h5 h4-sm">{post.title}</h4>
                <p className="card-text">{post.excerpt}</p>
              </div>
            </div>
            </Link>
          ))}
        
        <Popular />
      </div>
    </div>
  );
};

export default Receipes;
