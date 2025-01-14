import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

export default function ShowMovie() {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "api/movies/" + movieId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.movie);
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
                <img src={movie.image} className="img-fluid" />
              </div>
              <div className="col-9">
                <h5 class=" mb-2 text-body-secondary">{movie.director}</h5>
                <p className="card-text">{movie.genre}</p>
                <p className="card-text">{movie.release_year}</p>
                <p className="card-text">{movie.abstract}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
