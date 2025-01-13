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

        {movie && <h2>{movie.title}</h2>}
      </div>
    </>
  );
}
