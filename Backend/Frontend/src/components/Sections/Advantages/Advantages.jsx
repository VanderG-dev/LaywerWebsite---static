import styles from "./Advantages.module.css";
import wallet from "../../../assets/icons/advantages/wallet.png";
import balance from "../../../assets/icons/advantages/balance.png";
import home from "../../../assets/icons/advantages/home.png";
import corporate_laws from "../../../assets/icons/advantages/corporate-laws.png";
import law from "../../../assets/icons/advantages/law.png";
import secure_shield from "../../../assets/icons/advantages/secure-shield.png";
import SectionImage from "../../../components/elements/SectionImage/SectionImage";
import Li from "../../elements/Li/Li";

function Advantages() {
  return (
    <>
      <section className={styles.container}>
        <SectionImage image="Advantages"></SectionImage>
        <h2 className={styles.main_text}>Почему выбирают нас?</h2>
        <ul className={styles.ul}>
          <Li
            mainText="- Консультации бесплатно и без обязательств"
            SubText="наши консультации абсолютно бесплатны, без скрытых платежей и уловок."
            image={wallet}
            styles={styles}
          />
          <Li
            mainText="- Подбор судебной практики "
            SubText="найдем наиболее подходящие решения для вашей ситуации"
            image={balance}
            styles={styles}
          />
          <Li
            mainText="- Комфортное взаимодействие "
            SubText="выбирайте, как вам удобно получать консультацию: по телефону, в мессенджере или через
              электронную почту!"
            image={home}
            styles={styles}
          />
          <Li
            mainText="- Гарантия конфиденциальности"
            SubText="ваша информация под надежной защитой"
            image={secure_shield}
            styles={styles}
          />
          <Li
            mainText="- Объясняем сложное простым языком "
            SubText=" берём трудные или запутанные темы и рассказываем о них так, чтобы любой мог понять."
            image={corporate_laws}
            styles={styles}
          />
          <Li
            mainText="- Гарантия качества "
            SubText="мы следуем строгим стандартам качества и этики, что обеспечивает высокий уровень
              обслуживания и соблюдение профессиональных норм."
            image={law}
            styles={styles}
          />
        </ul>
      </section>
    </>
  );
}

export default Advantages;
