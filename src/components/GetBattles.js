import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeGame } from '../store/actions/battleshipActions';
import { playGame } from '../store/actions/battleshipActions';
import Axios from 'axios';
import requests from '../utilities/requests.js';

class GetBattles extends Component {

    // to remove the item completely
    handleRemove = (id)=>{
      Axios.delete(`${requests.urlHeader().url}/${id}`, {
          headers: requests.urlHeader().headers
        }).then(response => {
          console.log(response);
          this.props.removeGame(id);
      });   
    }
    // onClick play the specific game
    handleGame = (id)=>{
      Axios.get(`${requests.urlHeader().url}/${id}`, {
        headers: requests.urlHeader().headers
        }).then(responseJson => {
           let newbattle = {id: id, battlefield: responseJson.data.battle.battlefield, enemyShips: responseJson.data.battle.enemyShips, gameStatus: responseJson.data.battle.gameStatus, playerShips: responseJson.data.battle.playerShips}   
           console.log(newbattle)
           this.props.playGame(newbattle);
        })      
    }

    render() {
        let addedItems2 = this.props.battles.length ?
            (  
                this.props.battles.map((battle, index)=>{
                    return(
                      <div key={battle.id}>
                        <button className="waves-effect waves-light btn" onClick={()=>{this.handleGame(battle.id)}}>Game {index+1}</button>
                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(battle.id)}}>Remove</button>   
                      </div>   
                    )
                })
            ):
             (
              <p>Nothing...</p>
             )
       return(
        <div>
          {addedItems2}   
        </div>
       )
      }
    }
    
    const mapStateToProps = (state)=>{
      return {
          battles: state.addedItems
        }
      
    }
    const mapDispatchToProps= (dispatch)=>{
      return{
        ...bindActionCreators({ playGame, removeGame }, dispatch)
      }
    }

export default connect(mapStateToProps,mapDispatchToProps)(GetBattles)