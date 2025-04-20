"use client"
import { useDispatch } from 'react-redux';
import { Minus, Plus, Trash2 } from "lucide-react";

import Image from "next/image";
import { removeFromCart, updateQuantity } from '@/app/redux/cartSlice';

export default function CartItem({ id, imageSrc, title, description, price, quantity }) {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const handleIncrease = () => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };


  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex gap-4">
        <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-muted">{description}</p>
            </div>
            <div className="text-accent font-semibold">{price}</div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center border border-border rounded-md">
              <button
                className="px-3 py-1 text-muted"
                onClick={() => handleDecrease(quantity - 1)}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-3 py-1">{quantity}</span>
              <button
                className="px-3 py-1 text-muted"
                onClick={() => handleIncrease(quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              className="flex items-center text-muted text-sm"
              onClick={() => dispatch(removeFromCart(id))}
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
