const List =(props)=>{
    console.log(props)
    const {name,phone}=props;
    return(
        <div className=" list  ">
            <div className="flex-auto w-1/4 border justify-between">
            <p >{name}  </p>
            <p>{phone}</p>
            </div>



           </div>
           
        


    );



}
export default List;