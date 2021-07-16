import React from 'react';
import './styles.scss';
import MovieItem from '../../components/movieItem';
import Heading from '../../components/heading';
import Rate from '../../components/rate';
import Button from '../../components/button';
import MovieContent from '../../components/movieContent';

 const data = {
    "status": "OK",
    "copyright": "Copyright (c) 2021 The New York Times Company. All Rights Reserved.",
    "has_more": true,
    "num_results": 20,
    "results": [
        {
            "display_title": "DOMINO: Battle of the Bones",
            "mpaa_rating": "R",
            "critics_pick": 0,
            "byline": "Teo Bugbee",
            "headline": "‘Domino: Battle of the Bones’ Review: Juicing Up the Game",
            "summary_short": "This comedy tries to turn the humble pastime of dominoes into an action-packed championship sport.",
            "publication_date": "2021-06-10",
            "opening_date": "2021-06-11",
            "date_updated": "2021-06-10 11:02:03",
            "link": {
                "type": "article",
                "url": "https://www.nytimes.com/2021/06/10/movies/domino-battle-of-the-bones-review.html",
                "suggested_link_text": "Read the New York Times Review of DOMINO: Battle of the Bones"
            },
            "multimedia": {
                "type": "mediumThreeByTwo210",
                "src": "https://static01.nyt.com/images/2021/06/11/arts/10domino/10domino-mediumThreeByTwo440.jpg",
                "height": 140,
                "width": 210
            }
        },
    ]
}


export default function Detail() {
    return (
        <div className="detail">
            <img className="detail-cover-img"
                src={data.src}
                alt='coverimage'
            />
            <div className="detail-data">
                <div className='infor'>
                    <div className="avatar">
                        <MovieItem
                            img={data.src}
                            mod="avatar"
                        />
                    </div>
                    <div className="review">
                        <MovieItem
                            name={data.display_title}
                            size="detail"
                        />
                    <div className="name">
                        <Rate
                            rate={data.mpaa_rating}
                        />
                    <div className="name-button">
                        <Button
                            mode="play"
                        >Play Trailer</Button>
                    </div>
                </div>
                </div>
                    <div className="overview">
                        <Heading
                            title={data.headline}
                        />
                        <MovieContent
                            content={data.summary_short}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}