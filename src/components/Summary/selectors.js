import { createSelector } from 'reselect';

const getData = state => state.dailyBlock;

export const getProducts = createSelector(
  [getData],
  dailyBlock => dailyBlock.items
);

export const getDate = createSelector(
  [getData],
  dailyBlock => dailyBlock.date
);

export const getUser = state => state.session.userData;

export const getGroupBlood = createSelector(
  [getUser],
  user => user.groupBlood
);

export const getDailyRate = createSelector(
  [getUser],
  user => user.dailyRate
);
