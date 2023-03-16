import { ToggleModal } from "../Types/Type"




const ModalReducer =(state=false,action)=>{
    switch (action.type) {
        case ToggleModal:
                return !state
        default:
            return state;
    }
}

export default ModalReducer