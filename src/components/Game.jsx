import React from "react";
import './Game.css'
import { Link } from "react-router-dom";

const Game = ({ game, removeGame }) => (
  <div className="card">
    <div className="card__image-container">
      <img
        className="card__image"
        src={game.background_image}
        alt={game.name}
      />
    </div>

    <div className="card__content">
      <h1 className="card__title">{game.name}</h1>
      <p className="card__content-rating">{game.rating}</p>
      <button className="card__content-delete" onClick={() => removeGame(game)}>
        Delete
      </button>
      </div>

      <div>
      <Link
        className="card__content-link"
        to={{ pathname: `/jeu/screenshots/${game.id}` }}
      >
        See all screenshots
      </Link>
    </div>
  </div>
);

export default Game;
