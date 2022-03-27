import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteInterval } from '../../../redux/actionCreators/orderAC';
import { reactRouter } from '../../../utils/utils';
import './FormBooking.css';
import calendar from '../../../img/calendar.svg';

function FormBooking() {
  function foo(max, min) {
    const maxDay = Date.parse(max);
    const minDay = Date.parse(min);

    const interval = [];
    for (let i = minDay; i <= maxDay; i += 60 * 60 * 24 * 1000) {
      interval.push(new Date(i).toISOString().substring(0, 10));
    }
    return interval.length - 1;
  }
  const { id } = useParams();
  const { orders, interval } = useSelector((state) => state.orderReducer);
  const allDay = foo(interval.dataOutUser, interval?.dataInUser);
  const currentHouse = orders.find((el) => el.id === +id);
  const summa = `${allDay * currentHouse?.price}`;
  const createOrderForm = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = (event) => {
    event.preventDefault();
    dispatch(deleteInterval({}));
    navigate(-1);
  };

  const createOrder = (event) => {
    event.preventDefault();
    const info = Object.fromEntries(new FormData(createOrderForm.current));
    dispatch({
      type: 'SAVE_MY_ORDER',
      payload: {
        info, interval, currentHouse, summa,
      },
    });
    // Добавить тосты
    navigate(reactRouter.user.homepage);
  };

  return (
    <div className="app-container">
      <div className="formbooking-main">
        <div className="formbooking-header">
          <img className="calendar-logo" src={calendar} alt="" />
          <p className="data-calendar">
            {`${(interval?.dataInUser).split('-').reverse().join('.')} г.`}
            -
            {`${(interval?.dataOutUser).split('-').reverse().join('.')} г.`}
          </p>
        </div>
        <div className="formbooking-smallmain">
          <button className="backbutton" onClick={goBack}>{'< Назад'}</button>
          <div>
            <span className="summa-zakaza">
              Общая стоимость:
              <span className="rub">
                {summa}
                ₽
              </span>
            </span>
            <p>
              Время заезда и выезда
              Стандартное время заезда — 15:00, выезда — 12:00.

            </p>
            <p>
              Коттедж:
              <span className="span-housename">{currentHouse?.name}</span>
            </p>

          </div>

          <form ref={createOrderForm} onSubmit={createOrder}>
            <div className="formbooking-input">
              <div className="formbooking-div"><input className="input1" type="text" placeholder="Имя" name="name" required autoComplete="off" /></div>
              <div className="formbooking-div"><input className="input1" type="email" placeholder="Email" name="email" required autoComplete="off" /></div>
              <div className="formbooking-div">
                <input
                  className="input1"
                  type="text"
                  placeholder="8(123)-456-78-90"
                  name="phone"
                  id="phone"
                  minLength="11"
                  required
                  autoComplete="off"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />

              </div>
            </div>
            <p className="dopoptions">Дополнительные комментарии</p>
            <textarea style={{ backgroundColor: 'white', border: '1px solid black' }} type="text" placeholder="Если у вас есть дополнительные пожелания, пожалуйста, дайте нам знать. Мы постараемся учесть ваши пожелания при наличии такой возможности." name="comment" />
            <button  className="button-booking-buy">Забронировать</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormBooking;
