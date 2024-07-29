import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center w-7/12 m-auto">
      <h1>Cart Items</h1>
      <button
        className="bg-black text-white rounded-xl hover:bg-slate-800"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
