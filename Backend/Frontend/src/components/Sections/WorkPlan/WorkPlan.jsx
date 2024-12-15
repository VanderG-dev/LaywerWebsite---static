import styles from "./WorkPlan.module.css";
import lineNumbers from "../../../assets/images/lineNumbers.png";
import SectionImage from "../../../components/elements/SectionImage/SectionImage";

function WorkPlan() {
  return (
    <>
      <section className={styles.container}>
        <SectionImage image="WorkPlan"></SectionImage>

        <img src={lineNumbers} alt="lineNumbers" className={styles.line} />
        <h2 className={styles.main_text}>Как это работает?</h2>

        <h2 className={styles.sub_text}>1. Заполните заявку </h2>
        <p className={styles.sub_text_second}>
          Расскажите нам о своей проблеме и укажите, насколько она срочная. Это поможет нам быстрее
          подготовить ответ.
        </p>

        <h2 className={styles.sub_text}>2. Уточнение информации </h2>
        <p className={styles.sub_text_second}>
          Если потребуется, наш юрист свяжется с вами для уточнения деталей. Мы готовы работать с
          вами так, как вам удобно!
        </p>

        <h2 className={styles.sub_text}>3. Получите консультацию</h2>
        <p className={styles.sub_text_second}>
          В кратчайшие сроки вы получите ответ в выбранном вами формате. Мы на связи круглосуточно!
        </p>
      </section>
    </>
  );
}

export default WorkPlan;
