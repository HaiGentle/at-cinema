import React from "react";
import "./styles.scss";

/**
 TODO: Remove nếu thật sự ko cần thiết
 */
export default function MovieContent(props) {
  const { content } = props;
  return <div className="cpn-content">{content}</div>;
}
