import React from 'react';
import { useSelector } from 'react-redux';
import NotFound from '../../NotFound/NotFound';

function AdminCreateReservation() {
  const { admin } = useSelector((state) => state.adminReducer);
  return (
    <>
      {admin?.email
       ? (
       <div className="app-container">
         <h1>Admin Create Reservation</h1>
       </div>
       ) : <NotFound />}
      
    </>
  );
}

export default AdminCreateReservation;
