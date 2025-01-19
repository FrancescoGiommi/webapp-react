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

  /* Funzione per aggiornare la lista delle recensioni */
  const updateReviews = (reviews) => {
    setMovie({
      ...movie,
      reviews: reviews,
    });
  };
  return (
    <>
      {movie && (
        <div className="container pt-5">
          <div className="d-flex justify-content-between">
            {/* Titolo del film */}
            <h1>{movie.title}</h1>
            <div>
              {/* Link per tornare alla lista dei film */}
              <Link className="btn btn-primary mt-2" to={"/movies"}>
                Torna alla lista
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="row">
              <div className="col-3">
                {/* Immagine del film */}
                <img
                  src={movie.image}
                  className="img-fluid"
                  alt={movie.title}
                />
              </div>
              <div className="col-9">
                {/* Regista */}
                <div className="mb-1">Regista</div>
                <h5 class="mb-3 text-body-secondary">{movie.director}</h5>
                {/* Genere */}
                <div className="mb-1">Genere</div>
                <p className="card-text mb-3"> {movie.genre}</p>
                {/* Anno di uscita */}
                <div className="mb-1">Anno di uscita</div>
                <p className="card-text mb-3">{movie.release_year}</p>
                {/* Trama */}
                <div className="mb-1">Trama</div>
                <p className="card-text">{movie.abstract}</p>
              </div>
            </div>
          </div>
          <hr />
          <h2 className="mb-3">Scrivi una Recensione</h2>
          <ReviewsForm updateReviews={updateReviews} movieId={movieId} />
          <div className="my-5">
            <ReviewsList reviews={movie.reviews}></ReviewsList>
          </div>
        </div>
      )}
    </>
  );
}
