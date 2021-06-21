import React from "react";
import "./styles.scss";
import className from "classnames";

export default function MovieImg(props) {
  const { img, mod, ...imgProps } = props;
  const classes = className("cpn-movie-img", mod && "cpn-movie-img---${mod}");
  return <img className={classes} src={img} {...imgProps} />;
}
