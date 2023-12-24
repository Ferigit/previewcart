"use client";
//preview your cart page
//render this page client side ro have more speed
import React from "react";
import Link from "next/link";
import { useCartStore } from "src/store/cartstore";
import { IProject } from "@/src/types/project";
import { CartItem } from "@/src/components/business/CartItem";
import { Button } from "@/src/components/common";
import { toast } from "react-toastify";

function CartPage() {
  const { cart } = useCartStore();
  const handleCheckout = () => {
    toast("Checkout successfully!", {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
      position: "top-right",
    });
  };
  return (
    <section className="container mx-auto p-4">
      <Link href="/" className={" text-blue-600 "}>
        Go back
      </Link>

      <h1 className="w-full text-center text-2xl font-bold mb-4">
        Your Cart preview
      </h1>
      <div className="list-disc md:ml-6 gap-y-2 divide-y">
        {cart.map((cartItem: IProject) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <div className="flex justify-center items-center">
        <Button
          label="Checkout"
          className="	w-full md:w-28 h-12 my-4 mx-auto"
          onClick={handleCheckout}
        />
      </div>
    </section>
  );
}

export default CartPage;
