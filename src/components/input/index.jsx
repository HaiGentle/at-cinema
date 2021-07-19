import React from 'react'
import './style.scss'
import classNames from 'classnames';

export default function Input(props) {
    const { size, suffix, searchRef, ...inputProps } = props;
    const className = classNames(
        "cpn-input__string",
        size && `cpn-input__string--${size}`,
    )

    return (
        <div className="cpn-input">
            <input
                className={className}
                {...inputProps}
                ref={searchRef}
            />
            <div className="cpn-input__suffix">
                {suffix}
            </div>
        </div>
    )
}
