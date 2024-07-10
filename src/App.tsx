import React from 'react';
import { BasketPage, MainPage } from './pages';
import { RoutesPath } from './constants/commonConstants';
import { Route, Routes } from 'react-router-dom';
import './styles/globalStyles.scss'


export const App: React.FC = () => {
  
  return(
    <Routes>
    <Route path={RoutesPath.MainPage} element = {<MainPage/>} />
    <Route path={RoutesPath.Basket} element = {<BasketPage/>} />
    <Route path={'*'} element = {<MainPage/>} />
  </Routes>
    )
}
