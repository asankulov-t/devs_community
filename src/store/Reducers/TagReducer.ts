let initialState={
    tag:'tg'
}
export const setTagAct=(tag:string)=>{
    return{
        type:'SET_TAG',
        tag
    }
}
type ActionsType=ReturnType<typeof setTagAct>
export const TagReducer=(state=initialState,action:ActionsType)=>{
    switch (action.type) {
        case "SET_TAG":
            return {tag:action.tag}
        default: return state
    }
}