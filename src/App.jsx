import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './data'
import './App.css'

function App() {
 
  const [paras,setParas]=useState([]);
  console.log(paras)
  const[num,setNum]=useState(0)

  const generatePara=(num)=>{
    if(num>8)
    {
      alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
    }
    const paragraphs=data;
   
    const toSet=paragraphs.slice(0,num);
    
    setParas(toSet);
   

  }

  return (
    <>
    <h1>Tired of Writing Boring Lorem Ipsum</h1>
    <div className="btnAndValue">
      <h3>Paragraphs:</h3>
      <input type="number" value={num} onChange={(e)=>{
        if(e.target.value>=0)
        {
          setNum(e.target.value)

        }
        
        
      }}/>
      <button onClick={()=>{generatePara(num)}}>Generate</button>
    </div>
    <div className="output">
      <ul>
      {
            paras.map((item, index) => {
              return <li key={index}>{index+1+"--"}{item.para}</li>;
            })
          }
      </ul>
      
    </div>
      
    </>
  )
}

export default App
