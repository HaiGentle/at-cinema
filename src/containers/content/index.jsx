import React from 'react'
import "./styles.scss"
import MovieItem from '../../components/movieItem'
import Title from '../../components/title/index'
import AOS from 'aos';

AOS.init();

export default function Content(props) {
    const { data } = props;
    return (
        <div className="ctn-content">
            {data.map(item => (
                <div className="ctn-content-movie" key={item.title}>
                    <div className="ctn-content-movie__title">
                        <Title
                            title={item.title}
                        />
                    </div>
                    {
                        /**
                         TODO: Chỉ cho animation on scroll effect lần đầu.
                         */
                    }
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