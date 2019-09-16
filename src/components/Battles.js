import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGames } from '../store/actions/battleshipActions';
import GetBattles from './GetBattles';
import Axios from 'axios';
import requests from '../utilities/requests.js';

class Battles extends Component {
  // Get all games from api if exists
  componentDidMount() {
    Axios.get(requests.urlHeader().url, {
      headers: requests.urlHeader().headers
      }).then(responseJson => {
          responseJson.data.battles.map((battle) => {
            return (
              <div key={battle.battleId}> 
                {this.props.getGames(battle.battleId)}
              </div>
            )
          })
      })        
      .catch(error => this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
      }));
      
  }
  render() {
   return(
    <div className="container">
      <div className="cart">
        <ul className="collection">
            <GetBattles />
        </ul>
      </div>       
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
    getGames: (id)=>{dispatch(getGames(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Battles)