import React from 'react'
import './styles.scss'
import wandavission from '../../assets/image/wandavission.jpg'
import Header from '../../containers/header'
import Slides from '../../containers/slides'
import Content from '../../containers/content'
import Footer from '../../containers/footer'

const data = [
    {
        title: "Results",
        value:
            [{ id: "01", alt: "wandavission", name: "WandaVission", img: wandavission, years: 2021 },
            { id: "02", alt: "ironman", name: "Iron Man", img: wandavission, years: 2021 },
            { id: "03", alt: "oneday", name: "One Day", img: wandavission, years: 2021 },
            { id: "04", alt: "cruella", name: "Cruella", img: wandavission, years: 2021 },
            { id: "05", alt: "mortalkombat", name: "Mortal Kombat", img: wandavission, years: 2021 },
            { id: "06", alt: "wandavission", name: "WandaVission", img: wandavission, years: 2021 },
            { id: "07", alt: "ironman", name: "Iron Man", img: wandavission, years: 2021 },
            { id: "08", alt: "oneday", name: "One Day", img: wandavission, years: 2021 },
            { id: "09", alt: "cruella", name: "Cruella", img: wandavission, years: 2021 },
            { id: "10", alt: "mortalkombat", name: "Mortal Kombat", img: wandavission, years: 2021 }]
    },
    {
        title: "Trending TV",
        value:
            [{ id: "01", alt: "wandavission", name: "WandaVission", img: wandavission, years: 2021 },
            { id: "02", alt: "ironman", name: "Iron Man", img: wandavission, years: 2021 },
            { id: "03", alt: "oneday", name: "One Day", img: wandavission, years: 2021 },
            { id: "04", alt: "cruella", name: "Cruella", img: wandavission, years: 2021 },
            { id: "05", alt: "mortalkombat", name: "Mortal Kombat", img: wandavission, years: 2021 },
            { id: "06", alt: "wandavission", name: "WandaVission", img: wandavission, years: 2021 },
            { id: "07", alt: "ironman", name: "Iron Man", img: wandavission, years: 2021 },
            { id: "08", alt: "oneday", name: "One Day", img: wandavission, years: 2021 },
            { id: "09", alt: "cruella", name: "Cruella", img: wandavission, years: 2021 },
            { id: "10", alt: "mortalkombat", name: "Mortal Kombat", img: wandavission, years: 2021 }]
    }
]

export default function Home() {
    return (
        <div className="page-home">
            <Header />
            { /**
              TODO: đứng ở page truyền data của slide vào cho container
             */}
            <Slides />
            {/**
             TODO: Xoá container Content, thay vào đó là container ListMovieSection sao cho thoải mãn có sử dựng ntn:
                <ListMovieSection data={[]} title="Results"/>
                <ListMovieSection data={[]} title="Trading TV"/>
             ```
             */}
            <Content data={data} />
            <Footer />
        </div>
    )
}
