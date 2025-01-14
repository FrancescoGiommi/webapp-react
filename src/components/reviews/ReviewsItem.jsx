export default function ReviewsItem({ review }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const star = (
        <i
          className={`fa-${i < rating ? "solid" : "regular"}
      fa-star`}
        ></i>
      );
      stars.push(star);
    }
    return stars;
  };

  return (
    <>
      <div className="card row row-col-3 d-flex gap-3">
        <div className="card-body col">
          <h5 className="card-title">{review.name}</h5>
          <div>{renderStars(review.vote).map((star) => star)}</div>
          <p className="card-text">{review.text}</p>
        </div>
      </div>
    </>
  );
}
