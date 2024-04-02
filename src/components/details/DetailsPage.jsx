import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Category from "../categories/Category";
import { FaAnglesRight } from "react-icons/fa6";
import styles from "./DetailsPage.module.css";

const DetailsPage = () => {
  const [blogDetails, setBlogDetails] = useState({});
  const [postIngredients, setPostIngredients] = useState("");
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blogs/${slug}`
        );
        setBlogDetails(res.data);
        setPostIngredients(res.data.ingredients);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <div className={styles.container}>
      <Category />
      <h3 className={styles.title}>{blogDetails.title}</h3>
      <p className={styles.text}>{blogDetails.excerpt}</p>
      <p className={styles.text}>{blogDetails.content}</p>
      <div className={`${styles.imageContainer} h-200`}>
        <img
          className={styles.image}
          src={blogDetails.image}
          alt={blogDetails.title}
          width="50%"
        />
      </div>
      <p className={styles.text}>{blogDetails.content}</p>
      <h3 className={styles.subTitle}>{blogDetails.content2}</h3>
      <ul className={styles.list}>
        {postIngredients.split(",").map((ingredient, index) => (
          <li key={index} className={styles.listItem}>
            <FaAnglesRight  className={styles.icon} />
            <span>{ingredient}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailsPage;
