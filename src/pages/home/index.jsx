import './styles.scss'
import Slides from '../../containers/slides'
import ListMovieSection from '../../containers/listMovieSection'
import dataHome from '../../assets/data/api_at_cinema.json'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const [state, setState] = useState({
        dataHome: dataHome,
        dataSlides: {}
    });

    useEffect(() => {
        axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=love&api-key=4Y9yhHvP3FCNqDuOysLMKLq7RESYAlge")
            .then((response) => {
                const { data } = response;
                setState((prevState) => (
                    {...prevState, dataSlides: data}
                ));
            })
            .catch((error) => {
                console.log({ error });
            })
    }, [])

    return (
        <div className="page-home">
            <Slides data={state.dataSlides} />
            <ListMovieSection data={state.dataHome} heading="Results"/>
            <ListMovieSection data={state.dataHome} heading="Trending TV"/>
        </div>
    )
}
