import React from "react";
import styles from './Counter.module.css';

type PropsType = {
    count: number
    maxValue: number
    message?: string
    startValue: number
}

function Counter(props: PropsType) {

    const message = (
        props.startValue === props.maxValue ||
        props.startValue < 0 ||
        props.maxValue < 0 ||
        props.startValue >= props.maxValue
            ? "Incorrect value"
            : "Enter values and press Set"
    )

    const styleColor = (
        props.count === props.maxValue ||
        props.startValue < 0 ||
        props.maxValue < 0 ||
        props.startValue >= props.maxValue
            ? {
                className: styles.changeСolor,
            }
            : {
                className: styles.block,
            }
    )

    return (
        <div className={styles.counter}>
            <p  {...styleColor}>{props.message ? props.message : props.count}</p>
        </div>
    );
}

export default Counter;