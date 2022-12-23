import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {Sidebar} from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="AppWrapper">
        <Header/>
        <Sidebar/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
