import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageView from '../views/home/HomePageView';
import WordSearchView from '../views/games/gamesViews/WordSearchView'
import GamesView from '../views/games/GamesView';
import GuessWhoView from '../views/games/gamesViews/GuessWhoView';
import CreateYourAvatarView from '../views/games/gamesViews/CreateYourAvatarView';
import Admin from '../views/admin/Admin';
import LoggedView from '../views/logged/LoggedView';
import SingUpView from '../views/admin/singUpView/SingUpView';
import AddWomanView from '../views/admin/controlDataView/AddWomanView';
import MenuControlData from '../components/admin/controlData/MenuControlData';
import WomenTableView from '../views/admin/controlDataView/WomenTableView';
import EditWomanView from '../views/admin/controlDataView/women/EditWomanView';
import LearnWomenView from '../views/learn/LearnWomenView';

function Router() {
  const router = createBrowserRouter([{
    path: "/",
    element: <HomePageView />
  }, {
    path: "/logged",
    element: <LoggedView />
  }, {
    path: "/games",
    element: <GamesView />
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
    element: <LearnWomenView />
  },{
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
    path:"/admin/controlData/womenTable/edit/:id",
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