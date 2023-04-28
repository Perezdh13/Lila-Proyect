import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from '../views/home/HomePage';
import WordSearchView from '../views/games/gamesViews/WordSearchView'
import Games from '../views/games/Games';
import GuessWhoView from '../views/games/gamesViews/GuessWhoView';
import CreateYourAvatarView from '../views/games/gamesViews/CreateYourAvatarView';
import Learn from '../views/learn/Learn';
import Admin from '../views/admin/Admin';
import Logged from '../views/logged/Logged';
import SingUpView from '../views/admin/singUpView/SingUpView';
import AddWomanView from '../views/admin/controlDataView/AddWomanView';

function Router() {
  const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />
  }, {
    path: "/logged",
    element: <Logged />
  }, {
    path: "/games",
    element: <Games />
  }, {
    path: "/games/wordSearch",
    element: <WordSearchView />
  }, {
    path: "games/guessWho",
    element: <GuessWhoView />
  }, {
    path: "/games/createYourAvatar",
    element: <CreateYourAvatarView />
  }, {
    path: "/learn",
    element: <Learn />
  }, {
    path: "/admin",
    element: <Admin />
  }, {
    path: "/admin/singUp",
    element: <SingUpView />
  }, {
    path: "/admin/controlData/addWoman",
    element: <AddWomanView />
  }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Router