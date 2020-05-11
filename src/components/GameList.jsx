import React, { useState, useEffect } from "react";
import './GameList.css'
import axios from 'axios'


import Game from "./Game";


const GameList = () => {
  const [games, setGames] = useState([]);
  
  const [showBestGames, setShowBestGames] = useState(false);

  useEffect(() => {
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then(res => setGames(res.data))
  }, []);

  const removeGame = (game) => {
    const index = games.indexOf(game);
    games.splice(index, 1);
    setGames([...games]);
  };

  return (
    <div>
      <div>
        <p className="menu__title">WILD GAMES</p>
        <p className="menu-item">
          <button
            className="menu__item"
            onClick={() => setShowBestGames(!showBestGames)}
          >
            {showBestGames ? "See All  games" : "See Best Games"}
          </button>
        </p>
      </div>

      <div className="GameList">
        {showBestGames
          ? games
              .filter((game) => game.rating >= 4.5)
              .map((game, index) => (
                <Game key={index} game={game} removeGame={removeGame} alt="game.name"/>
              ))
          : games.map((game, index) => (
              <Game key={index} game={game} removeGame={removeGame} alt="game.name"/>
            ))}
      </div>
    </div>
  );
};

export default GameList;
