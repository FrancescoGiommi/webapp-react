import { useEffect, useState } from "react";

export default function IndexMovie() {
  const movies = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/movies";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <h1>Movies List</h1>
      </div>
    </>
  );
}
