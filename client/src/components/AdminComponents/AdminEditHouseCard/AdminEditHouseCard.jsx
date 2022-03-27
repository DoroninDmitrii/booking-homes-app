import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils';
import NotFound from '../../NotFound/NotFound';

export function AdminEditHouseCard() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();
  const { homes } = useSelector((state) => state.homesReducer);
  const { admin } = useSelector((state) => state.adminReducer);
  const curHome = homes.find((home) => home.id === +id);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  const handlerUpdate = (e) => {
    e.preventDefault();
    const updateHouse = {
      id: `${id}`,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
    };
    dispatch({ type: 'FETCH_PUT_HOMES', payload: updateHouse });
    navigate(reactRouter.admin.allHouses);
  };

  return (
    <>
      {admin?.email
        ? (
          <form onSubmit={handlerUpdate} className="app-container">
            <div>
              <input defaultValue={curHome.name} ref={nameRef} />
              <br />
              <textarea defaultValue={curHome.description} ref={descriptionRef} />
              <br />
              <input defaultValue={curHome.price} ref={priceRef} />
              <br />
            </div>
            <button>Обновить</button>
          </form>
        ) : <NotFound />}
      
    </>
  );
}
