import React from 'react';
import styles from './Input.module.css';

type PropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (valueAsNumber: number) => void
    setMinValue: (valueAsNumber: number) => void
    setMinMax?: () => void
}

function Input(props: PropsType) {

    const ErrorStyleMaxValue = props.maxValue === props.startValue
        || props.maxValue < 0
        || props.maxValue < props.startValue

    const ErrorStyleStartValue = props.startValue === props.maxValue
        || props.startValue < 0
        || props.startValue > props.maxValue

    return (
        <div>
            <div className={styles.inputWrapper}>
                <span className={styles.textArea}>max value:</span>
                <input value ={props.maxValue} onChange={e => {

                    props.setMaxValue(e.currentTarget.valueAsNumber)
                }}className={ErrorStyleMaxValue
                    ? styles.maxInputError : styles.input} type="number"/>
            </div>
            <div className={styles.inputWrapper}>
                <span className={styles.textArea}>start value:</span>
                <input value ={props.startValue} onChange={e => {
                    props.setMinValue(e.currentTarget.valueAsNumber)
                }}className={ErrorStyleStartValue
                    ? styles.startInputError : styles.input} type="number"/>
            </div>
        </div>

    );
}

export default Input;