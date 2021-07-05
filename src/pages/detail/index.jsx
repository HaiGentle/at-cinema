import React from 'react';
import './styles.scss';
import Header from '../../containers/header';
import MovieImg from '../../components/movieImg';
import MovieName from '../../components/movieName';
import wandavission from '../../assets/image/wandavission.jpg'

const data = [
    {id: '01', alt: 'wandavission', name: 'wandavission', img: wandavission}
]

export default function Detail() {
    return(
        <div className="pages-detail-container">
            <Header />
            <img  className="pages-cover-img"
                src={wandavission}
                alt='coverimage'
            />
            <div className="pages-avatar">
                <MovieImg 
                    img={wandavission}
                />
            </div>
            <div className="pages-name">
                <MovieName 
                    name="Wanda Vission"
                />
                <div className="pages-rank">
                    
                </div>
            </div> 
        </div>
    )
}