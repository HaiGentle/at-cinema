import './styles.scss'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useLocation } from "react-router-dom";

import ListMovieSection from '../../containers/listMovieSection'
import Heading from '../../components/heading';

export default function Search() {
    const [state, setState] = useState({
        dataSearch: {},
        loading: false
    });
    const search = new URLSearchParams(useLocation().search);
    const queryName = search.get('name')

    const currentOffset = useRef();

    useEffect(() => {
        currentOffset.current = 0;
        setState(prev => ({
            ...prev,
            loading: true
        }));

        const path = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?offset=${currentOffset.current * 20}&query=${queryName}&api-key=4Y9yhHvP3FCNqDuOysLMKLq7RESYAlge`;
        axios.get(path)
            .then((response) => {
                const { data } = response;
                setState({
                    dataSearch: data,
                    loading: false
                });
            })
            .catch((error) => {
                console.log({ error });
            })
    }, [queryName])

    const handleClickLoadMore = () => {
        if (state.dataSearch.has_more) {
            setState(prev => ({
                ...prev,
                loading: true
            }));
            currentOffset.current += 1;
            const path = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?offset=${currentOffset.current * 20}&query=${queryName}&api-key=4Y9yhHvP3FCNqDuOysLMKLq7RESYAlge`;
            axios.get(path)
                .then((response) => {
                    const { data } = response;
                    const { has_more, results } = data;
                    let currentDataSearch = { ...state.dataSearch };
                    currentDataSearch.has_more = has_more;
                    let newDataSearch = currentDataSearch;
                    newDataSearch.results = currentDataSearch.results.concat(results);

                    setState({
                        dataSearch: newDataSearch,
                        loading: false
                    });
                })
                .catch((error) => {
                    console.log({ error });
                })
        }
    }

    return (
        <div className="page-search">
            <ListMovieSection data={state.dataSearch} heading={"Results: " + queryName} />
            {<Heading heading={state.loading ? "Loading..." : !state.dataSearch.results && "Not found..!"} />}
            <div className="wrapper-heading">
                {
                    state.dataSearch.has_more && !state.loading &&
                    <Heading
                        heading="Load more..."
                        size="sm"
                        onClick={handleClickLoadMore}
                    />
                }
            </div>
        </div>
    )
}
