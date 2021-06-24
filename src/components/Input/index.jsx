import React from 'react'
import './style.scss'
import classNames from 'classnames';

export default function Input(props) {
    const { size, suffix, ...inputProps } = props;
    const className = classNames(
        "cpn-input",
        size && `cpn-input--${size}`,
    )
    return (
        <div className="search">
            <input
                className={className}
                {...inputProps}
            />
            <div className="search__suffix">
                {suffix}
            </div>
        </div>
    )
}
