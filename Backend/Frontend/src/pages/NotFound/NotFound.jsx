import LinkButton from "../../components/elements/Buttons//LinkButton/LinkButton.jsx";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl text-white">Страница не найдена</h1>
        <LinkButton link="/" text="На главную"></LinkButton>
      </div>
    </>
  );
};

export default NotFound;
