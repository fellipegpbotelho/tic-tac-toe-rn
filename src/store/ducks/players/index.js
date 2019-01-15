import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getAllPlayers: null,
  getAllPlayersSuccess: ['players'],
});

const INITIAL_STATE = {
  loadingPlayers: false,
  players: [],
};

const getAllPlayers = (state = INITIAL_STATE) => ({
  ...state,
  loadingPlayers: true,
});

const getAllPlayersSuccess = (state = INITIAL_STATE, { players }) => ({
  ...state,
  loadingPlayers: false,
  players,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_ALL_PLAYERS]: getAllPlayers,
  [Types.GET_ALL_PLAYERS_SUCCESS]: getAllPlayersSuccess,
});
