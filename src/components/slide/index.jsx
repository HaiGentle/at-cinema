import React from 'react'
import './styles.scss'
import MovieContent from '../movieContent'
import img from '../../assets/image/wandavission.png'

export default function MovieSlide(props) {
    return (
        <div className="cpn-movie-slide">
            <img className="cpn-movie-slide__img" src={img} alt="abc" />
            <div className="cpn-movie-slide__wrapper-text">
                <div className="name">This is name of the Movie - Film</div>
                <div className="content">
                    <MovieContent content="This is Content of Movie - Film" />
                </div>
                <div className="year">
                    2021
                </div>
            </div>
        </div>
    )
}
