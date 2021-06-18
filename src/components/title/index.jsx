import React from 'react'
import './style.scss'

export default function Title(props) {
    const {title} = props;
    return (
        <div className="cpn-title">
            {title}
        </div>
    )
}
