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
            {data.map(item => (
                <div key={item.id}>
                    <div className="ctn-detail-avatar">
                        <MovieImg 
                            img={item.img}
                            size="avatar"
                        />
                    </div>
                    <div className="ctn-detail-review">
                        <MovieName 
                            name={item.name}
                            size="detail"
                        />
                        <div className="ctn-detail-review-name">
                            <Rate 
                                rate={item.rate}
                            />
                            <div className="ctn-detail-review-name-button">
                                <Button 
                                    mode="play"
                                    btn={item.btn}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ctn-detail-overview">
                        <Title
                            title={item.title}
                        />
                        <MovieContent 
                            content={item.content}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}