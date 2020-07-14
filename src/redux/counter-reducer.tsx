let SET_MAX_VALUE = 'SET_MAX_VALUE';
let SET_START_VALUE = 'SET_MIN_VALUE';
let SET_RESET = 'SET_RESET';
let SET_COUNT = 'SET_COUNT';

export type actionType = {
    type: string
    [key: string]: any
}

export type stateType = {
    maxValue: number
    startValue: number
    count: number
}

let initialState: stateType = {
    maxValue: 0,
    startValue: 0,
    count: 0
}

const counterReducer = (state: stateType = initialState, action: actionType) => {

    switch (action.type) {
        case SET_MAX_VALUE:
            return {...state, maxValue: action.maxValue}
        case SET_START_VALUE:
            return {...state, startValue: action.startValue}
        case SET_COUNT:
            return {...state, count: state.count + 1}
        case SET_RESET:
            return {...state, count: action.startValue}
    }
    return state
}

export const setMaxValue = (maxValue: number) => ({type: SET_MAX_VALUE, maxValue: maxValue})
export const setStartValue = (startValue: number) => ({type: SET_START_VALUE, startValue: startValue})
export const setCount = () => ({type: SET_COUNT})
export const setReset = (startValue: number) => ({type: SET_RESET, startValue: startValue})

export default counterReducer;