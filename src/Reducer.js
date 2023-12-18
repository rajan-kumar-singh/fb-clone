 export const initialState={
    user:""
}
const Reducer=(state,action)=>{
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
            default:
                return state
    }
}
export default Reducer;