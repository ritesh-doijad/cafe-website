"use client"
import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";
import Recommendations from "../components/cart/Recommendations";

export default function CartPage() {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen bg-[#FFF8F2] flex flex-col">
      <main className="flex-1 py-8 px-6 md:px-16">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">Your Cart</h1>
            <p className="text-muted">Items ready for your celebration</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {items.length > 0 ? (
                items.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    desc={item.description}
                    price={item.price}
                    imageSrc={item.image}
                    quantity={item.quantity}
                  />
                ))
              ) : (
                <p>Your cart is empty!</p>
              )}
            </div>
            <div className="md:col-span-1">
              <OrderSummary />
            </div>
          </div>
          <Recommendations />
        </div>
      </main>
    </div>
  );
}
