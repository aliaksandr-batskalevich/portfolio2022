import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Provider} from "react-redux";
import {store} from "./bll/store";
import {Snackbar} from "./components/Snackbar/Snackbar";

function App() {
  return (
    <div className="AppWrapper">
        <Provider store={store}>
            <Header/>
            <Main/>
            <Sidebar/>
            <Snackbar/>
            <Footer/>
        </Provider>
    </div>
  );
}

export default App;
