import React from 'react'
import "./styles.scss"
import MovieItem from '../../components/movieItem'
import Title from '../../components/title/index'
import wandavission from '../../assets/image/wandavission.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const data = [
    { id: "01", alt: "wandavission", name: "WandaVission", img: wandavission, years: 2021 },
    { id: "02", alt: "ironman", name: "Iron Man", img: wandavission, years: 2021 },
    { id: "03", alt: "oneday", name: "One Day", img: wandavission, years: 2021 },
    { id: "04", alt: "cruella", name: "Cruella", img: wandavission, years: 2021 },
    { id: "05", alt: "mortalkombat", name: "Mortal Kombat", img: wandavission, years: 2021 },
    { id: "06", alt: "wandavission", name: "WandaVission", img: wandavission, years: 2021 },
    { id: "07", alt: "ironman", name: "Iron Man", img: wandavission, years: 2021 },
    { id: "08", alt: "oneday", name: "One Day", img: wandavission, years: 2021 },
    { id: "09", alt: "cruella", name: "Cruella", img: wandavission, years: 2021 },
    { id: "10", alt: "mortalkombat", name: "Mortal Kombat", img: wandavission, years: 2021 },
]
export default function Content(props) {
    const { title } = props;
    return (
        <div className="ctn-content">
            <div className="ctn-content-movie">
                <Title
                    title="Trendding Movie"
                />
                <div
                    className="ctn-content-movie-item"
                    data-aos="fade-right"
                >
                    {data.map(item => (
                        <MovieItem
                            key={item.id}
                            img={item.img}
                            alt={item.alt}
                            name={item.name}
                            years={item.years}
                        />
                    ))}
                </div>
            </div>
            <div className="ctn-content-movie">
                <Title
                    title="Trendding TV"
                />
                <div className="ctn-content-movie-item">
                    {data.map(item => (
                        <MovieItem
                            key={item.id}
                            img={item.img}
                            alt={item.alt}
                            name={item.name}
                            years={item.years}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}