import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";


export default function MovieItem(props) {
  const { img, alt, name, years, ...imgProps } = props;

  return (
    <Link to={`/detail/${name}`} style={{ textDecoration: 'none' }}>
      <div className="cpn-movie-item">
        <img className="img" {...imgProps} src={img} alt={alt} />
        <div className="name">{name}</div>
        <p className="years">{years}</p>
      </div>
    </Link>
  );
}
