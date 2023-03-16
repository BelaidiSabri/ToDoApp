import { EditingTask } from "../Types/Type"




const EditingTaskReducer =(state=false,action)=>{
    switch (action.type) {
        case EditingTask:
            return !state
    
        default:
            return state
    }
}
export default EditingTaskReducer;