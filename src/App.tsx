import React, {useEffect, useState} from 'react';
import './Main.css';
import NavBar from "./components/NavBar/NavBar";
import NavSide from "./components/NavSide/NavSide";
import ContentContainer from "./components/Containers/ContentContainer";
import TagBtn from "./components/Common/TagBtn/TagBtn";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRootType} from "./store/store";
import {setTagAct} from "./store/Reducers/TagReducer";

function App() {

    return (
        <div className="App">
            <NavBar />
            <div className="row">
                <div className="col-2 col-sm-2"><NavSide/></div>
                <div className="col-8 col-sm-8"><ContentContainer/></div>
                <div className="col-2 col-sm-2"><TagBtn title={'title'}/><TagBtn title={'title'}/><TagBtn title={'title'}/><TagBtn title={'title'}/></div>


            </div>
        </div>
    );
}

export default App;
