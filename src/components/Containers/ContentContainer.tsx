import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {plusItemsAct, SetArticleThunk, ShowMoreThunk} from "../../store/Reducers/SetArticleReducer";
import {AppDispatch, AppRootType} from "../../store/store";
import {ArticlesReducerTypes} from "../../types/types";
import Content from "../Content/Content";
import {Route, Routes, useLocation} from "react-router-dom";
import ReadPageContainer from "./ReadPageContainer";

const ContentContainer = () => {

    let itemsCount = useSelector<AppRootType, number>((state) => state.SetArticleReducer.items);
    let url = useSelector<AppRootType, string | unknown>((state) => state.SetArticleReducer.path);

    let tagPath = useLocation();
    let dispatch = useDispatch<AppDispatch>();
    let data = useSelector<AppRootType, Array<ArticlesReducerTypes>>((state) => state.SetArticleReducer.data)

    useEffect(() => {
        // @ts-ignore
        dispatch(SetArticleThunk(tagPath.pathname.replace('/', '')))
    }, [itemsCount, tagPath]);

    const showMoreFunc = () => {
        // @ts-ignore
        dispatch(plusItemsAct(10))
    }
    return (
        <Routes>
            <Route path={''} element={<Content showMore={showMoreFunc} data={data}/>}/>
            <Route path={'/:category'} element={<Content showMore={showMoreFunc} data={data}/>}/>
            <Route path={'/:category/:id'} element={<ReadPageContainer/>}/>

        </Routes>
    );
};

export default ContentContainer;