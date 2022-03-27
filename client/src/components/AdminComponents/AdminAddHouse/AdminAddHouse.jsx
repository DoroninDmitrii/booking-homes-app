import React, {
  useRef, useState, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reactRouter, router } from '../../../utils/utils';
import { addHouseAdminFetchAC } from '../../../redux/actionCreators/homesAC';
import NotFound from '../../NotFound/NotFound';

function AdminAddHouse() {
  const navigate = useNavigate();

  const [imgPaths, setImgPaths] = useState([]);
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.adminReducer);

  const sendFiles = useCallback(async (e) => {
    const picturesData = [...e.target.files];

    try {
      const url = `${process.env.REACT_APP_URL}${router.admin.addHouseServerIMGPath}`;

      const data = new FormData();
      picturesData.forEach((img) => {
        data.append('homesImg', img);
      });

      const headers = {
        Authorization: `${localStorage.getItem('token')}`,
      };

      const options = {
        method: 'PUT',
        body: data,
        headers,
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((imgPath) => setImgPaths(imgPath));
    } catch (error) {
    }
  }, []);

  const formAddHouse = useRef();

  const createHouse = (e) => {
    e.preventDefault();
    const dataInput = Object.fromEntries(new FormData(formAddHouse.current));
    const data = { ...dataInput, img: imgPaths.pathArr };
    dispatch(addHouseAdminFetchAC(data));
    navigate(reactRouter.admin.allHouses);
  };

  return (
    <>
      {admin?.email
        ? (
          <div className="app-container">
            <div className="go_back">
              <h1 className="arrow_back" onKeyPress={() => navigate(reactRouter.admin.main)}>&#8678;</h1>
              <h1 className="title-text">Добавление домика</h1>
            </div>

            <form ref={formAddHouse} onSubmit={createHouse}>
              <div>
                <label htmlFor="houseName">
                  Название дома:
                  <input type="text" id="houseName" name="name" />
                </label>
              </div>

              <div>
                <label htmlFor="houseDescription">
                  Описание дома:
                  <textarea type="text" id="houseDescription" name="description" />
                </label>
              </div>

              <div>
                <label htmlFor="housePrice">
                  Цена:
                  <input
                    type="text"
                    id="housePrice"
                    name="price"
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                  throw (error);
                </label>
                &#8381;
              </div>

              <div className="images_box">
                <div className="images_box__eachImg">
                  {
                  imgPaths.pathArr?.length
                    ? imgPaths.pathArr.map((img) => (
                      <div style={{ height: '100px', width: '200px', backgroundColor: 'grey' }} key={img}>
                        <img src={`${process.env.REACT_APP_URL}${router.admin.imgHousePath}${img}`} alt="..." style={{ height: '100px', width: '200px' }} />
                      </div>
                    ))
                    : <div />
                }
                  <input type="file" multiple onChange={sendFiles} />
                </div>

              </div>

              <button className="waves-effect waves-light btn">Добавить дом</button>
              <div />
            </form>
          </div>
        ) : <NotFound />}
      
    </>
  );
}

export default AdminAddHouse;
