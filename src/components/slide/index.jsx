import React from 'react'
import './styles.scss'
import MovieContent from '../movieContent'
import img from '../../assets/image/wandavission.png'

/**
 TODO: Sửa lại tên cho rõ nghĩa: MovíeSlide
 */
export default function Slide(props) {
    return (
        <div className="cpn-slide">
            <img className="cpn-slide__img" src={img} alt="abc" />
            <div className="cpn-slide__wrapper-text">
                <div className="cpn-slide__name">This is name of the Movie - Film</div>
                <div className="cpn-slide__content">
                    <MovieContent content="This is Content of Movie - Film" />
                </div>
                <div className="cpn-slide__year">
                    2021
                </div>
            </div>
        </div>
    )
}
