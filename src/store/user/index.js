import {createSlice} from '@reduxjs/toolkit'
import {Statuses} from '../../constants/statuses'

export const initialState = {
    entities: {},
    ids: [],
    status: Statuses.idle,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startLoading: (state, action) => {
            state.status = Statuses.inProgeres;
        },
        successLoading: (state, action) => {
            state.status = Statuses.success;
            state.entities = {...state.entities, ...action.payload.entities};
            state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
        },
        failLoading: (state, action) => {
            state.status = Statuses.failed;
        },
    }
});