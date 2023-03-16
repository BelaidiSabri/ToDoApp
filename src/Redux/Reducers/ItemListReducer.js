import { AddTask, DeleteTask, UpdateTask, COMPLETED, FILTER } from "../Types/Type";
import { v4 as uuidv4 } from 'uuid';



const tasks=[]
const ItemListReducer =(state=tasks,action) =>{
    switch (action.type) {
        case AddTask:
            return [...state,{id:uuidv4(),title:action.payload,isDone:false}]
            
        case DeleteTask:
            return state.filter((e)=>e.id!==action.payload)


        case UpdateTask:  
            let UpdatedTodo=state.map((e)=>{if (e.id === action.payload.id){
                return {...e,title:action.payload.updatedTitle}
            }
        else{
            return e
        }})   
        return UpdatedTodo;


        
        case COMPLETED:
            return state.map(e=>{if(e.id===action.payload){
                return {...e,isDone: !e.isDone}
            } else{
                return e
            }
            })
            case FILTER:
                let filteredTodo;
                if (action.payload === "done") {
                  filteredTodo = [...state].filter((e) => e.isDone === true);
                  console.log(state);
                } else if (action.payload === "Notdone") {
                  filteredTodo = [...state].filter((e) => e.isDone === false);
                } else {
                  filteredTodo = state;
                }
                return filteredTodo;
              default:
                return state;
    }
}
export default ItemListReducer