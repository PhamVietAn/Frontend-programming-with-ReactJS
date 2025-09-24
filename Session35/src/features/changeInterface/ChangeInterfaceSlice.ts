import { createSlice } from "@reduxjs/toolkit";

type ViewMode = "list" | "grid";

interface ChangeInterfaceState {
    viewMode: ViewMode;
}

const initialState: ChangeInterfaceState = {
    viewMode: "list"
};

const ChangeInterfaceSlice = createSlice({
    name: "viewMode",
    initialState,
    reducers: {
        toggleView(state) {
            state.viewMode = state.viewMode === "list" ? "grid" : "list";
        }
    }
})

export const { toggleView } = ChangeInterfaceSlice.actions;

export default ChangeInterfaceSlice.reducer;