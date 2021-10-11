import React, { useEffect, useState } from 'react';
import './styles.scss';
import Heading from '../../components/heading';
import Rate from '../../components/rate';
import Button from '../../components/button';
import MovieContent from '../../components/movieContent';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
    const { movieID } = useParams();

    const [state, setState] = useState({
        /**
            TODO: Khi khởi tạo một biến thì phải định nghĩa đúng kiểu dữ liệu (default) cho nó 
         */
        dataDetail: {},
        loading: true
    });
    useEffect(() => {
        /**
            TODO: Viết một hàm để call API bên ngoài component + sử dụng finally
         */
        axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieID}&api-key=4Y9yhHvP3FCNqDuOysLMKLq7RESYAlge`)
            .then((res) => {
                setState((prevState) => ({
                    ...prevState,
                    dataDetail: res.data,
                    loading: false
                }));
            })
            .catch((error) => {
                console.log(error);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (state.loading) {
        /**
         TODO: Replace when create Loading component 
         */
        return (
            <h1 className="animate" style={{ color: "white" }}>Loading...</h1>
        )
    }

    const { results } = state.dataDetail;

    return (
        <div className="detail">
            <img className="detail-cover-img"
                src={results[0].multimedia.src}
                alt='coverimage'
            />
            <div className="detail-data">
                <div className='infor'>
                    <img className="avatar" src={results[0].multimedia.src} alt="" />
                    <div className="movie">
                        <div className="name">
                            {results[0].display_title}
                        </div>
                        <div className="trailer">
                            <div className="rate">
                                <Rate
                                    rate={results[0].mpaa_rating}
                                />
                            </div>
                            <div className="button">
                                <Link to={{ pathname: results[0].link.url }} target="_blank">
                                    <Button
                                        mode="play"
                                    >
                                        Play Trailer
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overview">
                    <Heading
                        heading={results[0].headline}
                    />
                    <MovieContent
                        content={results[0].summary_short}
                    />
                </div>
            </div>
        </div>
    )
}