import React from "react";

import { Switch, Route } from "react-router-dom";

import GameList from "./components/GameList";
import GameScreenshots from "./components/GameScreenshots";

const App = () => (
  <Switch>
    <Route exact path="/">
      <GameList />
    </Route>
    <Route path="/jeu/screenshots/:id">
      <GameScreenshots />
    </Route>
  </Switch>
);

export default App;
