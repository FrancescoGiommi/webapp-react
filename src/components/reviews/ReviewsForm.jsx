import { useState } from "react";

export default function ReviewsForm({ movieId, updateReviews }) {
  const formReviewData = {
    name: "",
    vote: "",
    text: "",
  };

  const [reviewForm, setReviewForm] = useState(formReviewData);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log(reviewForm);
    if (validateForm(reviewForm)) {
      const reviewUrl = `http://localhost:3000/api/movies/${movieId}/reviews`;
      fetch(reviewUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewForm),
      })
        .then((res) => res.json())
        .then((data) => {
          const listReviewsUrl = `http://localhost:3000/api/movies/${movieId}/reviews`;
          fetch(listReviewsUrl)
            .then((res) => res.json())
            .then((data) => {
              updateReviews(data.reviews);
            });

          setReviewForm(formReviewData);
        });
    }
  };

  const validateForm = ({ name, vote, text }) => {
    if (!name) return false;
    if (isNaN(parseInt(vote)) || vote < 1 || vote > 5) return false;
    if (!text) return false;
    return true;
  };
  const handleFormChange = (e) => {
    setReviewForm({
      ...reviewForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="row d-flex align-items-end" onSubmit={handleReviewSubmit}>
      {/* Nome */}
      <div className="col-3">
        <label htmlFor="name" class="form-label">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          class="form-control"
          value={reviewForm.name}
          onChange={handleFormChange}
        />
      </div>
      {/* Voto */}
      <div className="col-3">
        <label htmlFor="vote" class="form-label">
          Voto
        </label>
        <input
          type="text"
          id="vote"
          name="vote"
          class="form-control"
          value={reviewForm.vote}
          onChange={handleFormChange}
        />
      </div>
      {/* Testo */}
      <div className="col-3">
        <label htmlFor="text" class="form-label">
          Testo
        </label>
        <input
          type="text"
          id="text"
          name="text"
          class="form-control"
          value={reviewForm.text}
          onChange={handleFormChange}
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary">Invia</button>
      </div>
    </form>
  );
}
