"use client"
import Image from "next/image"
import Link from "next/link"
import Header from "./components/Navbar"
import ProductCard from "./components/products/ProductCard"
import Footer from "./components/Footer"

export default function Home() {
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
      image: '/review-img1.png', 
      
    },
    {
      id: 3,
      title: 'Product 3',
      desc: 'This is a description of product 3.',
      price: 150,
      image: '/review-img1.png', 
      
    },
    {
      id: 4,
      title: 'Product 4',
      desc: 'This is a description of product 4.',
      price: 250,
      image: '/review-img1.png', 
      
    },
    {
      id: 5,
      title: 'Product 5',
      desc: 'This is a description of product 5.',
      price: 300,
      image: '/review-img1.png', 
      
    },
    {
      id: 6,
      title: 'Product 6',
      desc: 'This is a description of product 6.',
      price: 180,
      image: '/review-img1.png', 
      
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
            <Image
              src="/home-img.png"
              alt="Delicious cake"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-6 md:px-8">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Handcrafted Cakes for Your Special Moments
              </h1>
              <p className="text-white/90 text-lg mb-6">
                Plan your next celebration with SweetDelights and create memories that last a lifetime.
              </p>
              <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg">
                Explore Our Collection
              </button>
            </div>
          </div>
        </section>

        {/* Crafting Sweet Memories Section */}
        <section className="py-20 container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/home-page.png"
                alt="Baker crafting desserts"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-pink-800 mb-6 relative">
                Crafting Sweet Memories
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-pink-500"></span>
              </h2>
              <p className="text-gray-700 mb-5 text-lg">
                At SweetDelights, we believe that every celebration deserves a perfect cake. Our master bakers craft
                each dessert with love and attention to detail, ensuring your special moments are made even sweeter.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                Using only the finest ingredients, we create custom cakes that not only look stunning but taste
                incredible too. From weddings to birthdays, graduations to anniversaries, let us be part of your
                celebration.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center shadow-md">
                    <span className="text-pink-800 text-xl">★</span>
                  </div>
                  <p className="ml-4 text-gray-700">Premium quality ingredients</p>
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center shadow-md">
                    <span className="text-pink-800 text-xl">✓</span>
                  </div>
                  <p className="ml-4 text-gray-700">Customized to your preferences</p>
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center shadow-md">
                    <span className="text-pink-800 text-xl">♥</span>
                  </div>
                  <p className="ml-4 text-gray-700">Made with passion and care</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Celebrations Section */}
        <section className="py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-pink-800 mb-4">Trending Celebrations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our most popular cake designs for every special occasion
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="px-8 py-3 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-medium rounded-full transition-all duration-300">
                View All Collections
              </button>
            </div>
          </div>
        </section>

        {/* Perfect for every occasion */}
        <section className="py-20 container mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-800 mb-4">Perfect for Every Occasion</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whatever you're celebrating, we have the perfect sweet creation
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {[
    { title: "Wedding Celebrations", imageUrl: "/review-img1.png" },
    { title: "Graduation Moments", imageUrl: "/review-img2.png" },
    { title: "Custom Creations", imageUrl: "/review-img3.png" },
    { title: "Baby Shower", imageUrl:"/home-page.png" },
  ].map((item, index) => (
    <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-64">
        <Image
          src={item.imageUrl}
          alt={item.title}
          layout="fill"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-semibold text-2xl mb-2">{item.title}</h3>
      </div>
    </div>
  ))}
</div>

        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-pink-800 mb-4">What Our Customers Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Read about the experiences of our happy customers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The cake was absolutely perfect for our wedding day! Not only was it beautiful, but it tasted amazing too. Everyone was asking where we got it from!",
                  author: "Sarah & John",
                  event: "Wedding Cake",
                },
                {
                  quote:
                    "SweetDelights created the most incredible birthday cake for my daughter. The design was exactly what we wanted and the taste was out of this world!",
                  author: "Melissa T.",
                  event: "Birthday Cake",
                },
                {
                  quote:
                    "I've ordered multiple times from SweetDelights and they never disappoint. Their attention to detail and customer service is unmatched.",
                  author: "Raj Patel",
                  event: "Anniversary Celebration",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{item.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-800 font-bold">
                      {item.author.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">{item.author}</p>
                      <p className="text-sm text-gray-500">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Follow Our Journey */}
        <section className="py-20 container mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-800 mb-4">Follow Our Sweet Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get inspired by our latest creations on Instagram</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer">
      <Image
        src={`/review-img1.png`}
        alt={`Cake gallery image ${index + 1}`}
        fill
        className="object-cover"
      />
    </div>
  ))}
</div>

          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition-colors"
            >
              Follow us on Instagram
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-pink-100">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl font-bold text-pink-800 mb-4">Ready to Order Your Dream Cake?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Contact us today to discuss your requirements and let us create something special for your celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg">
                Order Now
              </button>
              <button className="px-8 py-3 bg-white hover:bg-gray-100 text-pink-600 font-medium rounded-full transition-all border border-pink-200 shadow-sm">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
