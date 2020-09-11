// set up data layer
import React, {createContext, useContext, useReducer} from 'react'

// track basket
// this is an empty data layer (context)
export const StateContext = createContext();

/* create provider to wrap entire app inside of it 
-- to have access to the data layer above
This is a component

takes three props: 
- reducver
- initialState(how data layer looks at the beggining)
- children
*/
export const StateProvider = ({reducer, initialState, children}) => (
    // here we're using store. value takes a hook useReducer
    // children is referring to the <App />
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>   
);

export const useStateValue = () => useContext(StateContext);