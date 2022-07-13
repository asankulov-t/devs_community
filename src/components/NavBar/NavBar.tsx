import React from 'react';
import style from './NavBar.module.css'
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRootType} from "../../store/store";
import {SetArticleThunk} from "../../store/Reducers/SetArticleReducer";

const NavBar = () => {
    let useHistory=useLocation()
    let dispatch=useDispatch<AppDispatch>();
    const getArticle=(article:string)=>{
        let art=article.replace('/','');
        // @ts-ignore
        dispatch(SetArticleThunk(art))
    }
    return (
            <nav className={style.navBlock}>
                <ul onClick={()=>getArticle(useHistory.pathname)} >
                    <li><NavLink to=" "><i className="bi bi-house"></i>Top Articles</NavLink></li>
                    <li><NavLink to="/react"><i className="bi bi-filetype-jsx"></i>React </NavLink></li>
                    <li><NavLink to="/javascript"><i className="bi bi-filetype-js"></i>JavaScript</NavLink></li>
                    <li><NavLink to="/redux"><i className="bi bi-code-square"></i>Redux</NavLink></li>
                    <li><NavLink to="/redux-thunk"><i className="bi bi-code-square"></i>Redux-thunk</NavLink></li>
                </ul>
            </nav>
    );
};

export default NavBar;