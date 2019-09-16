import React, { Component } from 'react';
import Game from './Game';
import Battles from './Battles'
import CreateBattle from './CreateBattle'
import { connect } from 'react-redux';
import ship from '../assets/ship.png';

class GamePage extends Component {
  render(){
  const ships = this.props.playerShips;
  if(ships.length === 0){
    return (
      <div className="App">
        <div align="center"><img src={ship} alt="ship"/></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h1 align="center">Battles</h1>
              <Battles />
            </div>
            <div className="col-sm-3">
              <br></br>
              <div className="row">
                <div className="col-sm-1">
                  <p className="unknown_parag"></p>
                  <p className="player_ship_parag"></p>
                  <p className="enemy_ship_parag"></p>
                  <p className="player_ship_hit_parag"></p>
                  <p className="enemy_ship_hit_parag"></p>
                  <p className="player_miss_parag"></p>
                  <p className="enemy_miss_parag"></p>
                  <p className="player_ship_sunk_parag"></p>
                  <p className="enemy_ship_sunk_parag"></p>
                </div>
                <div className="col-sm-5">
                <p>UNKNOWN</p>
                <p>PLAYER_SHIP</p>
                <p>ENEMY_SHIP</p>
                <p>PLAYER_SHIP_HIT</p>
                <p>ENEMY_SHIP_HIT</p>
                <p>PLAYER_MISS</p>
                <p>ENEMY_MISS</p>
                <p>PLAYER_SHIP_SUNK</p>
                <p>ENEMY_SHIP_SUNK</p>
                </div> 
              </div>
              <CreateBattle />
            </div>
            <div className="col-sm-6">  
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div className="App">
        <div align="center"><img src={ship} alt="ship"/></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
            <h1 align="center">Battles</h1>
              <Battles />
            </div>
            <div className="col-sm-3">
              <br></br>
              <div className="row">
                <div className="col-sm-1">
                  <p className="unknown_parag"></p>
                  <p className="player_ship_parag"></p>
                  <p className="enemy_ship_parag"></p>
                  <p className="player_ship_hit_parag"></p>
                  <p className="enemy_ship_hit_parag"></p>
                  <p className="player_miss_parag"></p>
                  <p className="enemy_miss_parag"></p>
                  <p className="player_ship_sunk_parag"></p>
                  <p className="enemy_ship_sunk_parag"></p>
                </div>
                <div className="col-sm-5">
                <p>UNKNOWN</p>
                <p>PLAYER_SHIP</p>
                <p>ENEMY_SHIP</p>
                <p>PLAYER_SHIP_HIT</p>
                <p>ENEMY_SHIP_HIT</p>
                <p>PLAYER_MISS</p>
                <p>ENEMY_MISS</p>
                <p>PLAYER_SHIP_SUNK</p>
                <p>ENEMY_SHIP_SUNK</p>
                </div> 
              </div>
              <CreateBattle />
            </div>
            <div className="col-sm-6">
              <br></br>
              <Game/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
}

const mapStateToProps = (state)=>{
  console.log(state.onGoingGame)
  return {
    playerShips: state.onGoingGame
  }
}
const mapDispatchToProps= (dispatch)=>{   
  return{
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GamePage);