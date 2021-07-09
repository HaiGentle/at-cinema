import React from 'react';
import './styles.scss';
import MovieImg from '../../components/movieImg';
import Title from '../../components/title';
import MovieName from '../../components/movieName';
import Rate from '../../components/rate';
import Button from '../../components/button';
import MovieContent from '../../components/movieContent';

export default function ContainerDetail(props) {
    const { data } = props;
    return(
        <div className='ctn-detail'>
                    <div className="ctn-detail-avatar">
                        <MovieImg 
                            img={data[0].img}
                            size="avatar"
                        />
                    </div>
                    <div className="ctn-detail-review">
                        <MovieName 
                            name={data[0].name}
                            size="detail"
                        />
                        <div className="ctn-detail-review-name">
                            <Rate 
                                rate={data[0].rate}
                            />
                            <div className="ctn-detail-review-name-button">
                                <Button 
                                    mode="play"
                                >{data[0].btn}</Button>
                            </div>
                        </div>
                    </div>
                    <div className="ctn-detail-overview">
                        <Title
                            title={data[0].title}
                        />
                        <MovieContent 
                            content={data[0].content}
                        />
                    </div>
        </div>
    )
}