import React from 'react'
import './styles.scss'
import MovieContent from '../movieContent'
import img from '../../assets/image/wandavission.png'

export default function Slide(props) {
    return (
        <div className="cpn-slide">
            <img className="cpn-slide__img" src={img} alt="abc" />
            <div className="cpn-slide__wrapper-text">
                <div className="cpn-slide__name">Spaces Swippers asgdja asgda ahsgdh agdhha agshd hgash</div>
                <div className="cpn-slide__content">
                    <MovieContent content="ajhdajdd" />
                </div>
                <div className="cpn-slide__year">
                    2021
                </div>
            </div>
        </div>
    )
}
