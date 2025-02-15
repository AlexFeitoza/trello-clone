import Header from './components/header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import './App.css';

const App = () => {
  return (
   <>
      <Header></Header>
      <div className='content flex '>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
   </>
  )
}

export default App