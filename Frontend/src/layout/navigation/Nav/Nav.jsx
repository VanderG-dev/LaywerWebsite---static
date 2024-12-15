import "./Nav.css";
import NavButton from "../NavButton/NavButton";
import { legalServices } from "../../../Data/NavData/NavData";

function Nav() {
  return (
    <div className="content-box-white">
      <div className="nav-flex">
        {legalServices.map((service, index) => (
          <NavButton
            key={index}
            urlName={service.urlName}
            BgImage={service.BgImage}
            text={service.category}
            icon={`${service.icon}.png`}
            description={service.description}
            services={service.services}
          />
        ))}
      </div>
    </div>
  );
}

export default Nav;
