import Image from "next/image";
import {
  Star,
  ChevronDown
} from "lucide-react";


// Reusable Review Card Component
function ReviewCard({ name, date, title, content, imageSrc, avatarSrc }) {
    return (
      <div className="bg-[#fff] shadow-md rounded-xl p-4 max-w-sm space-y-3">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <Image
            src={avatarSrc}
            alt={name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-[15px] text-[#1e1e1e]">{name}</div>
            <div className="flex gap-1 text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
  
        {/* Date */}
        <div className="text-xs text-[#4b4b4b] mt-1">{date}</div>
  
        {/* Review Title and Content */}
        <div>
          <h3 className="text-lg font-semibold text-[#1e1e1e] mb-1">{title}</h3>
          <p className="text-sm text-[#4b4b4b]">
            {content}
          </p>
        </div>
  
        {/* Review Image */}
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg object-cover w-full h-52"
        />
      </div>
    );
  }

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff8f2]">
  
      {/* Main Content */}
      <main className="flex-grow px-6 md:px-12 py-8 md:py-12">
        <div className="max-w-6xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-serif text-[#000000] mb-2">Customer&apos;s Sweet Words</h1>
          <p className="text-[#4b4b4b]">Real stories from our happy customers</p>
        </div>

        {/* Rating Overview */}
        <div className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold text-[#000000]">4.9</span>
            <div className="flex flex-col">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#ffc107] text-[#ffc107]" />
                ))}
              </div>
              <span className="text-sm text-[#4b4b4b]">Based on 1044 Reviews</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="max-w-6xl mx-auto mb-8 flex flex-wrap gap-2">
          <button className="px-4 py-2 rounded-full text-[#000000] bg-white border border-[#e6e6e6] flex items-center gap-1">
            Most Recent <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 rounded-full text-white bg-[#e6a4b4]">All Reviews</button>
          <button className="px-4 py-2 rounded-full text-[#000000] bg-white border border-[#e6e6e6]">With photos</button>
          <button className="px-4 py-2 rounded-full text-[#000000] bg-white border border-[#e6e6e6]">5 Star</button>
          <button className="px-4 py-2 rounded-full text-[#000000] bg-white border border-[#e6e6e6]">4 Star</button>
          <button className="px-4 py-2 rounded-full text-[#000000] bg-white border border-[#e6e6e6]">3 Star</button>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <ReviewCard
            name="Neha Gupta"
            date="January 07, 2025"
            title="Perfect Birthday Celebration"
            content="The cake was absolutely stunning and delicious! Everyone at the party was impressed by the detailed decorations and amazing flavor, will definitely order again!"
            imageSrc="/review-img1.png"
            avatarSrc="/review-avatar.jpeg"
          />
          <ReviewCard
            name="Ritu Desai"
            date="December 07, 2024"
            title="Exceeded Expectations"
            content="Ordered for my daughter's graduation, the cake was not only beautiful but tasted amazing."
            imageSrc="/review-img2.png"
           avatarSrc="/review-avatar.jpeg"
          />
          <ReviewCard
            name="Pooja Verma"
            date="February 16, 2025"
            title="Wedding cake dreams"
            content="Our Wedding cake was absolutely perfect! The design was exactly what we wanted and the taste was divine. Thank you so much!"
            imageSrc="/review-img3.png"
            avatarSrc="/review-avatar.jpeg"
          />
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mb-16">
          <button className="px-6 py-3 bg-[#d9804e] text-white rounded-md hover:bg-opacity-90 transition-colors">
            Load More Reviews
          </button>
        </div>

        {/* Share Experience */}
        <div className="max-w-6xl mx-auto py-12 px-6 md:px-12 text-center rounded-lg bg-gradient-to-r from-[#e6a4b4] to-[#cf9f9f] mb-16">
          <h2 className="text-3xl font-serif text-[#000000] mb-3">Share your Experience</h2>
          <p className="text-[#1e1e1e] mb-6">Had a cake from us? We'd love to hear your thoughts!</p>
          <button className="px-6 py-3 bg-white text-[#000000] rounded-md hover:bg-opacity-90 transition-colors">
            Write a Review
          </button>
        </div>
      </main>
    </div>
  );
}
