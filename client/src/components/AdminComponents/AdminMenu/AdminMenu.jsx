import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils';
import NotFound from '../../NotFound/NotFound';
import './AdminMenu.css';

function AdminMenu() {
  const { admin } = useSelector((state) => state.adminReducer);
  return (
    <>
      {admin?.email
        ? (
        <div>
          <div>
            <h3 className="adminmenu-title">Раздел бронирования</h3>
            <Link className="adminmenu-link" to={reactRouter.admin.allReservations}>Все бронирования</Link>
            <br />
          </div>
          <div>
            <h3 className="adminmenu-title">Раздел по работе с домами</h3>
            <Link className="adminmenu-link" to={reactRouter.admin.allHouses}>Все домики</Link>
            <br />
            <Link className="adminmenu-link" to={reactRouter.admin.addHouse}>Добавить дом</Link>
          </div>
          <div>
            <h3 className="adminmenu-title">Раздел по работе с отзывами</h3>
            <Link className="adminmenu-link" to={reactRouter.admin.confirmReviews}>Все отзывы</Link>
          </div>
        </div>
        ) : <NotFound />}
      

    </>
  );
}

export default AdminMenu;
