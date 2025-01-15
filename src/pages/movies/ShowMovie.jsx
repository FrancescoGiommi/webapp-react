import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReviewsList from "../../components/reviews/ReviewsList";
import ReviewsForm from "../../components/reviews/ReviewsForm";
export default function ShowMovie() {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "api/movies/" + movieId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.movie);
      });
  }, []);

  return (
    <>
      {movie && (
        <div className="container pt-5">
          <div className="d-flex justify-content-between">
            <h1>{movie.title}</h1>
            <div>
              <Link className="btn btn-primary mt-2" to={"/movies"}>
                Torna alla lista
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="row">
              <div className="col-3">
                <img
                  src={movie.image}
                  className="img-fluid"
                  alt={movie.title}
                />
              </div>
              <div className="col-9">
                <h5 class=" mb-2 text-body-secondary">
                  Regista: {movie.director}
                </h5>
                <p className="card-text">Genere: {movie.genre}</p>
                <p className="card-text">
                  Anno di uscita: {movie.release_year}
                </p>
                <p className="card-text">Trama: {movie.abstract}</p>
              </div>
            </div>
          </div>
          <hr />
          <ReviewsForm movieId={movieId} />
          <div className="my-5">
            <ReviewsList reviews={movie.reviews}></ReviewsList>
          </div>
        </div>
      )}
    </>
  );
}
