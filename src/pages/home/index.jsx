import React from 'react'
import './styles.scss'
import Header from '../../containers/header'
import Slides from '../../containers/slides'
import Content from '../../containers/content'
import Footer from '../../containers/footer'

const data = [
    { id: "1", title: "Trending Movies" },
    { id: "2", title: "Trending TVs" }
  ];

export default function Home() {
    return (
        <div className="page-home">
            <Header />
            <Slides />
            <div className="page-content">
                {data.map((item) => (
                    <Content 
                        key={item.id} 
                        title={item.title} 
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}
