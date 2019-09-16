export default (function () {

  const types = Object.freeze({
    UNKNOWN: 0,
    PLAYER_SHIP: 1,
    ENEMY_SHIP: 2,
    PLAYER_SHIP_HIT: 3,
    ENEMY_SHIP_HIT: 4,
    PLAYER_MISS: 5,
    ENEMY_MISS: 6,
    PLAYER_SHIP_SUNK: 7,
    ENEMY_SHIP_SUNK: 8
  });

  function boardWithShips(battle) {
    let field = []
    field = battle[0].battlefield
    let board = field;
    return board;
  };

  return {
    types: types,
    boardWithShips: boardWithShips,
  };

  
})();

