import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import  { NavLink }  from 'react-router-dom'
import './GameScreenshots.css'


function Screenshots() {
  const { id } = useParams();
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);


  useEffect(() => {
     axios
       .get(`https://wild-games.herokuapp.com/api/v1`)
       .then((response) => setGames(response.data))
       .then(setGame(games.find((game) => game.id === parseInt(id))));
  }, [games, id]);

  return (
    <>
      <div className="screenshots-list">
          {game
            ? game.short_screenshots.map((screenshot, index) => (
                <img
                  className="quard"
                  key={index}
                  src={screenshot.image}
                  alt={`Screenshot #${index} for ${game.name}`}
                />
              ))
            : null}
      </div>
      <div className="return">
        <button className="return-link">
          <NavLink style={{ color: "white" }} to="/">
            Accueil
          </NavLink>
        </button>
      </div>
    </>
  );
}

export default Screenshots;
