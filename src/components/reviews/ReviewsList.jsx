import ReviewsItem from "./ReviewsItem";

export default function ReviewsList({ reviews }) {
  return (
    <>
      <div className="row gap-3">
        <h2>Recensioni</h2>
        {reviews.map((review) => (
          <ReviewsItem review={review} key={review.id} />
        ))}
      </div>
    </>
  );
}
