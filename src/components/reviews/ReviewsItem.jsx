export default function ReviewsItem({ review }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const star = (
        <i
          class={`fa-${i < rating ? "solid" : "regular"}
      fa-star`}
        ></i>
      );
      stars.push(star);
    }
    return stars;
  };

  return (
    <>
      <div className="col-12 d-flex gap-3 align-items-center">
        <div className="avatar">{review.name[0]}</div>
        <div>{review.name}</div>
        <div>{renderStars(review.vote).map((star) => star)}</div>
        <div>{review.text}</div>
      </div>
    </>
  );
}
