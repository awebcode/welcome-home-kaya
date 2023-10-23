export const reducer = (state,action) => {
    console.log(action)
    switch (action.type) {
        case "UPDATE_USER":
            return {...state,user:action.payload}
           
    
        default:
            return { ...state };
            
    }
}