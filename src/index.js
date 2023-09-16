import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import {FirstChallenge, FirstChallengeChoice, FirstChallengeResults, WelcomePage} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<WelcomePage/>}/>
      <Route path="first_step">
        <Route index element={<FirstChallenge/>}/>
        <Route path="choice" element={<FirstChallengeChoice/>}/>
        <Route path="result" element={<FirstChallengeResults/>}/>
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
