const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case "NUMBER_ADD":
            newState.counter += 1;
            return newState;
        case "NUMBER_SUBSTRACT":
            newState.counter -= 1;
            return newState;
        default:
            return newState;
    }
}

export default reducer;