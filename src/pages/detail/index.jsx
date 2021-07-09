import React from 'react';
import './styles.scss';
import Header from '../../containers/header';
import ContainerDetail from '../../containers/detail';
import Footer from '../../containers/footer'
import wandavission from '../../assets/image/wandavission.jpg'

const data = [
    {id: "01", img: wandavission, name: "WandaVission", rate: "7.0", btn: "Play Trailer", title: "Overview", 
        content: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah"}
]


export default function Detail() {
    return(
        <div className="pages-detail">
            <Header />
            <img  className="pages-detail-cover-img"
                src={wandavission}
                alt='coverimage'
            />
            <div className="pages-detail-data">
                <ContainerDetail 
                    data={data}
                />
            </div>
            <div className="pages-detail-footer">
                <Footer />
            </div>
        </div>
    )
}
//footer