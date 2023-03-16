import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../Redux/Actions/ListAction'
import { toggle_modal } from '../../Redux/Actions/ModalAction'
import { toggle_edit } from '../../Redux/Actions/EditingAction'
import { update } from '../../Redux/Actions/UpdateAction'
import { useRef } from "react";

import '../AddModal/AddModal.css'


const AddModal = () => {
const PressEnter =(e)=>{
  if(e.keyCode===13) {dispatch(add(task))
  e.target.value=''}
}
const Add_Input_ref =useRef()






const modal=useSelector(state=>state.ModalReducer)
const editModal =useSelector(state=>state.EditingTaskReducer)
const task_id =useSelector(state=>state.idHolderReducer)
const dispatch =useDispatch()
const [input,setInput]=useState()
const [updatedTitle,setUpdatedTitle]=useState('')
const task=input

return ((editModal===true)?(<div className='Modal__wapper'>
  <h1>Edit Task</h1>
  <input type="text" placeholder='modify task here'  onChange={(e)=>setUpdatedTitle(e.target.value)} maxLength="15" />
  <div className='modal__buttons'>
    <button className='accept__button modal__button' onClick={()=>dispatch(update(task_id,updatedTitle))}>update</button>
    <button className='close__button  modal__button'onClick={()=>{dispatch(toggle_edit(''));dispatch(toggle_modal())}} >Close</button>
  </div>
</div>) :
 (modal && (<div className='Modal__wapper'>
        <h1>Add New Task</h1>
        <input type="text" placeholder='write task here' onKeyDown={PressEnter} ref={Add_Input_ref}  onChange={(e)=>setInput(e.target.value)} maxLength="15"/>
        <div className='modal__buttons'>
          <button className='accept__button modal__button' onClick={()=>dispatch(add(task))}>Accept</button>
          <button className='close__button  modal__button 'onClick={()=>dispatch(toggle_modal())} >Close</button>
        </div>
    </div>)
  ))
}

export default AddModal