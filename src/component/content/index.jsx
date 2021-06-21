import React from "react";
import "./styles.scss";

export default function Content(props) {
  const { content } = props;
  return <div className="cpn-content">{content}</div>;
}
