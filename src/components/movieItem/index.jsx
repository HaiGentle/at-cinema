import React from "react";
import "./styles.scss";
import MovieImg from "../../components/movieImg/index"
import MovieName from "../../components/movieName/index";


/**
 TODO: Di chuyển MovieImg và MovieName vào inline trong component này
 */
export default function MovieItem(props) {
  const { img, alt, name, years } = props;
  return (
    <div className="cpn-movie-item">
      <MovieImg
        img={img}
        alt={alt}
      />
      <MovieName
        name={name}
      />
      <p className="years">{years}</p>
    </div>
  );
}
