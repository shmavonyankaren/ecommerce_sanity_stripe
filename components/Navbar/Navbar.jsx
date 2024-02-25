import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "..";
import { useStateContext } from "@/context/StateContext";
import ecommerceLogo from "../../public/ecommerceLogo.png";
import Image from "next/image";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="logo-name-container">
        <Image src={ecommerceLogo} style={{ width: "50px", height: "37px" }} />

        <p className=" logo">
          <Link href="/">Scieone</Link>
        </p>
      </div>

      <button
        type="button"
        className="cart-icon"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
