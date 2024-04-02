import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Category.module.css";
import {Link} from 'react-router-dom'

const Category = () => {
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/categories/`
                );
                setCat(response.data); //taking all data from response and putting inside the blog
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={`container my-5 ${styles.scrollContainer}`}>
        <div className={`row ${styles.innerContainer}`}>
            {cat.map((category) => (
                <div className={`col`} key={category.id}>
                    <Link to={`/category/${category.id}`}>
                        <img src={category.image} className={`${styles.image}`} alt="Card" />
                        <p className={styles.text}>{category.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Category;
