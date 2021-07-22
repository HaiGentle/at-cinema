import React from 'react'
import './styles.scss'
import MovieContent from '../movieContent'
import { Link } from "react-router-dom";

export default function MovieSlide(props) {
    const { result } = props;
    return (
        <Link to={`/detail/${result?.display_title}`}>
            <div className="cpn-movie-slide">
                <img
                    className="cpn-movie-slide__img"
                    src={result?.multimedia?.src}
                    alt={result?.display_title}
                />
                <div className="cpn-movie-slide__wrapper-text">
                    <div className="name">{result?.display_title}</div>
                    <div className="content">
                        <MovieContent content={result?.summary_short} />
                    </div>
                    <div className="year">
                        {result?.publication_date}
                    </div>
                </div>
            </div>
        </Link>
    )
}
