import { CREATE_NEW_GAME, GET_GAMES, PLAY_GAME, REMOVE_GAME, POST_FIRE } from '../actions/action-types/battleship-actions';

const initState = {
  addedItems: [],
  onGoingGame: []
}

const battleshipReducer = (state = initState,action) => {
  // store the id of games of the API to state addedItems
  if(action.type === GET_GAMES){
    console.log(state.addedItems)
    return{
      ...state,
      addedItems: [...state.addedItems, { id: action.id }]
    }
  }
  // store the id of the new game to state addedItems
  // clean the state onGoingGame and store the new game to state onGoingGame
  if(action.type === CREATE_NEW_GAME){
    state.onGoingGame = []
    return{
      ...state,
      addedItems: [...state.addedItems, { id: action.obj.id }],
      onGoingGame: [...state.onGoingGame, action.obj ]
    }
  }
  // clean the state onGoingGame and store the clicked game to state onGoingGame
  if(action.type === PLAY_GAME) {
    state.onGoingGame = [] 
    return {
      ...state,
      onGoingGame: [...state.onGoingGame, action.obj ]
    }    
  }
  // clean the state onGoingGame and store the update it board to state onGoingGame
  if(action.type === POST_FIRE) {
    state.onGoingGame = [] 
    return {
      ...state,
      onGoingGame: [...state.onGoingGame, action.obj ]
    }    
  }
  // Delete the game from the state
  if(action.type === REMOVE_GAME){
    let y = state.addedItems.filter(item => item.id !== action.id) 
    let x = state.onGoingGame.filter(game => game.id !== action.id)
      console.log(y)
      console.log(x)

      return{
        ...state,
        addedItems: y,
        onGoingGame: x
      }
  }

  return state
    
}

export default battleshipReducer