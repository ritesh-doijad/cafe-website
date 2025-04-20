import Image from "next/image";
import Link from "next/link";


export default function Story() {
  return (
    <main className="min-h-screen text-gray-700 font-sans">
    
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 bg-[url('/story-img.png')] bg-cover bg-center" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#772f37] mb-2">
                Baked with Love,
              </h2>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#772f37]">
                Layered with Memories
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 items-center">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/review-img3.png"
                alt="Baking process"
                width={400}
                height={300}
                className="rounded-xl max-w-[350px] mx-auto md:mx-0 shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#333] mb-6">
                The Sweet Beginning
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-gray-600">
                <p>
                  Lush Layers started with a simple love for baking at home.
                  What began as small treats for friends and family quickly grew
                  into a dream to share homemade happiness with more people.
                </p>
                <p>
                  We believe that every celebration deserves something special —
                  a cake made with care, fresh ingredients, and a personal
                  touch. From birthdays to little everyday joys, our cakes are
                  baked to bring smiles.
                </p>
                <p>
                  At Lush Layers, we keep things simple, honest, and sweet —
                  just like home.
                </p>
                <p>Thank you for being part of our journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#fef6f6]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Homemade with Heart",
                description:
                  "Each cake is crafted with care, just like you would at home — no shortcuts, only love.",
              },
              {
                title: "Our Values",
                description:
                  "At Lush Layers, our values are baked into everything we do.",
              },
              {
                title: "Quality Ingredients",
                description:
                  "We use fresh, real ingredients you can trust. No unnecessary additives, just pure flavor.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl p-8 text-center border border-pink-100"
              >
                <h3 className="text-xl font-bold text-[#333] mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <p className="text-lg md:text-xl italic text-gray-700">
            "The Cake from Lush Layers made our wedding day even more special.
            The attention to detail and taste were absolutely perfect. Everyone
            couldn't stop talking about it!"
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#f9d2d2] to-[#fce7e7] text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-[#333] mb-6">
            Ready to Create Your Sweet Moments?
          </h2>
          <Link
            href="/order"
            className="inline-block bg-[#772f37] text-white font-medium px-8 py-3 rounded-full hover:bg-[#5b1e26] transition"
          >
            Order now
          </Link>
        </div>
      </section>

    </main>
  );
}
