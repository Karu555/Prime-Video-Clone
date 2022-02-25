import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MoviesPage015 } from './Components/MoviesPage/MoviesPage015';
import { TVShowsPage015 } from './Components/TVShowsPage/TVShowsPage015';
import { ItemLandingPage } from './Components/ItemlandingPage/ItemLandingPage';
import { Login } from './Components/Login';
import { Register } from './Components/Register';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tvshows' element={<TVShowsPage015/>}/>
        <Route path='/movies' element={<MoviesPage015/>}/>
        <Route path='/itemlanding' element={<ItemLandingPage />}>
          <Route path=':itemid' element={<ItemLandingPage/>}/>          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
