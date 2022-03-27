import './Questions.css';
import right from '../../../img/right.svg';

function Questions() {
  return (
    <>
      <center><h3 style={{ fontFamily: 'Montserrat Bold' }}>часто задаваемые вопросы</h3></center>
      <ul className="collapsible">
        <li>
          <div className="collapsible-header">
            <img className="collapse-logo" src={right} alt="" />
            <span className="collapsible-head">Как осуществить бронь?</span>
          </div>
          <div className="collapsible-body">
            <span className="collapse-text">
              Бронирование домиков осуществляется только через модуль бронирования на нашем
              сайте по предоплате.
              Бронирования являются невозвратными. При отмене бронирования средства
              не возвращаются. Перенос на другие даты не возможен.
              Если у вас возникли вопросы, позвоните по номеру телефона +7 921 877 97 37.
              Для того, чтобы разместить бронирование, выберете даты проживания
              и тип домика в модуле бронирования, укажите количество гостей.
              Детей, которым не требуется отдельное спальное место, указывать
              в бронировании не нужно. Нажмите на кнопку «забронировать»,
              введите свои данные: Ф.И.О., номер телефона, эл. почту. Выберете способ оплаты.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <img className="collapse-logo" src={right} alt="" />
            <span className="collapsible-head">Как добраться?</span>
          </div>
          <div className="collapsible-body">
            <span className="collapse-text">
              Lorem ipsum dolor sit amet.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <img className="collapse-logo" src={right} alt="" />
            <span className="collapsible-head">Бронирование:</span>
          </div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
      </ul>
    </>
  );
}

export default Questions;
