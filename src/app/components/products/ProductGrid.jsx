import ProductCard from "./ProductCard"

const products = [
  {
    id: 1,
    title: 'Product 1',
    desc: 'This is a description of product 1.',
    price: 100,
    image: '/review-img1.png', 
    
  },
  {
    id: 2,
    title: 'Product 2',
    desc: 'This is a description of product 2.',
    price: 200,
    image: '/review-img2.png', 
    
  },
  {
    id: 3,
    title: 'Product 3',
    desc: 'This is a description of product 3.',
    price: 150,
    image: '/review-img3.png', 
    
  },
  {
    id: 4,
    title: 'Product 4',
    desc: 'This is a description of product 4.',
    price: 250,
    image: '/review-img2.png', 
    
  },
  {
    id: 5,
    title: 'Product 5',
    desc: 'This is a description of product 5.',
    price: 300,
    image: '/home-img.png', 
    
  },
  {
    id: 6,
    title: 'Product 6',
    desc: 'This is a description of product 6.',
    price: 180,
    image: '/review-img1.png', 
    
  },
];
const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ProductGrid
