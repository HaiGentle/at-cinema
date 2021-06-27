import React from 'react'
import "./styles.scss"
import MovieImg from '../../components/movieImg/index'
import MovieName from '../../components/movieName/index'
import MovieItem from '../../components/movieItem'
import wandavission from '../../assets/image/wandavission.jpg'


const data = [
    {id: "01", alt: "wandavission", name: "WandaVission", img: wandavission, years: 2021 },
    {id: "02", alt: "ironman", name: "Iron Man",  img: wandavission, years: 2021 },
    {id: "03", alt: "oneday", name: "One Day",  img: wandavission, years: 2021 },
    {id: "04", alt: "cruella", name: "Cruella",  img: wandavission, years: 2021 },
    {id: "05", alt: "mortalkombat", name: "Mortal Kombat",  img: wandavission, years: 2021 },
    {id: "06", alt: "wandavission", name: "WandaVission", img: wandavission, years: 2021 },
    {id: "07", alt: "ironman", name: "Iron Man",  img: wandavission, years: 2021 },
    {id: "08", alt: "oneday", name: "One Day",  img: wandavission, years: 2021 },
    {id: "09", alt: "cruella", name: "Cruella",  img: wandavission, years: 2021 },
    // {id: "10", alt: "mortalkombat", name: "Mortal Kombat",  img: wandavission, years: 2021 },
]
export default function Content() {
    return(
        <div className="ctn-content">
            <div className="ctn-content-movie">
                <h1>Trending Movies</h1>
                <div className="ctn-content-movie-item">
                    {data.map(item => (
                        <MovieItem
                            id={item.id}
                            img={item.img}
                            alt={item.alt}
                            name={item.name}
                            years={item.years}
                        />
                    ))}
                </div>
            </div>
            <div className="ctn-content-tvs">
                <h1>Trending Tvs</h1>
            </div>
        </div>
    )
}