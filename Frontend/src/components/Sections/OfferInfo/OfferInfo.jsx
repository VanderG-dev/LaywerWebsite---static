import styles from "./OfferInfo.module.css";

import { Link } from "react-router-dom";

import MainButton from "../../elements/Buttons/MainButton/MainButton";
import SectionImage from "../../elements/SectionImage/SectionImage";

function OfferInfo({ switchModal, service }) {
  return (
    <>
      <div className={styles.container}>
        <SectionImage image="OfferInfo"></SectionImage>
        <Link
          to="/"
          className=" mt-6 p-2 rounded bg-slate-900 z-50 transition-all hover:pl-3 hover:pr-3"
        >
          <button className="w-20  text-white">назад</button>
        </Link>
        <h2 className={styles.main_text}>Наши услуги</h2>
        <div className="z-10 flex flex-col">
          <ul className={styles.list}>
            {service.services.map((service, index) => (
              <div>
                <li key={index} className={styles.list_element}>
                  {service.name}
                </li>
                <h2>{service.description}</h2>
              </div>
            ))}
          </ul>
          <div className="flex justify-center">
            <MainButton onClick={switchModal}></MainButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferInfo;
