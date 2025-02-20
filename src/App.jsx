import Header from './components/header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { BoardContext } from './context/BoardContext';
import './App.css';
import { useState } from 'react';

const App = () => {
  
  const boardData = {
    active:0,
    boards:[
      {
      name:'My Trello Board',
      bgcolor:'#069000',
      list:[
        {id:"1",title:"To do",items:[{id:"cdrFt",title:"Project Description 1"}]},
        {id:"2",title:"Progress",items:[{id:"cdrFv",title:"Project Description 2"}]},
        {id:"3",title:"Done",items:[{id:"cdrFb",title:"Project Description 3"}]}
        ]
      }
    ]
  }
  const [allboard, setAllBoard] = useState(boardData);

  return (
   <>
      <Header></Header>
      <BoardContext.Provider value={{allboard,setAllBoard}}>
      <div className='content flex '>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
      </BoardContext.Provider>
      
   </>
  )
}

export default App