import React from "react";
import "./styles.scss";
import className from "classnames";

export default function MovieName(props) {
  const { name, mod } = props;
  const classes = className("cpn-movie-name", mod && "cpn-movie-name--${mod}");
  return <div className={classes}>{name}</div>;
}
