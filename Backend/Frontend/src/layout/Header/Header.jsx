import "../../layout/Header/Header.css";

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (headerRef.current) {
      if (scrollTop > lastScrollTop) {
        headerRef.current.style.top = "-80px"; // Hide header
      } else {
        headerRef.current.style.top = "0px"; // Show header
      }
    }

    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header ref={headerRef}>
      <div className="header-container">
        <nav className="nav-box">
          <ul className="nav-list">
            <li>
              <Link to="/">
                <button className="nav-button" aria-label="Go to Khlystov Group homepage">
                  <img src="/logo.jpg" alt="logo" width="48px" className="logo mr-2" />
                  <span className="nav-text">Юридическая компания</span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="second-nav-box">
          <img src="/icons/Nav/call.png" alt="call" width="32px" className="phone-number" />
          <a href="tel:+79524616931" className="nav-text">
            +7 (952) 461-69-31
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
