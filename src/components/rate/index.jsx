import React from "react";
import "./styles.scss";

export default function Rate(props) {
  const { rate } = props;
  return <div className="cpn-rate">{rate}</div>;
}
