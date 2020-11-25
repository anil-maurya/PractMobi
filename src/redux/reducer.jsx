const initialState = {
    count : 0
}


const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case 'ADD_ONE':
            newState.count += 1;
            break;
        case 'SUB_ONE':
            newState.count -= 1;
            break;
    }
    return newState
}

export default reducer;