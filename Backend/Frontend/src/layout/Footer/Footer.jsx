import styles from "./Footer.module.css";
import SectionImage from "../../components/elements/SectionImage/SectionImage";
import telegram from "../../assets/icons/Footer/telegram.png";
import vk from "../../assets/icons/Footer/vk.png";
import whatsapp from "../../assets/icons/Footer/whatsapp.png";

function Footer() {
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.contacts}>
          <button className={styles.button}>
            <a href="https://t.me/KhlystovNN">
              <img src={telegram} alt="telegram" className={styles.contact_image} />
            </a>
          </button>

          <button className={styles.button}>
            <a href="https://wa.me/+79524616931">
              <img src={whatsapp} alt="whatsapp" className={styles.contact_image} />
            </a>
          </button>
          <button className={styles.button}>
            <img src={vk} alt="vk" className={styles.contact_image} />
          </button>
        </div>

        <h2 className={styles.second_text}>
          Мы ценим ваше время и стремимся предоставить качественные бесплатные юридические
          консультации. Не упустите возможность получить профессиональную юридическую помощь в
          Нижнем Новгороде!
        </h2>
      </footer>
    </>
  );
}

export default Footer;
