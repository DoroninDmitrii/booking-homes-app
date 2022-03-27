import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './MapsApi.css';

export function MapsApi() {
  const mapData = {
    center: [60.397129, 29.515466],
    zoom: 12,
  };

  const coordinates = [[60.397129, 29.515466]];

  const getPointOptions = () => ({
    preset: 'islands#darkGreenCircleDotIcon',
  });

  const getPointData = (index) => ({
    balloonContentBody: `placemark <strong>balloon ${index}</strong>`,
    clusterCaption: `placemark <strong>${index}</strong>`,
    iconCaption: 'ЭКОПАРК',
  });

  return (
    <div className="map-container" id="Contacts">
      <YMaps>
        <Map width="210%" height="100vh" defaultState={mapData}>
          {coordinates.map((coordinate, idx) => (
            <Placemark
              geometry={coordinate}
              key={idx}
              properties={getPointData(idx)}
              options={getPointOptions()}
            />
          ))}
        </Map>
      </YMaps>
      <div className="map-options-container">
        <h3>КАК ДОЕХАТЬ ДО ЭКОПАРК:</h3>
        <h5>На машине:</h5>
        <span>
          По Приморскому шоссе 120 км мимо указателя на посёлок Лужки. Не
          сворачивайте в посёлок. От указателя Вам нужно проехать дальше по
          шоссе 3,5 км до указателя "Экопарк". У указателя поворот налево, по
          грунтовой дороге 1,5 км до кемпинга.
        </span>

        <h5>На автобусе:</h5>
        <span>
          Автобус 830 от станции метро Парнас по направлению Приморск, попросить
          водителя остановиться у знака "памятник М. Агрикола" (360 руб). Далее
          налево пешком по грунтовой дороге 1,5 км.
        </span>

        <h5>8-921-873-0606</h5>
        <span>info@ecopark.ru</span>
        <br />
        <span>Мыс Кюрениеми, Приморское шоссе, Ленинградская обл.</span>
      </div>
    </div>
  );
}
