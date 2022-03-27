import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reactRouter } from '../../../utils/utils';
import './AdminReservationsList.css';

function AdminReservationsList({ reserve }) {
  const dispatch = useDispatch();

  function deleteReservation(id) {
    dispatch({ type: 'FETCH_DELETE_RESERVATION', payload: `${id}` });
  }

  return (
    <>
      {
        localStorage.getItem('token')
        && (
        <div className="adminreslist-container">
          <p className="adminreslist-info">
            <span className="adminreslist-span">Бронирование</span>
            {' '}
            {reserve?.id}
          </p>
          <p className="adminreslist-info">
            <span className="adminreslist-span">Заезд:</span>
            {reserve?.dataIn}
          </p>
          <p className="adminreslist-info">
            <span className="adminreslist-span">Выезд:</span>
            {reserve?.dataIn}
          </p>
          <p className="adminreslist-info">
            <span className="adminreslist-span">Сумма:</span>
            {reserve?.summa}
          </p>
          {
            reserve?.payded
              ? <p className="adminreslist-info">Оплачено</p>
              : <p className="adminreslist-info">Оплата на месте</p>
          }
          <p className="adminreslist-info">
            <span className="adminreslist-span">Комментарий:</span>
            {reserve?.comment}
          </p>
          <p className="adminreslist-info">
            <span className="adminreslist-span">Домик:</span>
            {reserve?.house_id}
          </p>
          <div className="adminreslist-btn-all">
            <Link className="adminreslist-update" to={reactRouter.admin.editReservationForParamas + reserve.id} key={reserve?.id}>Изменить</Link>
            <button  className="adminreslist-btn" onClick={() => deleteReservation(reserve?.id)}>Отменить</button>
          </div>
        </div>
        )
      }
    </>
  );
}

export default AdminReservationsList;
