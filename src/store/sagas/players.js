import { AsyncStorage } from 'react-native';
import { put } from 'redux-saga/effects';

import { Creators as PlayerCreators } from '../ducks/players';

export function* getPlayers() {
  const result = yield AsyncStorage.getItem('@JogoDaVelha:players');
  const players = result !== null
    ? JSON.parse(result)
    : [{ id: 15648752452, name: 'DEU RUIM NA BUSCA', points: 1000 }];
  yield put(PlayerCreators.getAllPlayersSuccess(players));
}
