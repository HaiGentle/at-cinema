import React from 'react';
import './styles.scss';
import Header from '../../containers/header';
import ContainerDetail from '../../containers/detail';
import wandavission from '../../assets/image/wandavission.jpg'

export default function Detail() {
    return(
        <div className="pages-detail">
            <Header />
            <img  className="page-detail-cover-img"
                src={wandavission}
                alt='coverimage'
            />
            <ContainerDetail />
        </div>
    )
}