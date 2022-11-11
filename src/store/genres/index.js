import {createSlice} from '@reduxjs/toolkit'
import {Statuses} from '../../constants/statuses'

export const initialState = {
    entities: {},
    ids: [],
    status: Statuses.idle,
};

export const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {
        startLoading: (state, action) => {
            state.status = Statuses.inProgeres;
            state.entities = {};
            state.ids = [];
        },
        successLoading: (state, action) => {
            state.status = Statuses.success;
            state.entities = action.payload.entities;
            state.ids = action.payload.ids;
        },
        failLoading: (state, action) => {
            state.status = Statuses.failed;
            state.entities = {};
            state.ids = [];
        },
    }
});