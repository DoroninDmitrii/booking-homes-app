import './ServicesCard.css';

function Services({ services }) {
  return (
    <>
      <div>{services?.description}</div>
      <div>
        {services?.price}
        р.
      </div>
    </>
  );
}

export default Services;
