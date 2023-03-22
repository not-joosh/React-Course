import { configureStore, createSlice } from '@reduxjs/toolkit';
const initialState = {value : {userName: ""}};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Functions you will create
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialState.value;
        }
    }
});

export const {login, logout} = userSlice.actions; 
export const store = configureStore({
    // reducer: // takes in an action and a previous state. Returns a new state.
    reducer: {
        user: userSlice.reducer,
    }
});