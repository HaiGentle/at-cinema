import React from 'react'
import './styles.scss'
import Header from '../../containers/header'
import Slides from '../../containers/slides'
import Content from '../../containers/content'
import Footer from '../../containers/footer'

export default function Home() {
    return (
        <div className="page-home">
            <Header />
            <Slides />
            <Content />
            <Footer />
        </div>
    )
}
