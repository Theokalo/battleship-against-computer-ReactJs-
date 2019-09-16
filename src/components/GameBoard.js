import React, { Component } from 'react';
import battleship from '../utilities/battleshipBoard.js';

export default class GameBoard extends Component {
  renderSquare(row, col) {
    switch(this.props.board[row][col]) {
      case battleship.types.UNKNOWN:
        return (
          <div className="unknown"
            onClick={this.props.onFire.bind(this, row, col)} />
        );
      case battleship.types.PLAYER_SHIP:
        return (
          <div className="player_ship"
           />
        );
      case battleship.types.ENEMY_SHIP:
          return (
            <div className="enemy_ship"
              />
          );
      case battleship.types.PLAYER_SHIP_HIT:
        return <div className="player_ship_hit" />;
      case battleship.types.ENEMY_SHIP_HIT:
          return <div className="enemy_ship_hit" />;
      case battleship.types.PLAYER_MISS:
        return <div className="player_miss" />;
      case battleship.types.ENEMY_MISS:
          return <div className="enemy_miss" />;
      case battleship.types.PLAYER_SHIP_SUNK:
          return <div className="player_ship_sunk" />;
      case battleship.types.ENEMY_SHIP_SUNK:
          return <div className="enemy_ship_sunk" />;
      default: 
        break;
    }
  }

  render() {
    // Design the game board
    let rows = [];
    for (let row=0; row<10; row++) {
      let thisRow = [];
      for (let col=0; col<10; col++) {
        let square = this.renderSquare(row, col);
        thisRow.push(square);
      }
      rows.push(<div className="game-row">{thisRow}</div>);
    }

    return (
      <div className={this.props.visible ? '' : 'hidden'}>
        {rows}
      </div>
    );
  }
}