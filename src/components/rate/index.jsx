import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Rate(props) {
  const { rate } = props;
  return (
    <div className="cpn-rate" >
      {
        /**
         TODO: Làm ơn cho cái ngôi sao màu vàng !!!
         */
      }
      <FontAwesomeIcon icon={faStar} className="cpn-rate-icon" />
      {rate}
    </div>
  );
}
