import React from "react";
import "./styles.scss";
import className from "classnames";

export default function MovieImg(props) {
  const { img, alt, size, ...imgProps } = props;
  const classes = className(
    "cpn-movie-img", 
    size && `cpn-movie-img--${size}`
  );
  return <img className={classes} {...imgProps} src={img} alt={alt}/>;
}
