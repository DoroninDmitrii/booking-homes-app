import { NavLink } from 'react-router-dom';
import { WeatherApi } from '../WeatherApi/WeatherApi';
import { reactRouter } from '../../utils/utils';
import logo from '../../img/logo.svg';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const { admin } = useSelector((state) => state.adminReducer);

  return (
    <>
      <div className="nav-123">
        <div className="nav-main">
          <NavLink to={reactRouter.user.homepage} className="header-logo">
            <img src={logo} alt="" />
          </NavLink>

          <div className="header-logo-text2">
            <NavLink to={reactRouter.user.homepage} className="header-logo-park">
              <span className="header-logo-text">eco</span>
              PARK
            </NavLink>
          </div>
          <div className="header-contacts-logo">
            <a href="tel:+79218683650" className="header-contacts-link">
              8 (812) 300 0 300
            </a>
            <WeatherApi />
          </div>
        </div>
      </div>
      <div className="header-container">

        <div className="header-parent">
          <NavLink to={reactRouter.user.booking} className={({ isActive }) => `${isActive ? 'nav-text-booking_none' : 'nav-text-booking'}`}>Бронировать</NavLink>
          <a className="nav-text" href="/#AboutUs">О нас</a>
          <NavLink to={reactRouter.user.house} className={({ isActive }) => `${isActive ? 'nav-text-booking_none' : 'nav-text-booking'}`}>Домики</NavLink>
          <a className="nav-text" href="/#Reviews">Услуги</a>
          <a className="nav-text" href="/#Contacts">Контакты</a>
          {admin?.email ? <NavLink to={reactRouter.admin.logout} className="nav-text">Выйти</NavLink> : <></>}

        </div>
      </div>

    </>
  );
}

export default Nav;
