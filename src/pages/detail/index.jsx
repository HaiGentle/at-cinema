import React, { useEffect, useState } from 'react';
import './styles.scss';
import Heading from '../../components/heading';
import Rate from '../../components/rate';
import Button from '../../components/button';
import MovieContent from '../../components/movieContent';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
    let {movieID} = useParams();
    console.log(movieID);
    const [state, setState] = useState({
        dataDetail: {},
        loading: true
    });
    useEffect(() =>{
        axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieID}&api-key=4Y9yhHvP3FCNqDuOysLMKLq7RESYAlge`)
        .then((res) => {
            const {data} = res;
            setState((prevState) => (
                {
                ...prevState,
                dataDetail: data,
                loading: false
                }
            ));
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
    if(state.loading) {
        return(
            <h1 className="animate" style={{color:"white"}}>Loading...</h1>
        )
    }
    return (
        <div className="detail">
            {console.log(state.dataDetail)}
            <img className="detail-cover-img"
                src={state.dataDetail.results[0].multimedia.src}
                alt='coverimage'
            />
            <div className="detail-data">
                <div className='infor'>
                    <img className="avatar" src={state.dataDetail.results[0].multimedia.src} alt=""/>
                    <div className="movie">
                        <div className="name">
                            {state.dataDetail.results[0].display_title}
                        </div>
                        <div className="trailer">
                            <div className="rate">
                                <Rate
                                    rate={state.dataDetail.results[0].mpaa_rating}
                                />
                            </div>
                            <div className="button">
                                <Button
                                    link={state.dataDetail.results[0].link.url}
                                    mode="play"
                                >Play Trailer</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overview">
                    <Heading
                        heading={state.dataDetail.results[0].headline}
                    />
                    <MovieContent
                        content={state.dataDetail.results[0].summary_short}
                    />
                </div>
            </div>
        </div>
    )
}