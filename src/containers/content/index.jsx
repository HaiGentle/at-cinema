import React from 'react'
import "./styles.scss"
import MovieItem from '../../components/movieItem'
import Heading from '../../components/heading/index'
import AOS from 'aos';

AOS.init({
    once: true
});

export default function Content(props) {
    const { data } = props;
    return (
        <div className="ctn-content">
            {data.map(item => (
                <div className="ctn-content-movie" key={item.title}>
                    <div className="ctn-content-movie__title">
                        <Heading
                            heading={item.title}
                        />
                    </div>
                    <div
                        className="ctn-content-movie__item"
                        data-aos="fade-right"
                    >
                        {item.value.map(value => (
                            <MovieItem
                                key={value.id}
                                img={value.img}
                                alt={value.alt}
                                name={value.name}
                                years={value.years}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}