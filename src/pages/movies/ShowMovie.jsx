import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

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
      <div className="container pt-5">
        <h1>Movie Detail</h1>

        {movie.map((movie) => (
          <div key={movie.id} className="card">
            <img src={movie.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2>{movie.title}</h2>
              <p className="card-text">{movie.director}</p>
              <p className="card-text">{movie.genre}</p>
              <p className="card-text">{movie.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
