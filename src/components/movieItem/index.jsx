import React from "react";
import "./styles.scss";
import className from "classnames";

/**
 TODO: Di chuyển MovieImg và MovieName vào inline trong component này
 TODO: em đã thêm bộ data trên api vào pages/search, a copy
 bộ data đó về, rồi làm theo cấu trúc data đó
 */

export default function MovieItem(props) {
  const { img, alt, name, years, size, mod, ...imgProps } = props;
  const classes = className(
    "name", 
    size && `name--${size}`,
  );

  const classImg = className(
    "img", 
    mod && `img--${mod}`,
  );
  return (
    <div className="cpn-movie-item">
      <img className={classImg} {...imgProps} src={img} alt={alt}/>
      <div className={classes}>{name}</div>
      <p className="years">{years}</p>
    </div>
  );
}
