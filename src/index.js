import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Firsthome} from './Components/Firsthome'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MoviesPage015 } from './Components/MoviesPage/MoviesPage015';
import { TVShowsPage015 } from './Components/TVShowsPage/TVShowsPage015';
import { ItemLandingPage015 } from './Components/ItemlandingPage/ItemLandingPage015';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Trailer015 } from './Components/Trailer/Trailer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>        
      <Route path='/' element={<Firsthome/>}/>
        <Route path='/home' element={<App />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tvshows' element={<TVShowsPage015/>}/>
        <Route path='/movies' element={<MoviesPage015/>}/>
        <Route path='/watchmoviepage' element={<Trailer015/>}/>
        <Route path='/itemlanding' element={<ItemLandingPage015 />}>
          <Route path=':itemid' element={<ItemLandingPage015/>}/>          
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
