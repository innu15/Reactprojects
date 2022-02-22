// import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import Functioal from './Functioal';
import Classcomp from './Classcomp';

function App() {
  const [temp,setTemp]=useState(false)
  const [visiblity,setVisiblity]=useState(false)
  // let temp=false
  let handleFunctionalclick=()=>{
    setTemp(!temp);
    //  return <Functioal/>
    console.log("innu")
    // temp=true
    console.log(temp)
  }
  let handleClassclick=()=>{
    setVisiblity(!visiblity);

  }
  return (
    
    <div>
    <h1 className='header'>styling using function and class component</h1>
    <div className='main'>
    <div className='first' onClick={()=>handleFunctionalclick()}>To see styling in function component</div>
    <div className='second' onClick={()=>handleClassclick()}>To see styling in class compont</div></div>
   <div className='rend'>
   {temp?<Functioal/>:""}
   {visiblity?<Classcomp/>:""}
   </div>
    </div>
  );
}

export default App;
