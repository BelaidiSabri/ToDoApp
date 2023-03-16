import { useSelector } from "react-redux"
import { UpdateTask } from "../Types/Type"



export const update =(id,updatedTitle)=>{
    return{ type:UpdateTask,
            payload:{id,updatedTitle}
    }
}