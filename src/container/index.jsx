import React from 'react'
import "./styles.scss"
import MovieContent from '../component/movieContent'
import Rate from '../component/rate'
import MovieImg from '../component/movieImg'
import MovieName from '../component/movieName'

export default function Container() {
    return(
        <div className="container">
            <MovieContent 
                content="hello"
            />
            <Rate 
                rate="7.5"
            />
            <MovieImg />
            <MovieName 
                name="Harry Potter"
            />
        </div>
    )
}