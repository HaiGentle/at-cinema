import React from 'react'
import './styles.scss'
<<<<<<< HEAD
// import wandavission from '../../assets/image/wandavission.jpg'
import Content from '../../containers/content'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

// const data = {
//     "status": "OK",
//     "copyright": "Copyright (c) 2021 The New York Times Company. All Rights Reserved.",
//     "has_more": true,
//     "num_results": 20,
//     "results": [
//         {
//             "display_title": "DOMINO: Battle of the Bones",
//             "mpaa_rating": "R",
//             "critics_pick": 0,
//             "byline": "Teo Bugbee",
//             "headline": "‘Domino: Battle of the Bones’ Review: Juicing Up the Game",
//             "summary_short": "This comedy tries to turn the humble pastime of dominoes into an action-packed championship sport.",
//             "publication_date": "2021-06-10",
//             "opening_date": "2021-06-11",
//             "date_updated": "2021-06-10 11:02:03",
//             "link": {
//                 "type": "article",
//                 "url": "https://www.nytimes.com/2021/06/10/movies/domino-battle-of-the-bones-review.html",
//                 "suggested_link_text": "Read the New York Times Review of DOMINO: Battle of the Bones"
//             },
//             "multimedia": {
//                 "type": "mediumThreeByTwo210",
//                 "src": "https://static01.nyt.com/images/2021/06/11/arts/10domino/10domino-mediumThreeByTwo440.jpg",
//                 "height": 140,
//                 "width": 210
//             }
//         },
//     ]
// }
=======
import ListMovieSection from '../../containers/listMovieSection'

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
>>>>>>> d7505a5462573234688bb188726608aa637e5cff

export default function Search() {
    const [state, setState] = useState();

    useEffect(() => {
        axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=romantic&api-key=4Y9yhHvP3FCNqDuOysLMKLq7RESYAlge")
            .then((response) => {
                const { data } = response;
                setState(() => data);
            })
            .catch((error) => {
                console.log({ error });
            })

    }, [])

    return (
        <div className="page-search">
            <div className="secsion-content">
<<<<<<< HEAD
                <Content data={state} />
=======
                <ListMovieSection data={data} />
>>>>>>> d7505a5462573234688bb188726608aa637e5cff
            </div>
        </div>
    )
}
