import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [isValid, SetIsValid] = useState(true);
  const isOnline = useOnlineStatus();

  //redux state reading
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div id="header">
      <div
        id="navbar"
        className="flex justify-between items-center mx-10 border border-black rounded-md "
      >
        <div id="logo" className="">
          <img width={115} src={LOGO_URL} alt="Logo" className="rounded-lg" />
        </div>
        <div id="links">
          <ul className="flex mx-20 gap-10 text-xl font-serif">
            <li>Online Status :{isOnline ? "💚" : "❤️"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  SetIsValid(!isValid);
                }}
              >
                {isValid ? "LogIn" : "LogOut"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
