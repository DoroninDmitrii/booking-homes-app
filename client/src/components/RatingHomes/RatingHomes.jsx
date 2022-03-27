import ReactStars from 'react-rating-stars-component';

function RatingHomes({ id }) {
  return (
    <ReactStars
      count={5}
      value={id.rating}
      size={24}
      activeColor="#ffd700"
      edit={false}
    />

  );
}

export default RatingHomes;
