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
            // find the id, slice it out, then return the new state/data layer
            let newBasket = [...state.dataLayer];
            // check if item id is equivalent to action id
            const index = state.dataLayer.findIndex((item) => item.id === action.id);
            if(index >= 0) {
                // item exists, remove it
                newBasket.splice(index, 1);
            }

            return {
                ...state, dataLayer:newBasket
            }
            // logic from removing from data layer
            break;
            case 'REMOVE_ALL':
                return {
                    ...state, dataLayer:[]
                }
                break;
            // default state -- if none of the above, leave it to the state that was in
        default:
            return state;
    }
}

export default reducer;