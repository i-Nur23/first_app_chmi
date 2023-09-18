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
import {
  FinalResults,
  FirstChallenge,
  FirstChallengeChoice,
  FirstChallengeResults,
  SecondChallenge,
  SecondChallengeChoice, SecondChallengeResults,
  WelcomePage
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<WelcomePage/>}/>
      <Route path="first_step">
        <Route index element={<FirstChallenge/>}/>
        <Route path="choice" element={<FirstChallengeChoice/>}/>
        <Route path="result" element={<FirstChallengeResults/>}/>
      </Route>
      <Route path="second_step">
        <Route index element={<SecondChallenge/>}/>
        <Route path="choice" element={<SecondChallengeChoice/>}/>
        <Route path="result" element={<SecondChallengeResults/>}/>
      </Route>
      <Route path="final" element={<FinalResults/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
