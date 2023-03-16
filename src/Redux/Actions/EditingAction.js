import { EditingTask } from "../Types/Type"

export const toggle_edit = (id)=>{
    return {type: EditingTask,
            payload :id
    }
}