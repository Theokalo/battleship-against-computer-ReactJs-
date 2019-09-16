import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewGame } from '../store/actions/battleshipActions';
import Axios from 'axios';
import requests from '../utilities/requests.js';

class CreateBattle extends Component {
  // Create new game
  handlePost() {
    Axios.post(requests.urlHeader().url,{}, {
      headers: requests.urlHeader().headers
      }).then(responseJson => {
        console.log(responseJson.data)
        let newbattle = {id: responseJson.data.battleId, battlefield: responseJson.data.battle.battlefield, gameStatus: responseJson.data.battle.gameStatus, playerShips: responseJson.data.battle.playerShips}   
        console.log(newbattle)
        this.props.createNewGame(newbattle)
      })        
  }  

  render() {
    return (
      <div>
        <button className="btn btn-secondary" onClick={()=>{this.handlePost();}}>Create New Game</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
  }
}
const mapDispatchToProps= (dispatch)=>{
    
  return{
    createNewGame: (obj)=>{dispatch(createNewGame(obj))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateBattle)