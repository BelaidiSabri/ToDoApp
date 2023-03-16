import { EditingTask } from "../Types/Type"

const initialState=0

const idHolderReducer =(state=initialState,action)=>{
    switch (action.type) {
        case EditingTask:
            
                return state=action.payload;
        
    
        default:
            return state
            
    }
}
export default idHolderReducer