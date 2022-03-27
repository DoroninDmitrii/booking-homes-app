import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from '../../NotFound/NotFound';
import { AdminEditHouseCard } from '../AdminEditHouseCard/AdminEditHouseCard';

export function AdminEditHouse() {
  const dispatch = useDispatch();
  const { homes } = useSelector((state) => state.homesReducer);
  const { admin } = useSelector((state) => state.adminReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_HOMES' });
  }, [dispatch]);

  return (
    <>
      {admin?.email
        ? (
          <div>
            {homes?.length ? homes.map((home) => (
              <AdminEditHouseCard
                key={home.id}
                homes={home}
              />
            )) : <div>None!</div>}
          </div>
        ) : <NotFound />}
    
    </>
  );
}
