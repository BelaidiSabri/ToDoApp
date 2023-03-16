
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import TaskList from './components/TaskList/TaskList';
import SideBar from './components/SideBar/SideBar';
import AddModal from './components/AddModal/AddModal';
import { toggle_modal } from './Redux/Actions/ModalAction';




function App() {


  const dispatch = useDispatch()

  const modal=useSelector(state=>state.ModalReducer)
  const PressEchap = (e) => {
    if (e.keyCode === 27) {
      dispatch(toggle_modal());
    }
  };
  

  const a =useSelector(state=>state.TestReducer)
  console.log(a);

  return (
    <div className="App" onKeyDown={modal===true? PressEchap:null}>
     <Header></Header>
     <TaskList></TaskList>
     <SideBar></SideBar>
     <AddModal></AddModal>
    </div>
  );
}

export default App;
