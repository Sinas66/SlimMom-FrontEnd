import { createSelector } from 'reselect';

const getData = state => state.dailyBlock;
const getDateNow = state => state.datePicker;

export const getProducts = createSelector(
  [getData],
  dailyBlock => dailyBlock.productsByDay
);

export const getDate = createSelector(
  [getDateNow],
  datePicker => datePicker.date
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
