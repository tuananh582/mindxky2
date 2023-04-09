import { useState } from 'react'
import Person from './Person'
const List =(props)=>{
     const personList=[
        {
            id:2,
            name:"Cara",
            age:18,
            skill:"Reading"
        },
        {
            
            id:4,
            name:"Jhon",
            age:20,
            skill:"Games"
        },
        {
            
            id:5,
            name:"Micheal",
            age:32,
            skill:"Box-xing"
        },
        


     ]   
     const personls=personList.map(person=>
        <Person person={person}/>
            
        
    
)
const [count,setcount]=useState(0)
    // const {name,phone}=props;
    return(
        <div className=" list  ">
            {/* <div className="flex-auto w-1/4 border justify-between">
            <p >{name}  </p>
            <p>{phone}</p>
            {}


            </div> */}
            
        {personls}
            

           </div>
           
        


    );



}
export default List;