import React,{createContext} from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom';
import App from './App';

let Name=createContext();
ReactDOM.render(<><Name.Provider value={"Bismillah"}><BrowserRouter><App/></BrowserRouter></Name.Provider></>,document.getElementById('root'))
export {Name};