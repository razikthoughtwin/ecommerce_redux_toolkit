import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addproducts } from "../redux/slices/productsslice";
import { Link } from "react-router-dom";
import { addtocart } from "../redux/slices/cartslice";

const ProductListing = () => {
  const dispatch = useDispatch();

  const productslisting = useSelector((state) => state.products.productslist);

  // console.log("data--------->???????", productslisting);

  const cartitems=useSelector((state)=>state.cart.cartitems);
  console.log(cartitems)

  useEffect(() => {
    const fetchproducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(addproducts(response.data));
    };
    fetchproducts();
  }, []);

  return (
    <>
    <Link to="/cart">cart{cartitems.length}</Link>
      {productslisting.map((item) => {
        return (
          <div className="card-container" key={item.id}>
            <Link to={`/productdetail/${item.id}`}>
              <div className="" key={item.title}>
                <div className="card-image">
                  <img src={item.image} alt="listimage" />
                </div>
                <div className="card-text">
                  {item.title}
                  <br />$ {item.price}
                </div>
              </div>
            </Link>
            <button className="cart-btn" onClick={()=>dispatch(addtocart(item))}>ADD To Cart</button>
          </div>
        );
      })}
    </>
  );
};

export default ProductListing;
