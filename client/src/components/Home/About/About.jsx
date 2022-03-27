import './About.css';
import girl from '../../../img/girl.jpeg';

function About() {
  return (
    <div className="about-container" id="AboutUs">
      <div className="about-picture"><img src={girl} alt="" /></div>
      <div className="about-options">
        <h3 className="about-container-h1">О нас</h3>
        <div className="about-text">
          <p className="about-p">
            Что такое
            <span className="text-span">eco</span>
            <span className="text-p">PARK</span>
            ?
          </p>
          <span className="text-light">
            Уединённое место для побега из шумных мегаполисов, возможность
            насладиться безмятежностью и прикоснуться к возвышенному. Безусловная,
            первозданная чистота природы и всеобъемлющая тишина. Даже в шторм на
            контрасте с силой природы ваши впечатления будут лишь ярче.
          </span>
        </div>
        <button  className="btn-about_us"><a href="#contacts">Как добраться?</a></button>
      </div>
    </div>
  );
}

export default About;
