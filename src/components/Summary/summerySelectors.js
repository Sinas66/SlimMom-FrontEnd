import {createSelector} from 'reselect';

const getData = state => state.data;

export const getProducts = createSelector(
    [getData],
    (data) => data.items
);

export const getDate = createSelector(
    [getData],
    (data) => data.date
);

export const getGroupBlood = state => state.session.user.groupBlood;

export const getDailyRate = state => state.session.user.dailyRate;

