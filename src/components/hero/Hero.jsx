import styles from './Hero.module.css'
import { Link } from 'react-router-dom'


const Hero = () => {

  return (
    <div className="container py-2">
      <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2">
        <div className="col mb-4">
          <Link to="/details">
            <div className="card h-100">
              <img src="/static/meat.jpg" className={`card-img-top ${styles.imgCover}`} alt="..." />
              <div className={styles.textContainer}>
                <p className={`card-text ${styles.text}`}>Meat</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src="/static/appetizer.jpg" className={`card-img-top ${styles.imgCover}`} alt="..." />
            <div className={styles.textContainer}>
              <p className={`card-text ${styles.text}`}>Appetizer</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src="/static/burger.jpg" className={`card-img-top ${styles.imgCover}`} alt="..." />
            <div className={styles.textContainer}>
              <p className={`card-text ${styles.text}`}>Burger</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src="/static/drins.jpg" className={`card-img-top ${styles.imgCover}`} alt="..." />
            <div className={styles.textContainer}>
              <p className={`card-text ${styles.text}`}>Drinks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;