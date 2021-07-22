import React from 'react'
import './style.scss'
import classNames from 'classnames';

export default function Heading(props) {
    const { heading, size, uppercase, ...extendProps } = props;

    const classnames = classNames(
        "cpn-heading",
        size && `cpn-heading--${size}`
    )

    return (
        <div className={classnames} {...extendProps}>
            {uppercase? heading.toUpperCase() : heading}
        </div>
    )
}
