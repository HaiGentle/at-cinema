import React from 'react';
import './styles.scss';
import MovieItem from '../../components/movieItem';
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
                    <div className="avatar">
                        <MovieItem
                            img={data.results[0].multimedia.src}
                            mod="avatar"
                        />
                    </div>
                    <div className="movie">
                        <div className="name">
                            <MovieItem
                                name={data.results[0].display_title}
                                size="detail"
                            />
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