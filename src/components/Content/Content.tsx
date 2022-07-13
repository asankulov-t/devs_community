import React from 'react';
import {ArticlesReducerTypes} from "../../types/types";
import ContentItem from "./ContentItem";
import Btn from "../Common/Btn/Btn";

type ContentTypes = {
    data: Array<ArticlesReducerTypes>,
    showMore:()=>void
}
const Content = (props: ContentTypes) => {
    console.log('gringo', props.data)
    return <div>
        {props.data.map((item) => <ContentItem title={item.title}
                                                               img={item.cover_image}                                                                                                id={item.id}
                                                               published={item.published_at}
                                                               user={item.user}                                                                                               des={item.description}/>)}
        <Btn callBack={props.showMore} title={'Show More'}/>
    </div>
};

export default Content;