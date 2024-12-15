import styles from "./SectionImage.module.css";

function SectionImage({ image }) {
  return (
    <div
      className={styles.section_image}
      style={{
        backgroundImage: `url(/images/${image}.webp)`, // Use inline background image
        backgroundSize: "cover",
      }}
    />
  );
}

export default SectionImage;
