import Image from "next/image";

export default function Recommendations() {
  const recommendations = [
    { title: "Red velvet delight", price: "₹680", imageSrc: "/placeholder.svg?height=192&width=300" },
    { title: "Lemon Raspberry cake", price: "₹500", imageSrc: "/placeholder.svg?height=192&width=300" },
    { title: "Caramel dream cake", price: "₹800", imageSrc: "/placeholder.svg?height=192&width=300" },
    { title: "Strawberry bliss", price: "₹680", imageSrc: "/placeholder.svg?height=192&width=300" },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {recommendations.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={300}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">{item.title}</h3>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-accent">{item.price}</span>
                <button className="bg-primary text-xs px-3 py-1 rounded-full">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
