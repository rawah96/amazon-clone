export const initialState = {
    dataLayer: [],
}

// anything inside the data layer is a state,
// and we manipulate the data layer with actions
const reducer = (state, action) => {
    console.log(action)
    // switch on an action type
    switch(action.type) {
        case 'ADD_TO_DATALAYER':
            // when we add to the data layer, put logic
            // return what the new data layer will look like
            return {
                ...state,
                dataLayer: [...state.dataLayer, action.item]
            }
            break;
        case 'REMOVE_FROM_DATALAYER':
            // logic from removing from data layer
            break;
        // default state -- if none of the above, leave it to the state that was in
        default:
            return state;
    }
}

export default reducer;