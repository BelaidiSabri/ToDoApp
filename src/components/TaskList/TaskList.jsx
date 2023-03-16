import { useDispatch, useSelector } from "react-redux";
import AddButton from "../button/AddButton";
import "./TaskList.css";
import noTaskIcon from "../../assets/images/Notask.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash ,faFilter, faEye} from '@fortawesome/free-solid-svg-icons';
import { complete, dlt, filter } from "../../Redux/Actions/ListAction";
import { toggle_edit } from "../../Redux/Actions/EditingAction";

import { toggle_modal } from "../../Redux/Actions/ModalAction";
import { useEffect, useState } from "react";





const TaskList = () => {
  
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.ItemListReducer);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };
  const filterTasks = (filterType) => {
    if (filterType === 'done') {
      setFilteredTasks(tasks.filter((e) => e.isDone === true));
    } else if (filterType === 'Notdone') {
      setFilteredTasks(tasks.filter((e) => e.isDone === false));
    } else {
      setFilteredTasks(tasks);
    }
  };
  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);
  

 /*  const update =(id,updatedTitle)=>{
    dispatch(UpdateTask(id,updatedTitle))
  } */


  return (
    <div className="task__list">
      <div className="task__holder">
        {tasks.length === 0 ? (
          <div>
            <p>
              You don't have any tasks yet
              <img src={noTaskIcon} alt="emptyicon" /> Click on the + button
              below to add task
            </p>
          </div>
        ) : (
          <ul>
            {filteredTasks.map((e) => (
              <div>
                <li className="task">
                  <input type='checkbox' id = {e.id}  className={`${e.isDone? "check__box": ""} box` }  onClick={()=>dispatch(complete(e.id))}/>
                  <label htmlFor= {e.id}>{e.title}</label>
                  <div className="icons_task">
                    <FontAwesomeIcon icon={faPenToSquare} className='edit__icon' onClick={()=>{dispatch(toggle_edit(e.id));dispatch(toggle_modal())}} />
                    <FontAwesomeIcon icon={faTrash} className='delete__icon' onClick={()=>dispatch(dlt(e.id))}/>
                  </div>
                </li>
                  <hr className="line" />
              </div>
            ))}
          </ul>
        )}
      </div>
      <div className={`${showFilterDropdown? "FilterAfter":""} FilterBefore`}>
        <FontAwesomeIcon icon={faFilter} onClick={()=>toggleDropdown()}/>
      </div>  
      {showFilterDropdown&&<div className="dropDownFilter">
        <div className="show" onClick={()=>filterTasks('done')}><FontAwesomeIcon icon={faEye}/>  Done</div>
        <div className="show"onClick={()=>filterTasks('Notdone')}><FontAwesomeIcon icon={faEye}/> NotDone</div>
        <div className="show"onClick={()=>filterTasks('')}><FontAwesomeIcon icon={faEye}/> All</div>
        </div>  }                                  
      
      <div className="button__holder">
        <AddButton></AddButton>
      </div>
    </div>
  );
};

export default TaskList;
