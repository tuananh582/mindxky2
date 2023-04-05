import './App.css'
import Product from './component/Product/Product';
// import Product from "./component/Product/Product"
const App=()=>{
  return( 
    // const car=100

    // <>
    //   <header style={{
    //     display:"flex",
    //     backgroundColor: "#40eb34",
    //     alignItems: "center",
    //     justifyContent: "space-between"
    //   }}>
    //   <h1>Shopping cart {3+6}</h1>
    //   <h1>{"Car".toUpperCase()} number  {car}</h1>
    //   </header>
    //   <main>
    //   <Product title={"iphone 14 pro max"} price ="1500" />
    //   <Product title={"iphone 13 pro max"} price ="2000" />
    //   <Product  title={"Sam Sung 14 pro max"} price ="3000" />  
    //   <Product title={"Huawei 14 pro max"} price ="4000" />
    //   <Product title={"Xiaomi 14 pro max"} price ="1000" />    
    //   <Product />

    //   </main>
    // </>
    <div className="container" >
      <div className="input w-52  ">
      <input type="text" placeholder='Enter your task here...' />
      </div>
    </div>

  );


  

}
export default App;