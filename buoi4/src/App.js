
import { useState } from 'react';
import './App.css';

function App() {

  // const funcapp =()=>{
  //   console.log("ondelete");
  // }
  // const ondelete=()=>{
  //   console.log("deleted");
  // }
  
  const  [tg,settg] = useState(0);
  // settg++;
  const addtocart = ()=>{
    settg(tg+1);
  }
  


  const onsort=(sort)=>{
    if(sort==="asc"){
      console.log("gio hang da tang dan")
    }
      else if(sort==="desc"){
        console.log("gio hang da giam dan")
      } 
    }



   
  
  return (
    <div className="App">
      <div>
        {/* <button ></button> */}
    <button onClick={addtocart} >Add</button>
    <button onClick={() => onsort("desc")} >Delete </button>
    <p>{tg}</p>
    
    {/* <button onClick></button> */}
      </div>
      
    </div>
  );
}

export default App;
