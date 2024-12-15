import { useState } from "react";

import Header from "../../layout/Header/Header.jsx";
import Introduction from "../../components/Sections/Introduction/Introduction.jsx";
import Nav from "../../layout/navigation/Nav/Nav.jsx";
import About from "../../components/Sections/About/About.jsx";
import Advantages from "../../components/Sections/Advantages/Advantages.jsx";
import WorkPlan from "../../components/Sections/WorkPlan/WorkPlan.jsx";
import MainForm from "../../components/forms/MainForm/MainForm.jsx";
import ModalForm from "../../components/forms/ModalForm/ModalForm.jsx";
import Footer from "../../layout/Footer/Footer.jsx";

function HomePage() {
  const [isHidden, setIsHidden] = useState(true);

  const switchModal = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <>
      <Header></Header>
      <main>
        <Introduction switchModal={switchModal}></Introduction>
        {!isHidden && <ModalForm switchModal={switchModal}></ModalForm>}
        <Nav></Nav>
        <WorkPlan></WorkPlan>
        <Advantages></Advantages>
        <About></About>
        <MainForm Modal={true}></MainForm>
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
