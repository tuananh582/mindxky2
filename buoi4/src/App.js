
import './App.css';

function App() {

  // const funcapp =()=>{
  //   console.log("ondelete");
  // }
  // const ondelete=()=>{
  //   console.log("deleted");
  // }
  const onsort=(sort)=>{
    if(sort==="asc"){
      console.log("gio hang da tang dan")
    }
    return;
   
  } 
  return (
    <div className="App">
      <div>
    <button onClick={()=>onsort("asc")} >Add</button>
    <button onClick={()=>onsort("desc")} >Delete </button>
      </div>
    </div>
  );
}

export default App;
