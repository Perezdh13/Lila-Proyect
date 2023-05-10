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
import MenuControlData from '../components/admin/controlData/MenuControlData';
import WomenTableView from '../views/admin/controlDataView/WomenTableView';
import EditWoman from '../components/admin/controlData/women/EditWoman';
import EditWomanView from '../views/admin/controlDataView/women/EditWomanView';

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
    path: "/games/guessWho",
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
    path: "/admin/controlData",
    element: <MenuControlData />
  }, {
    path: "/admin/controlData/womenTable",
    element: <WomenTableView />
  },{
    path:"/admin/controlData/womenTable/create",
    element: <AddWomanView />
  },{
    path:"/admin/controlData/womenTable/edit",
    element: <EditWomanView/>
  }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Router