import React from 'react'
import "./styles.scss"
import MovieItem from '../../components/movieItem'
import Heading from '../../components/heading/index'
import AOS from 'aos';
import wandavission from '../../assets/image/wandavission.png';


AOS.init({
    once: true
});

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

export default function ListMovieSection(props) {
    const { data } = props;
    return (
        <div className="ctn-content">
            {/* {data.map(item => ( */}
                <div className="ctn-content-movie" key={data.title}>
                    <div className="ctn-content-movie__title">
                        <Heading
                            heading="Results"
                        />
                    </div>
                    <div
                        className="ctn-content-movie__item"
                        data-aos="fade-right"
                    >
                        {/* {data.value.map(value => ( */}
                            <MovieItem
                                key={data.id}
                                img={wandavission}
                                alt={data.alt}
                                name="Hello"
                                years="2021"
                            />
                        {/* ))} */}
                    </div>
                </div>
            {/* ))} */}
        </div>
    )
}