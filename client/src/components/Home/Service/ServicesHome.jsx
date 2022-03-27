import './ServicesHome.css';
import { v4 as uuidv4 } from 'uuid';

function ServicesHome({ services }) {
  return (
    <>
      <h3 className="services-h3" />
      <div className="review-container" id="Reviews">
        <div className="review-options">
          <div className="background">
            <div className="container">
              <div className="panel pricing-table">

                {services.length && services.map((el) => (
                  <div key={uuidv4()} className="pricing-plan">
                    <img key={uuidv4()} src={el.img} alt="" className="pricing-img" />
                    <h2 key={uuidv4()} className="pricing-header">{el.name}</h2>
                    <ul key={uuidv4()} className="pricing-features">
                      <li key={uuidv4()} className="pricing-features-item">{el.description}</li>
                      <li key={uuidv4()} className="pricing-features-item">
                        {el.price}
                        ₽.
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesHome;
