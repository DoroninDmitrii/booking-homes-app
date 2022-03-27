import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils';
import NotFound from '../../NotFound/NotFound';
import AdminHomesCard from '../AdminHomesCard/AdminHomesCard';

function AdminAllHouses() {
  const { homes } = useSelector((state) => state.homesReducer);
  const { admin } = useSelector((state) => state.adminReducer);

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(reactRouter.admin.main);
  };

  return (
    <>
      {admin?.email
        ? (
          <div className="app-container">
            <div className="go_back">
              <h1 className="arrow_back" onClick={navigateBack} onKeyPress={navigateBack}>&#8678;</h1>
              <h1 className="title-text">Список домиков</h1>
            </div>
            {
            homes?.length
              ? homes.map((el) => <AdminHomesCard key={el.name} home={el} />)
              : <div>There are not homes</div>
          }
          </div>
        ) :    <NotFound />}
   

    </>

  );
}

export default AdminAllHouses;
