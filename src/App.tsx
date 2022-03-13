import React, { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { getTodos, addTicket } from './API'
import { AddToHomeScreen } from 'react-pwa-add-to-homescreen';
import MainPage from './components/MainPage'
import Footer from "./components/Footer";
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
//import registerServiceWorker from "./serverWorker";
//registerServiceWorker();
//import './App.css';

const App: React.FC = () => {
 

  return (
    <BrowserRouter>
  
    <Home/>
     
    <Route path='/d' element={ <Dashboard/>}/> 
     
    </BrowserRouter>
  );
};
//
export default App;
