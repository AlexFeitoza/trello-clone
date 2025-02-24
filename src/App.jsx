import Header from './components/Header';
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
      name:'Área de Trabalho',
      bgcolor:'#069000',
      list:[
        {id:"1",title:"A Fazer",items:[{id:"cdrFt",title:"Projeto Descrição 1"}]},
        {id:"2",title:"Em Andamento",items:[{id:"cdrFv",title:"Projeto Descrição 2"}]},
        {id:"3",title:"Feito",items:[{id:"cdrFb",title:"Projeto Descrição 3"}]}
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