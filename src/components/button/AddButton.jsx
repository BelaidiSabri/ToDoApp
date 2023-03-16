import React from 'react'
import '../button/AddButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggle_modal } from '../../Redux/Actions/ModalAction';

/* const toggleModal = ()=>{
  modal = !modal
} */

const AddButton = () => {
  const dispatch=useDispatch()
  return (
    <div><button className='add__btn' onClick={()=>dispatch(toggle_modal())}><FontAwesomeIcon icon={faPlus } size='2x' weight='solid' /></button></div>
  )
}

export default AddButton
/* onClick={()=>dispatch(add())} */