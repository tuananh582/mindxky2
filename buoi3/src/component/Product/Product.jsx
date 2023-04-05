const Product =(props)=>{
    console.log(props)
    const {title,price}=props;
    return (
        <div className="product">
            <h6>{title}</h6>
            <p>Price:${price}</p>
            <button>Add To Cart</button>
        </div>

    );
};
export default Product;