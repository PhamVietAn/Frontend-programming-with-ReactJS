import { createSlice } from "@reduxjs/toolkit"

const initialState: number[] = []

const RandomSlice = createSlice({
    name: "random",
    initialState,
    reducers: {
        random(state, action) {
            state.push(action.payload);
            return state;
        }
    }
})

export const { random } = RandomSlice.actions;

export default RandomSlice.reducer;