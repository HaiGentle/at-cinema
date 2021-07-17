import React from 'react'
import './styles.scss'
import MovieContent from '../movieContent'

export default function MovieSlide(props) {
    const { result } = props;
    return (
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
    )
}
