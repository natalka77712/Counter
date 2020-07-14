import React, {useState, useEffect} from 'react';
import styles from './App.module.css'
import Counter from "./Counter";
import Button from "./Button";
import Input from "./Input";
import {connect} from "react-redux";
import {setCount, setMaxValue, setReset, setStartValue, stateType} from "./redux/counter-reducer";
import {RootState} from "./store";

type PropsType = {
    counterPage: stateType
    setReset: (startValue:number) => void
    setMaxValue: (maxValue:number) => void
    setStartValue: (startValue:number) => void
    setCount: () => void
}

function App(props: PropsType) {
    let [message, setMessage] = useState<string>('');

    const setMinMax = () => {
        props.setMaxValue(props.counterPage.maxValue)
        props.setReset(props.counterPage.startValue)
        setMessage('')
    };

    const propSet = (
        props.counterPage.startValue < 0          ||
        props.counterPage.maxValue < 0            ||
        props.counterPage.startValue >= props.counterPage.maxValue
            ? {
                className: styles.disabled,
                disabled: true
            }
            : {
                className: styles.button,
                disabled: false
            }
    )

    const propInc = (
        props.counterPage.count === props.counterPage.maxValue      ||
        props.counterPage.startValue < 0          ||
        props.counterPage.maxValue < 0            ||
        props.counterPage.startValue >= props.counterPage.maxValue
            ? {
                className: styles.disabled,
                disabled: true
            }
            : {
                className: styles.button,
                disabled: false
            }
    )

    const propReset = (
        props.counterPage.count === 0             ||
        props.counterPage.count === props.counterPage.startValue  ||
        props.counterPage.startValue < 0          ||
        props.counterPage.maxValue < 0            ||
        props.counterPage.startValue >= props.counterPage.maxValue
            ? {
                className: styles.disabled,
                disabled: true
            }
            : {
                className: styles.button,
                disabled: false
            }
    )

    useEffect(() => {
        if (props.counterPage.startValue === props.counterPage.maxValue ||
            props.counterPage.startValue < 0 || props.counterPage.maxValue < 0
            ||props.counterPage.startValue > props.counterPage.maxValue) {
            setMessage('Incorrect value')
        } else {
            setMessage('Enter values and press Set')
        }
    }, [props.counterPage.startValue, props.counterPage.maxValue])

    return (
        <div className={styles.appWrapper}>
            <div className={styles.counter}>
                <div className={styles.counterWrapper}>
                    <Input setMaxValue={props.setMaxValue}
                           setMinValue={props.setStartValue}
                           maxValue={props.counterPage.maxValue}
                           startValue={props.counterPage.startValue}
                    />
                </div>
                <div className={styles.buttons}>
                    <Button onClick={setMinMax} {...propSet}
                            title='set'/>
                </div>
            </div>
            <div className={styles.counter}>
                <Counter count={props.counterPage.count} maxValue={props.counterPage.maxValue} startValue={props.counterPage.startValue} message={message}/>
                <div className={styles.buttons}>
                    <Button {...propInc} onClick={props.setCount}
                            title='inc'/>
                    <Button
                        {...propReset} onClick={()=>props.setReset(props.counterPage.startValue)}
                        title='reset'
                    />
                </div>
            </div>

        </div>
    );
}
let mapStateToProps = (state: RootState) => {
    return {
        counterPage:state.counterPage
    }
}

export default connect(mapStateToProps,
    {setMaxValue, setStartValue, setReset, setCount})(App)