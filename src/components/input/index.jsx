import React from 'react'
import './style.scss'
import classNames from 'classnames';

export default function Input(props) {
    const { size, suffix, ...inputProps } = props;
    const className = classNames(
        "cpn-input",
        size && `cpn-input--${size}`,
    )

    /**
     TODO: Sửa lại cấu trúc, tên của class (cpn-input phải là cấp cao nhất)
     */
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
