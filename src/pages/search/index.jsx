import React from 'react'
import './styles.scss'
import wandavission from '../../assets/image/wandavission.jpg'
import Header from '../../containers/header'
import Content from '../../containers/content'
import Footer from '../../containers/footer'

/**
 * Sửa lại format data chỉ bao gồm 1 mảng info movie.
 */
const data = [
    {
        title: "Results",
        value:
            [
                { id: "01", alt: "wandavission", name: "WandaVission", img: wandavission, years: 2021 },
                { id: "02", alt: "ironman", name: "Iron Man", img: wandavission, years: 2021 },
                { id: "03", alt: "oneday", name: "One Day", img: wandavission, years: 2021 },
                { id: "04", alt: "cruella", name: "Cruella", img: wandavission, years: 2021 },
                { id: "05", alt: "mortalkombat", name: "Mortal Kombat", img: wandavission, years: 2021 },
                { id: "06", alt: "wandavission", name: "WandaVission", img: wandavission, years: 2021 },
                { id: "07", alt: "ironman", name: "Iron Man", img: wandavission, years: 2021 },
                { id: "08", alt: "oneday", name: "One Day", img: wandavission, years: 2021 },
                { id: "09", alt: "cruella", name: "Cruella", img: wandavission, years: 2021 },
                { id: "10", alt: "mortalkombat", name: "Mortal Kombat", img: wandavission, years: 2021 }
            ]
    },
]

export default function Search() {
    return (
        <div className="page-search">
            <Header />
            <div className="secsion-content">
                {
                    /**
                     * Thay bằng container ListMovieSection
                     */
                }
                <Content data={data} />
            </div>
            <Footer />
        </div>
    )
}
