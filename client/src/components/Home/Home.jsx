import ReviewsList from '../ReviewsList/ReviewsList';
import About from './About/About';
import Terms from './Terms/Terms';
import { MapsApi } from '../MapsApi/MapsApi';
import './Home.css';
import ImageMain from '../ImageMain/ImageMain';
import ServicesList from '../ServicesList/ServicesList';
import Galeria from '../Galeria/Galeria';
import MyAccordion from '../MyAccordion/MyAccordion';

function Home() {
  return (
    <div>
      <ImageMain />
      <div className="app-container">
        <About />
        <Galeria />
      </div>
      <div className="app-container">
        <ServicesList />
        <ReviewsList />
        <Terms />
        <MyAccordion />
        <MapsApi />

      </div>
    </div>
  );
}

export default Home;
