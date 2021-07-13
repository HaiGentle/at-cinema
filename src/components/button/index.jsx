import React from 'react'
import './style.scss'
import classNames from 'classnames';

export default function Button(props) {
    const { mode, ...buttonProps } = props;

    const className = classNames(
        "cpn-btn",
        mode && `cpn-btn--${mode}`
    );

    /**
     TODO: nếu cho phép hiển thị children (phần nằm giữa 2 thẻ đóng mở), thì phải render nó ra trong phần return
     */
    return (
        <button
            className={className}
            {...buttonProps}
        />
    )
}
