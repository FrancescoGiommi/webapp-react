import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/Card";

export default function IndexMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "api/movies/";
    fetch(url)
      .then((res) => {
        if (res.status === 404) {
          const navigate = useNavigate();
          navigate("/NotFound");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data.movies);
        console.log(data.movies);
      });
  }, []);

  return (
    <>
      <div className="container pt-5 ">
        <h1>Movies List</h1>
        <div className="row row-col-5 d-flex gap-3">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <Card
                key={movie.id}
                image={movie.image}
                title={movie.title}
                subtitle={movie.director}
                genre={movie.genre}
                link={{ to: "/movies/" + movie.id, text: "Vedi dettagli" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
