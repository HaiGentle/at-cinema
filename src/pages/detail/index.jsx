import React from 'react';
import './styles.scss';
import MovieItem from '../../components/movieItem';
import Heading from '../../components/heading';
import Rate from '../../components/rate';
import Button from '../../components/button';
import MovieContent from '../../components/movieContent';
import wandavission from '../../assets/image/wandavission.jpg'

/**
 TODO: Sửa lại format data, detail thì chỉ gồm info của 1 movie, nên không thể là mảng được.
 */
const data = [
    {
        id: "01",
        img: wandavission,
        name: "WandaVission",
        rate: "7.0",
        btn: "Play Trailer",
        title: "Overview",
        content: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah",
    }
]


export default function Detail() {
    return (
        <div className="detail">
            <img className="detail-cover-img"
                src={wandavission}
                alt='coverimage'
            />
            <div className="detail-data">
                <div className='infor'>
                    <div className="avatar">
                        <MovieItem
                            img={data[0].img}
                            size="avatar"
                        />
                    </div>
                    <div className="review">
                        <MovieItem
                            name={data[0].name}
                            size="detail"
                        />
                    <div className="name">
                        <Rate
                            rate={data[0].rate}
                        />
                    <div className="name-button">
                        <Button
                            mode="play"
                        >{data[0].btn}</Button>
                    </div>
                </div>
                </div>
                    <div className="overview">
                        <Heading
                            title={data[0].title}
                        />
                        <MovieContent
                            content={data[0].content}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}