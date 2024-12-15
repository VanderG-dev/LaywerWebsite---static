import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

import styles from "./MainForm.module.css";
import MainButton from "../../elements/Buttons/MainButton/MainButton";
import SectionImage from "../../../components/elements/SectionImage/SectionImage";

function MainForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    problem: "",
    consultationType: "DEFAULT",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (!isLoading) {
      e.preventDefault();
      setIsLoading(true);
      setResponseMessage(""); // Clear previous messages

      fetch(`${API_URL}api/telegram`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setResponseMessage(data.message);
            setIsError(false);
            setFormData({
              name: "",
              email: "",
              number: "",
              problem: "",
              consultationType: "DEFAULT",
            });
          } else {
            setResponseMessage(` ${data.message || "Не удалось отправить сообщение"}`);
            setIsError(true);
          }
        })
        .catch((error) => {
          console.error("Request error:", error);
          setResponseMessage("Произошла ошибка, попробуйте еще раз.");
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setResponseMessage("Подождите немного перед отправкой сообщения!");
    }
  };

  return (
    <div className={styles.container}>
      <SectionImage image="Form" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.main_text}>Получите бесплатную консультацию!</h1>
        <h2 className={styles.second_text}>
          Заполните простую форму, опишите свою проблему и выберите удобный формат для консультации.
        </h2>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Ваше имя"
          className={styles.form_input}
        />
        <input
          type="text"
          name="number"
          onChange={handleChange}
          value={formData.number}
          placeholder="Номер телефона"
          className={styles.form_input}
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Электронная почта"
          className={styles.form_input}
        />
        <input
          type="text"
          name="problem"
          onChange={handleChange}
          value={formData.problem}
          placeholder="Описание вашей проблемы"
          className={styles.form_input}
        />
        <select
          className={styles.select}
          value={formData.consultationType}
          name="consultationType"
          onChange={handleChange}
        >
          <option value="DEFAULT" disabled>
            форма консультации
          </option>
          <option value="номер телефона"> Устно по номеру телефона</option>
          <option value="почта"> Письменно на электронную почту</option>
          <option value="Онлайн консультация"> Онлайн консультация</option>
          <option value="Мессенджер"> Письменно через месседжер</option>
        </select>

        {responseMessage && (
          <p className={isError ? styles.error_message : styles.success_message}>
            {responseMessage}
          </p>
        )}
        <MainButton text={isLoading ? "отправка..." : "Получить консультацию"} />
      </form>
    </div>
  );
}

export default MainForm;
