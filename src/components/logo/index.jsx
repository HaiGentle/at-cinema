import React from 'react'
import './style.scss'

export default function Logo(props) {
    const { logo, ...extendProps } = props;

    return (
        <div
            className="cpn-logo"
            style={{
                backgroundImage: `url(${logo})`
            }}
            {...extendProps}
        />
    )
}
