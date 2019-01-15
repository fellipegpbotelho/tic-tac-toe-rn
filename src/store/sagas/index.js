import { all, takeEvery } from 'redux-saga/effects';

import { Types as PlayerTypes } from '../ducks/players';

import { getPlayers } from './players';

export default function* rootSaga() {
  yield all([takeEvery(PlayerTypes.GET_ALL_PLAYERS, getPlayers)]);
}
