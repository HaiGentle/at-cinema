import React from "react";
import "./styles.scss";

export default function MovieItem(props) {
  const { img, alt, name, years, ...imgPros } = props;
  return( 
    <div className="cpn-movie-item">
        <img {...imgPros} src={img} alt={alt} />
        <div>{name}</div>
        <p>{years}</p>
    </div>
  );
}
