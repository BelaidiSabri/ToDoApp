import { combineReducers } from "redux";
import ItemListReducer from '../Reducers/ItemListReducer'
import ModalReducer from "../Reducers/ModalReducer";
import EditingTaskReducer from "../Reducers/EditingTaskReducer";
import idHolderReducer from "../Reducers/idHolderReducer";

const rootReducer=combineReducers({ItemListReducer,ModalReducer,EditingTaskReducer,idHolderReducer})

export default rootReducer