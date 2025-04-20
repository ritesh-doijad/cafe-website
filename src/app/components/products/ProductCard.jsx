"use client";
import { addToCart } from "@/app/redux/cartSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user); 

  const handleAddToCart = (product) => {
    if (!user) {
      toast.error("Please login to add items to cart");
      router.push("/login");
      return
    }

    dispatch(addToCart(product));
    toast.success("Added to cart");
  };

  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
     
      <div className="relative">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        
        <span className="absolute top-2 left-2 bg-pink-200 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full">
          Birthday
        </span>
      </div>

     
      <div className="p-4">
        <h3 className="text-md font-semibold text-[#1e1e1e] mb-2">
          {product.title}
        </h3>

       
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-black">₹ {product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="px-4 py-2 text-sm font-medium bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-colors"
          >
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
