import { AddTask, COMPLETED, DeleteTask, FILTER, UpdateTask } from "../Types/Type";

export const add= (task)=>{
    return { type:AddTask,
            payload:task
    }
};
export const dlt = (id)=>{
    return { type:DeleteTask,
             payload:id   
    }
}
export const Update = (id,title)=>{
    return {    type:UpdateTask,
                payload:{id,title}
    }
}
export const complete =(id)=>{
    return { type:COMPLETED,
            payload:id
    }
}    
export const filter=(isDone)=>{
    return { type:FILTER,
            payload:isDone
    }
}  