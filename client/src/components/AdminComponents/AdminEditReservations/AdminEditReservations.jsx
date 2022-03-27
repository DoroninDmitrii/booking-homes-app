import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';

function AdminEditReservations() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { reservations } = useSelector((state) => state.reservationsReducer);
  const { admin } = useSelector((state) => state.adminReducer);
  const reserv = reservations.find((el) => el.id === +id);

  const goBack = () => {
    navigate(-1);
  };

  const dataInInput = useRef();
  const dataOutInput = useRef();
  const summa = useRef();
  const comment = useRef();

  const handlerUpdate = (e) => {
    e.preventDefault();
    const updateData = {
      id,
      dataIn: dataInInput.current.value,
      dataOut: dataOutInput.current.value,
      summa: summa.current.value,
      comment: comment.current.value,
    };
    dispatch({ type: 'FETCH_UPDATE_RESERVATIONS', payload: updateData });
  };

  return (
    <>
      {admin?.email
        ? (
        <div>
          <form onSubmit={handlerUpdate}>
            <input ref={dataInInput} type="date" defaultValue={reserv.dataIn} />
            <input ref={dataOutInput} type="date" defaultValue={reserv.dataOut} />
            <input ref={summa} type="number" defaultValue={reserv.summa} />
            {
              reserv?.payded
                ? <p>Оплачено</p>
                : <p>Оплата при заселении</p>
            }
            <textarea ref={comment} defaultValue={reserv.comment} />
            <p>
              Выбранный дом:
              {reserv?.house_id}
            </p>
            <button onClick={goBack}>Сохранить изменения</button>

          </form>
        </div>
        ): <NotFound />}
    
    </>
  );
}

export default AdminEditReservations;
