import { createSlice } from '@reduxjs/toolkit';

const statePanorama = createSlice({
    name: 'statePanorama',
    initialState: {
        isActive: false,
        isLoad: false,
        isPanoramaIFrame: false,
        isPanoramaIFrameLoad: false,
        delayStart: 2500,
        cameraTarget: [0, 100, 0],
        cameraDistance: 0.1,
        cameraPosition: [0, 100, 0],
        cameraRotation: [],
        panoramCurrent: [],
        panoramaContent: '',
        panoramaIFrameCurrent: null
    },
    reducers: {
        setActiveStatus: (state, action) => {
            state.isActive = action.payload;
        },
        setPanoram: (state, action) => {
            state.panoramCurrent = action.payload;
        },
        setIsLoad: (state, action) => {
            state.isLoad = action.payload;
        },
        setCameraPosition: (state, action) => {
            state.cameraPosition = action.payload;
        },
        setPanoramaIFrame: (state, action) => {
            state.panoramaIFrameCurrent = action.payload;
        },
        setPanoramaIFrameStatus: (state, action) => {
            state.isPanoramaIFrame = action.payload;
        },
        setPanoramaIFrameLoad: (state, action) => {
            state.isPanoramaIFrameLoad = action.payload;
        },
        setPanoramaContent: (state, action) => {
            state.panoramaContent = action.payload;
        }
    }
});

export const { setActiveStatus, setPanoram, setIsLoad, setCameraPosition, setPanoramaIFrame, setPanoramaIFrameStatus, setPanoramaIFrameLoad, setPanoramaContent } = statePanorama.actions;

export default statePanorama.reducer;