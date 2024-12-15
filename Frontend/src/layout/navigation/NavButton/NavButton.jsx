import styles from "./NavButton.module.css";
import { Link } from "react-router-dom";

function NavButton({ text, icon, urlName }) {
  const imagePath = `/icons/Nav/${icon}`;

  return (
    <button className={styles.button} aria-label={text}>
      <Link to={`/${urlName}`} className={styles.link}></Link>
      <img src={imagePath} alt={text} className={styles.image} />
      <h2 className={styles.text}>{text}</h2>
    </button>
  );
}

export default NavButton;
