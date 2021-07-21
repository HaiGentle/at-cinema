import React from "react";
import "./styles.scss";
import className from "classnames";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


export default function MovieItem(props) {
  const { img, alt, name, years, size, mod, refItem, ...imgProps } = props;
  const classes = className(
    "name", 
    size && `name--${size}`,
  );

  const classImg = className(
    "img", 
    mod && `img--${mod}`,
  );

  return (
    <Link to={`/detail/${name}`} style={{textDecoration: 'none'}}>
      <div className="cpn-movie-item"
        ref={refItem}
      >
        <img className={classImg} {...imgProps} src={img} alt={alt}/>
        <div className={classes}>{name}</div>
        <p className="years">{years}</p>
      </div>
    </Link>
  );
}
