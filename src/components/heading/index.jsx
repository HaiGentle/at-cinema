import React from 'react'
import './style.scss'
import className from 'classnames';

export default function Heading(props) {
    const { title, size, uppercase } = props;
    const classes = className(
        "cpn-heading", 
        size && `cpn-heading--${size}`,
        uppercase && `cpn-heading--${uppercase}`,
      );
    return (
        <div className="">
            {title}
        </div>
    )
}
