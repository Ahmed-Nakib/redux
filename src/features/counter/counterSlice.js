import { createSlice } from "@reduxjs/toolkit"


 const counterSlice = createSlice({
    name: "counter",
    initialState: {count: 0},
    reducers: {
        increment: state => {
            state.count = state.count + 1
        },
        decrement: state => {
            if(state.count > 0)
            {state.count = state.count - 1}
        },
        reset: state => {
            state.count = 0 ;
        },
        increaseByAmount: (state, actions) => {
            state.count = state.count + actions.payload ;
        },
    }
 })


 export default counterSlice.reducer;

 export const { increment, decrement, reset, increaseByAmount} = counterSlice.actions;