import React from 'react'
import './styles.scss'
import Slides from '../../containers/slides'
import ListMovieSection from '../../containers/listMovieSection'
import data from '../../assets/data/api_at_cinema.json'

export default function Home() {
    return (
        <div className="page-home">
            { /**
              TODO: đứng ở page truyền data của slide vào cho container
             */}
            <Slides />
            <ListMovieSection data={data} heading="Results"/>
            <ListMovieSection data={data} heading="Trending TV"/>
        </div>
    )
}
