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

export const getUser = state => state.session.userData;

export const getGroupBlood = createSelector(
    [getUser],
    (user) => user.groupBlood
);

export const getDailyRate = createSelector(
    [getUser],
    (user) => user.dailyRate
);

