import React, { Component } from 'react';
import GameBoard from './GameBoard.js';
import battleship from '../utilities/battleshipBoard.js';
import { connect } from 'react-redux';
import { postFire } from '../store/actions/battleshipActions';
import requests from '../utilities/requests.js';
import Axios from 'axios';


class Game extends Component {
  constructor(props) {
    super(props);
    this.fire = this.fire.bind(this);
    let newBattle = this.props.battle
    if (this.props.battle[0].gameStatus === "ONGOING"){
      this.state = {
        whoseTurn: 0,
        Won: false,
        playerBoards: [battleship.boardWithShips(newBattle)]
      }
    } else {
      this.state = {
        whoseTurn: 0,
        Won: true,
        playerBoards: [battleship.boardWithShips(newBattle)]
      }
    }
  }
  // Post fire to api and get the response in order to know where the computer fire
  fire(row, col) {    
    if (this.props.battle[0].gameStatus === "ONGOING"){
      let coordinate = [row,col]
      Axios.post(`${requests.urlHeader().url}/${this.props.battle[0].id}/fire`,{coordinate}, {
        headers: requests.urlHeader().headers 
        }).then(responseJson => {
            let fireObj = {id: this.props.battle[0].id, battlefield: responseJson.data.battle.battlefield, enemyShips: responseJson.data.battle.enemyShips, gameStatus: responseJson.data.battle.gameStatus, playerShips: responseJson.data.battle.playerShips, fireEvent: responseJson.data.fireEvent.description, retalliationEvent: responseJson.data.fireEvent.description}   
            this.props.postFire(fireObj); 
            let newBoards = this.props.battle[0].battlefield
            let newState = {
              playerBoards: newBoards
            }        
            this.setState(newState);
          }) 
    } else {
        let newBoards = this.props.battle[0].battlefield
        let newState = {
          playerBoards: newBoards,
          Won: true
        }
        this.setState(newState)
      }       

  }
  render() {
    const {Won, whoseTurn} = this.state;
    return (
    <div>
      <GameBoard board={this.props.battle[0].battlefield}
                 canFire={!this.state.hasFired}
                 onFire={this.fire.bind(this)}
                 visible={whoseTurn === 0}/>

      { Won ? <h1>{this.props.battle[0].gameStatus}</h1> : ''} 
    </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
      battle: state.onGoingGame
    }
}

const mapDispatchToProps= (dispatch)=>{
  return{
    postFire: (id)=>{dispatch(postFire(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game)