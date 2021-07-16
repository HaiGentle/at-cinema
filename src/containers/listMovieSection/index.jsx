import React from 'react'
import "./styles.scss"
import MovieItem from '../../components/movieItem'
import Heading from '../../components/heading/index'
import AOS from 'aos';


AOS.init({
    once: true
});

export default function ListMovieSection(props) {
    const { data, heading } = props;
    return (
        <div className="ctn-content">
            <div className="ctn-content-movie">
                <div className="ctn-content-movie__title">
                    <Heading
                        heading={heading}
                    />
                </div>
                <div
                    className="ctn-content-movie__item"
                    data-aos="fade-right"
                >
                    {data.results.map(results => (
                        <MovieItem
                            key={results.link.url}
                            img={results.multimedia.src}
                            alt={results.display_title}
                            name={results.display_title}
                            years={results.publication_date}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}