import React from 'react';
import styles from './Button.module.css';

type PropsType = {
    title: string
    className?: string
    disabled?: boolean
    onClick?: () => void
}

function Button(props: PropsType) {

    return (
        <div>
            <button className={props.className} disabled={props.disabled} onClick={props.onClick}>{props.title}</button>
        </div>
    )
}

export default Button;