import './styles.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ListMovieSection from '../../containers/listMovieSection'

export default function Search() {
    const [state, setState] = useState();

    useEffect(() => {
        axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=Home&api-key=4Y9yhHvP3FCNqDuOysLMKLq7RESYAlge")
            .then((response) => {
                const { data } = response;
                setState(data);
            })
            .catch((error) => {
                console.log({ error });
            })
    }, [])

    return (
        <div className="page-search">
            <ListMovieSection data={state} heading="Results" />
        </div>
    )
}
