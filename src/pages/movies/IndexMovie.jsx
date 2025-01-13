import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IndexMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "api/movies";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
      });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <h1>Movies List</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={"/movies/" + movie.id}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
