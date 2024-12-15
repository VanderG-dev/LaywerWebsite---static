import "../../../pages/Home/Home.css";

import arrow from "/icons/main/arrow.png?url";
import SectionImage from "../../elements/SectionImage/SectionImage.jsx";
import MainButton from "../../elements/Buttons/MainButton/MainButton.jsx";

function TopSection({ switchModal }) {
  return (
    <>
      <section className="main-content-box">
        <SectionImage image="TopSection"></SectionImage>

        <h1 className="main-text mt-10">Бесплатная юридическая консультация в Нижнем Новгороде</h1>
        <h2 className="main-second-text">
          Есть юридические вопросы? Не переживайте, мы здесь, чтобы помочь! Получите бесплатную
          юридическую консультацию и узнайте всё, что вас интересует, без каких-либо затрат! Наша
          команда опытных юристов из Нижнего Новгорода и области готова поддержать вас и помочь
          разобраться в любых правовых вопросах.
        </h2>
        <MainButton onClick={switchModal}></MainButton>
        <img className="arrow" src={arrow} alt="arrow" />
      </section>
    </>
  );
}

export default TopSection;
