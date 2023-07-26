import '../../styles/header.css';
import logo from '../../assests/logo.png';
import React, { useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';

const nav__Links = [
  {
    path: '#home',
    display: 'Home',
  },
  {
    path: '#schedule',
    display: 'Schedule',
  },
  {
    path: '#classes',
    display: 'Classes',
  },
  {
    path: '#pricing',
    display: 'Pricing',
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('sticky__header');
    } else {
      headerRef.current.classList.remove('sticky__header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);

    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const handleClick = e => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location =  document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left:0,
      top:location - 80,
    });

  }

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>Lotus Fitness</h2>
          </div>

          {/* navigation*/}
          <div className="navigation">
            <ul className="menu">
              {nav__Links.map(item => (
                <li className="nav__items" key={item.path}>
                  <a onClick={handleClick} href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* nav right*/}
          <div className="nav__right">
            <button className="register__btn">
              Register<i className="ri-menu-fill"></i>
            </button>
            <span className="mobile__menu">
              <HiMenu />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
