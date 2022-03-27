import './Terms.css';
import family from '../../../img/family.svg';
import clock from '../../../img/clock.svg';
import dogbaby from '../../../img/dogbaby.svg';
import kid from '../../../img/kid.svg';
import sale from '../../../img/sale.svg';
import money from '../../../img/money.svg';

function Contacts() {
  return (
    <>
      <div className="container-options1">
        <div className="options-title">
          <div className="options-logo"><img src={clock} alt="" /></div>
          <h6 className="h6_options">ВРЕМЯ ЗАЕЗДА И ВЫЕЗДА</h6>
          <span className="options-text">
            Заезд в купола начинается с 15:00, выезд - до 12:00.
            Ранний заезд или поздний выезд возможен по предварительной договоренности
            с администрацией и при наличии свободных мест.

          </span>
        </div>
        <div className="options-title">
          <div className="options-logo"><img src={kid} alt="" /></div>
          <h6 className="h6_options">ЗАСЕЛЕНИЕ С ДЕТЬМИ</h6>
          <span className="options-text">
            Дети младше 3 лет не занимающие отдельного спального места, размещаются бесплатно.
            Если ребенок занимает спальное место, то считается
            отдельным гостем и за дополнительное место нужна доплата.

          </span>
        </div>
        <div className="options-title">
          <div className="options-logo"><img src={dogbaby} alt="" /></div>
          <h6 className="h6_options">ДОМАШНИЕ ЖИВОТНЫЕ</h6>
          <span className="options-text">
            Мы всегда рады вашим домашним питомцам. Размещаем с животными без доплат,
            а для аллергиков есть 2 купола "строго без животных", чтобы вам было комфортно.

          </span>
        </div>
      </div>
      <div className="container-options2">
        <div className="options-title">
          <div className="options-logo"><img src={family} alt="" /></div>
          <h6 className="h6_options">КОЛИЧЕСТВО ГОСТЕЙ</h6>
          <span className="options-text">
            Стоимость за разное количество гостей отличается.
            Пожалуйста, обращайте внимание на количество человек в модуле бронирования.

          </span>
        </div>
        <div className="options-title">
          <div className="options-logo"><img src={sale} alt="" /></div>
          <h6 className="h6_options">СКИДКИ ОТ 2 НОЧЕЙ</h6>
          <span className="options-text">
            Скидка 20% действует за бронирование от 2 ночей и
            она закреплена в модуле бронирования. Никаких
            дополнительных промокодов вводить не нужно.

          </span>
        </div>
        <div className="options-title">
          <div className="options-logo"><img src={money} alt="" /></div>
          <h6 className="h6_options">ПРЕДОПЛАТЫ И ОТМЕНЫ</h6>
          <span className="options-text">
            Бронирование только по 100% предоплате.
            При отмене средства не возвращаются.
            Перенос на другие даты обсуждается в индивидуальном порядке
            и возможен только по уважительной причине.

          </span>
        </div>
      </div>
    </>
  );
}

export default Contacts;
