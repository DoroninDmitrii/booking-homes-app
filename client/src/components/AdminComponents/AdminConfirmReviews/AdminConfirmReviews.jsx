import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reactRouter } from '../../../utils/utils';
import NotFound from '../../NotFound/NotFound';
import ReviewCard from '../../ReviewCard/ReviewCard';
import './AdminConfirmReviews.css';

export function AdminConfirmReviews() {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviewsReducer);
  const { admin } = useSelector((state) => state.adminReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_REVIEWS' });
  }, [dispatch]);

  const navigateBack = () => {
    navigate(reactRouter.admin.main);
  };

  return (
    <div className="app-container">
      {admin?.email
        ? (
          <>
            <div className="go_back">
              <h1 className="arrow_back" onClick={navigateBack} onKeyPress={navigateBack}>&#8678;</h1>
              <h1 className="title-text">Все отзывы</h1>
            </div>
            <div className="confirmreviews">
              {reviews?.length ? reviews.map((review) => {
                if (review.status === false) {
                  return <ReviewCard key={review.id} review={review} />;
                }
              }) : <div>Нет отзывов</div>}
            </div>
          </>
        ) : <NotFound />}

    </div>
  );
}
