import { CREATE_NEW_GAME, GET_GAMES, PLAY_GAME, POST_FIRE, REMOVE_GAME } from './action-types/battleship-actions'

// create game action
export const createNewGame = (obj) => {
  return {
    type: CREATE_NEW_GAME,
    obj
  }
}
// Get games action
export const getGames = (id) => {
  return {
    type: GET_GAMES,
    id
  }
}
// play game action
export const playGame = (obj) => {
  return {
    type: PLAY_GAME,
    obj
  }
}
// post fire action
export const postFire = (obj) => {
  return {
    type: POST_FIRE,
    obj
  }
}
// remove game action
export const removeGame = (id) => {
  return {
    type: REMOVE_GAME,
    id
  }
}