import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils';

function AdminLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'LOGOUT_ADMIN' });
    navigate(reactRouter.user.homepage);
  }, [dispatch, navigate]);
  return (
    <div />
  );
}

export default AdminLogout;
