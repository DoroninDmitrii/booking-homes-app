import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import avatar from '../../img/avatar.svg';
import './ReviewCard.css';
import { reactRouter } from '../../utils/utils';

function ReviewCard({ review }) {
  const dispatch = useDispatch();
  const descriptionRef = useRef();
  const navigate = useNavigate();

  const handlerUpdate = (e) => {
    e.preventDefault();
    dispatch({ type: 'FETCH_PUT_REVIEW', payload: { id: `${review.id}`, info: descriptionRef.current.value } });
    navigate(reactRouter.admin.confirmReviews);
  };

  return (
    <>
      {review.status === false && localStorage.getItem('token')
        ? (
          <div className="reviewcard-container">
            <form onSubmit={handlerUpdate}>
              <div className="reviewcard-name">
                <div className="reviewcard-photo">
                  <img src={avatar} alt="" />
                </div>
                {review.nameUser}
              </div>
              <div className="reviewcard-description">
                <textarea wrap="soft" defaultValue={review.description} ref={descriptionRef} />
              </div>
              <div className="reviewcard-rating">
                Оценка:
                {review.rating}
              </div>

              <button className="waves-effect waves-light btn">Сделать видимым</button>
            </form>
          </div>
        )
        : (
          <div className="reviewcard-container">
            <div className="reviewcard-name">
              <div className="reviewcard-photo">
                <img src={avatar} alt="" />
              </div>
              {review.nameUser}
            </div>
            <div className="reviewcard-description">
              “
              {review.description}
              ”
            </div>
            <div className="reviewcard-rating">
              Оценка:
              {review.rating}
            </div>
          </div>
        )}
    </>
  );
}

export default ReviewCard;
