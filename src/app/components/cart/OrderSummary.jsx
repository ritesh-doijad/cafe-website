"use client"
import { useSelector } from "react-redux";

export default function OrderSummary() {
  const { items } = useSelector((state) => state.cart);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 20;
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery fee</span>
          <span className="font-medium">{deliveryFee}</span>
        </div>
        <div className="pt-2">
          <input
            type="text"
            placeholder="Discount code"
            className="w-full px-4 py-2 border border-border rounded-md"
          />
        </div>
        <div className="pt-2 border-t border-border">
          <div className="flex justify-between text-lg">
            <span className="font-medium">Total</span>
            <span className="font-semibold text-accent">{total}</span>
          </div>
        </div>
        <button className="w-full bg-[#f8a04d] hover:bg-[#e7943c] text-white font-medium py-3 rounded-md transition">
          Proceed to Checkout
        </button>
        <div className="flex justify-center items-center text-sm text-muted">
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Secure checkout
          </span>
        </div>
      </div>
    </div>
  );
}
