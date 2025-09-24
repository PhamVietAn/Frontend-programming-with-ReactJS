import { createSlice } from "@reduxjs/toolkit"

const initialState = "sang"

const DarkLight = createSlice({
    name: "DarkLight",
    initialState,
    reducers: {
        Change(state) {
            return state === "sang" ? "toi" : "sang";
    }
    }
})

export const { Change } = DarkLight.actions;

export default DarkLight.reducer;