import React from "react";
import "./styles.scss";

export default function MovieContent(props) {
  const { content } = props;
  return <div className="cpn-content">{content}</div>;
}
