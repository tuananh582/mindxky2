
import './App.css';
import List from './component/List/List'
function App() {
  const time1 = [3,4,5,6,7,8]
  const time2=time1.map(x=>x*2)
  console.log(time2)

  return (
    // <input type="text" />
    <div className="container  justify-between ">
      <div className="input justify-around ">
        <input type="text" placeholder="Ten"  className="bg-slate-200 w-max  border-2 rounded-xl  "   />
        <input type="text" placeholder="Dien Thoai "  className="bg-slate-200 w-max  border-2 rounded-xl"   />
        <button value="submit" className="w-32 border-0 rounded-xl bg-cyan-300 " >Them</button>
      </div>
      <br/>
    <div>
    <input type="text" placeholder="Tim Kiem"  className="bg-slate-200 w-64  border rounded-xl  "   />
    <button value="submit" className="w-32 border-0 rounded-xl bg-cyan-300 ">Tim</button>
    <button value="submit" className="w-32 border-0 rounded-xl bg-cyan-300 ">Xoa Trung</button>

    </div>

    


      <div className="Day flex-auto   ">
      <List />



      {/* <List name="Tuan Anh" phone="(927)-47382-9732"/>
      
      
      <List name="Viet" phone="(786)-48632-9032"/>
   
      
      <List name="Hung" phone="(654)-92231-2931"/>
      
      <List name="Hien" phone="(765)-3213-367131"/>
      
      <List name="Thu" phone="(763)-7623-63521"/>
      */}


      </div>


    </div>
  );
}

export default App;
