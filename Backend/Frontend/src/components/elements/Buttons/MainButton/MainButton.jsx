import styles from "./MainButton.module.css";

function MainButton({ onClick, text = "Получить консультацию" }) {
  return (
    <button onClick={onClick} className={styles.button}>
      <h1 className={styles.button_text}>{text} </h1>
    </button>
  );
}

export default MainButton;
