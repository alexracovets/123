import { createSlice } from '@reduxjs/toolkit';

const stateLoaderIFrame = createSlice({
    name: 'stateLoaderIFrame',
    initialState: {
        isActive: false
    },
    reducers: {
        setLoaderIFrameStatus: (state, action) => {
            state.isActive = action.payload;
        }
    }
});

export const { setLoaderIFrameStatus } = stateLoaderIFrame.actions;

export default stateLoaderIFrame.reducer;