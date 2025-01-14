import { Link } from "react-router-dom";

export default function Card({ image, title, subtitle, genre, link }) {
  return (
    <>
      <div className="card h-100">
        {image && <img src={image} className="card-img-top" alt="..." />}
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          {subtitle && (
            <h6 class="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
          )}
          {genre && <p className="card-text">{genre}</p>}
          {link.to && link.text && (
            <Link to={link.to} className="btn btn-primary">
              {link.text}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
