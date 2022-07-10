import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {plusItemsAct, SetArticleThunk, ShowMoreThunk} from "../../store/Reducers/SetArticleReducer";
import {AppDispatch, AppRootType} from "../../store/store";
import {ArticlesReducerTypes} from "../../types/types";
import Content from "../Content/Content";
import {Route, Routes} from "react-router-dom";
import ReadPageContainer from "./ReadPageContainer";

const ContentContainer = () => {
    let data=useSelector<AppRootType,Array<ArticlesReducerTypes>>((state) => state.SetArticleReducer.data)
    let itemsCount=useSelector<AppRootType,number>((state) => state.SetArticleReducer.items)
    let article=useSelector<AppRootType,string>(state => state.TagReducer.tag)

    let dispatch=useDispatch<AppDispatch>();
    useEffect(()=>{
        // @ts-ignore
        dispatch(SetArticleThunk(article))
    },[itemsCount])

    let id=useSelector<AppRootType>(state => state.ReadPageReducer.id)
    let pathForReadPage=id!==0&&id;
    console.log('hello',article)
    const showMoreFunc=()=>{
        // @ts-ignore
        dispatch(plusItemsAct(10))

    }


    return (
                <Routes>
                    <Route path={article+''} element={ <Content showMore={showMoreFunc} data={data}/>}/>
                    <Route path={pathForReadPage+''} element={ <ReadPageContainer/>}/>
                </Routes>
    );
};

export default ContentContainer;