import React from 'react';
import './styles.scss';
import Heading from '../../components/heading';
import Rate from '../../components/rate';
import Button from '../../components/button';
import MovieContent from '../../components/movieContent';
import data from '../../assets/data/api_at_cinema.json'

export default function Detail() {
    return (
        <div className="detail">
            <img className="detail-cover-img"
                src={data.results[0].multimedia.src}
                alt='coverimage'
            />
            <div className="detail-data">
                <div className='infor'>
                    <img className="avatar" src={data.results[0].multimedia.src} alt=""/>
                    <div className="movie">
                        <div className="name">
                            {data.results[0].display_title}
                        </div>
                        <div className="trailer">
                            <div className="rate">
                                <Rate
                                    rate={data.results[0].mpaa_rating}
                                />
                            </div>
                            <div className="button">
                                <Button
                                    mode="play"
                                >Play Trailer</Button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="overview">
                    <Heading
                        heading={data.results[0].headline}
                    />
                    <MovieContent
                        content={data.results[0].summary_short}
                    />
                </div>
            </div>
        </div>
    )
}