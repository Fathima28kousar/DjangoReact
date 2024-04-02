import React from "react";
import styles from "./Chef.module.css";
const Chef = () => {
return (
// <div className="container py-5">
    // <div className="card">
        // <img className="card-img-top" src="static/drinks.jpg" alt="Card imagecap" />
        // <div className="card-body">
            // <h5 className="card-title">Card title</h5>
            // <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                // card's content.</p>
            // </div>
        // </div>
    // </div>
<div className={styles.rightbar}>
    <h5 className="text-center">HEY I'M SHAKIRA</h5>
    <img src="static/chef.jpg" alt="burger_image" className={`img-fluid ${styles.image}`} />
    <p className={styles.text}>
        I love to sing and cook! My best time spent around the Table.
    </p>
    <p className={styles.text}>
        Don't forget to Subscribe Codingstrade! <br />
        <a href="google.com">Read More</a>
    </p>
    <div className={`card ${styles.card}`}>
        <p className="text-center">Ads Here</p>
    </div>
    <p className={`text-center ${styles.subscribe}`}>
        Subscribe Via Email
    </p>
    <div className={styles.subscribeForm}>
        <input type="email" className={`form-control mb-3 ${styles.emailInput}`} placeholder="Your Email here!" />
        <button type="button" className={`btn btn-warning btn-block ${styles.sendButton}`}>Send</button>
    </div>
    <div className={`card ${styles.card}`}>
        <p className="text-center">Ads Here</p>
    </div>
</div>
)
}

export default Chef