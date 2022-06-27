import './App.css';
import styled from "styled-components"
import {Route,Routes,Navigate} from 'react-router-dom'
import Login from './login/index'
import Notebook from './notebook/index'

 
function App() {
  return (
    <div id='app'>
      <Routes>
        <Route index path="/" element={<Login/>}/>

        {/* <Route  path="/" element={<Notebook/>}/> */}
      </Routes>

    </div>
   
  
  );
}

export default App;
