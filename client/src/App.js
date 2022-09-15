import React from "react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from 'react-router-dom';
import  './App.css'

function App(props) {
  return (
    <BrowserRouter>
      <AppRouter state={props.state}/>
    </BrowserRouter>
  );
}

export default App;
