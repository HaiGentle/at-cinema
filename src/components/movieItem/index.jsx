import React from "react";
import "./styles.scss";
import className from "classnames";

/**
 TODO: Di chuyển MovieImg và MovieName vào inline trong component này
 */
export default function MovieItem(props) {
  const { img, alt, name, years, size, ...imgProps } = props;
  const classes = className(
    "cpn-movie-name", 
    size && `cpn-movie-name--${size}`,
    "cpn-movie-img", 
    size && `cpn-movie-img--${size}`,
  );
  return (
    <div className="cpn-movie-item">
      <img className={classes} {...imgProps} src={img} alt={alt}/>
      <div className={classes}>{name}</div>
      <p className="years">{years}</p>
    </div>
  );
}
