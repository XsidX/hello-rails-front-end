import { createSlice }  from  '@reduxjs/toolkit' ;
import getGreeting from './actions';

const initialState = {
    greeting: null,
}

const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGreeting.fulfilled, (state, action) => {
            state.greeting = action.payload.text;
        });
    }
});

export default greetingSlice.reducer;
