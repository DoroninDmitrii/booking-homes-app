/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminReservationsList from '../AdminReservationsList/AdminReservationsList';
import { FIND_RESERVATIONS_FETCH } from '../../../redux/actionType/reservationAT';
import { reactRouter } from '../../../utils/utils';
import NotFound from '../../NotFound/NotFound';
import './AdminAllReservations.css';

function AdminAllReservations() {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservationsReducer);
  const { admin } = useSelector((state) => state.adminReducer);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: FIND_RESERVATIONS_FETCH });
  }, [dispatch]);

  return (
    <>
      {admin?.email
        ? (
          <div className="app-container">
            <div className="go_back">
              <h1 className="arrow_back" onClick={() => navigate(reactRouter.admin.main)}>&#8678;</h1>
              <h1 className="title-text">Все бронирования</h1>
            </div>

            <div className="all-reservations-container">
              {
              reservations?.length
                ? reservations.map((reserve) => (
                  <AdminReservationsList
                    key={reserve.id}
                    reserve={reserve}
                  />
                ))
                : <div>None!</div>
            }

            </div>
          </div>
        ) :  <NotFound />}
     

    </>
  );
}

export default AdminAllReservations;
