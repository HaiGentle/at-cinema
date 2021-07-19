import './styles.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from "react-router-dom";

import ListMovieSection from '../../containers/listMovieSection'

export default function Search() {
    const [state, setState] = useState();
    const search = new URLSearchParams(useLocation().search);
    const queryName = search.get('name')

    useEffect(() => {
        const path = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${queryName}&api-key=4Y9yhHvP3FCNqDuOysLMKLq7RESYAlge`;
        axios.get(path)
            .then((response) => {
                const { data } = response;
                setState(data);
            })
            .catch((error) => {
                console.log({ error });
            })
    }, [queryName])

    return (
        <div className="page-search">
            <ListMovieSection data={state} heading={"Results: " + queryName} />
        </div>
    )
}
