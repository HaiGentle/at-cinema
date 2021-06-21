import React from "react";
import "./styles.scss";
import className from "classnames";

export default function MovieName(props) {
  const { name, size } = props;
  const classes = className("cpn-movie-name", size && "cpn-movie-name--${size}");
  return <div className={classes}>{name}</div>;
}
