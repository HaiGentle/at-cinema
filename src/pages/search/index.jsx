import './styles.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from "react-router-dom";

import ListMovieSection from '../../containers/listMovieSection'
import Heading from '../../components/heading';

const searchMovieService = (queryName, offset = 0) => {
    const path = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?offset=${offset}&query=${queryName}&api-key=4Y9yhHvP3FCNqDuOysLMKLq7RESYAlge`;

    return axios.get(path).then(res => res.data)
}

export default function Search() {
    const [state, setState] = useState({
        dataSearch: {
            has_more: false,
            results: [],
        },
        loading: false
    });

    /**
     TODO: hint - const { search } = useLocation();
     */
    const search = new URLSearchParams(useLocation().search);
    const queryName = search.get('name');

    useEffect(() => {
        setState(prev => ({
            ...prev,
            loading: true
        }));

        /**
         TODO: use finally 
         */
        searchMovieService(queryName)
            .then((data) => {
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

            const currentOffset = Math.floor((state.dataSearch?.results?.length || 0) / 20)
            /**
                TODO: use finally 
            */
            searchMovieService(queryName, currentOffset)
                .then((data) => {
                    let { has_more, results } = data;
                    let currentDataSearch = { ...state.dataSearch };
                    results = currentDataSearch.results.concat(results);

                    setState(prev => ({
                        dataSearch: { ...prev.dataSearch, has_more, results },
                        loading: false
                    }));
                })
                .catch((error) => {
                    console.log({ error });
                })
        }
    }

    return (
        <div className="page-search">
            {
                /**
                 TODO: Use template string
                 */
            }
            <ListMovieSection data={state.dataSearch} heading={"Results: " + queryName} />
            {
                !state.loading &&
                !state.dataSearch?.results?.length && (
                    <Heading heading="Not found..!" />
                )
            }
            {
                state.loading ? (
                    <div className="wrapper-loading">
                        <Heading size="sm" heading="Loading..." />
                    </div>
                ) : (
                    <div className="wrapper-load-more">
                        {
                            state.dataSearch.has_more &&
                            (
                                <Heading
                                    heading="Load more"
                                    size="sm"
                                    onClick={handleClickLoadMore}
                                />
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
