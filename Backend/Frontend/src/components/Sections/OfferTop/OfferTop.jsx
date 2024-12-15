import styles from "./OfferTop.module.css";
import SectionImage from "../../../components/elements/SectionImage/SectionImage";

function OfferTop({ service }) {
  return (
    <>
      <div className={styles.container}>
        <SectionImage image={service.BgImage}></SectionImage>

        <div className={styles.text_container}>
          <div className={styles.image_align}>
            <img
              src={`/icons/Nav/${service.icon}.png`}
              alt={service.icon}
              className={styles.image}
            />
            <h2 className={styles.main_text}>{service.category}</h2>
          </div>

          <h2 className={styles.second_text}>{service.description}</h2>
        </div>
      </div>
    </>
  );
}

export default OfferTop;
