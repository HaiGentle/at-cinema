import React from 'react';
import './styles.scss';
import MovieImg from '../../components/movieImg';
import Title from '../../components/title';
import MovieName from '../../components/movieName';
import Rate from '../../components/rate';
import Button from '../../components/button';
import wandavission from '../../assets/image/wandavission.jpg'

export default function ContainerDetail() {
    return(
        <div className='ctn-detail'>
            <div className="ctn-detail-avatar">
                <MovieImg 
                    img={wandavission}
                    size="avatar"
                />
            </div>
            <div className="ctn-detail-review">
                <MovieName 
                    name="Wanda Vission"
                    size="detail"
                />
                <div className="ctn-detail-review-name">
                    <Rate 
                        rate="7.0"
                    />
                    <div className="ctn-detail-review-name-button">
                        <Button 
                            mode="play"
                        >
                            Play Trailer
                        </Button>
                    </div>
                </div>
            </div>
            <div className="ctn-detail-overview">
                <Title
                    title="Overview"
                />
                <p className="ctn-detail-overview-p">Wonder Woman comes into conflict with the Soviet Union 
                    during the Cold War in the 1980s and finds a formidable 
                    foe by the name of the Cheetah.
                </p>
            </div>
        </div>
    )
}