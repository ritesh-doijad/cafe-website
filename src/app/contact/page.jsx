import Image from 'next/image'
import { Clock, MapPin, MessageSquare, Phone } from 'lucide-react'


export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fef8f2]">
  
      <main>
        {/* Hero Section */}
        <section className="bg-[#fff8f2] py-40 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#333] mb-4">Let's Create Something Sweet Together</h1>
            <p className="text-lg text-[#666]">We're here to help bring your celebration to life</p>
          </div>
        </section>

        {/* Contact and Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[#333]">Get in Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#555]">Name</label>
                    <input id="name" placeholder="Your name" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f8a04d]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#555]">Email</label>
                    <input id="email" type="email" placeholder="Your email" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f8a04d]" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-[#555]">Phone</label>
                    <input id="phone" placeholder="Your phone number" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f8a04d]" />
                  </div>
                  <div>
                    <label htmlFor="occasion" className="block mb-2 text-sm font-medium text-[#555]">Occasion</label>
                    <select id="occasion" className="w-full h-12 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f8a04d]">
                      <option value="">Select an occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="wedding">Wedding</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#555]">Message</label>
                    <textarea id="message" placeholder="Tell us about your celebration..." className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f8a04d] min-h-[120px]"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#d9804e] hover:bg-[#f8a04d] text-white p-3 rounded-md transition duration-300">Send Message</button>
                </form>
              </div>

              {/* Quick Connect and Info */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-[#333]">Quick Connect</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#555]">
                      <MessageSquare size={18} />
                      <span>Chat on WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#555]">
                      <Phone size={18} />
                      <span>+91 79877-58405</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#555]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      <span>hello@lushlayers.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6 text-[#333]">Visit our Bakery</h2>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin size={18} className="mt-1 flex-shrink-0 text-[#555]" />
                    <div>
                      <p>123, Sweet Lane</p>
                      <p>Baker Street</p>
                      <p>Mumbai</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden h-[180px] bg-gray-200">
                    <Image 
                      src="/map-img.png" 
                      alt="Map location" 
                      width={400} 
                      height={180} 
                      className="w-full h-full hover:scale-105 transition-all transform-3d object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6 text-[#333]">Business Hours</h2>
                  <div className="space-y-2 text-[#555]">
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="mt-1 flex-shrink-0" />
                      <div>
                        <p>Monday-Saturday: 9:00 AM - 8:00 PM</p>
                        <p>Sunday: 10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#f6f6f6] py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-[#333]">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-xl mx-auto">
              <details className="group">
                <summary className="font-medium text-lg">How can I order a cake?</summary>
                <p className="pl-4 mt-2 text-sm text-gray-500">You can place your order online or visit our bakery to make a custom request. We accept all major payment methods.</p>
              </details>
              <details className="group">
                <summary className="font-medium text-lg">Do you deliver?</summary>
                <p className="pl-4 mt-2 text-sm text-gray-500">Yes, we offer delivery within the city limits. Please place your order 24 hours in advance for delivery.</p>
              </details>
              <details className="group">
                <summary className="font-medium text-lg">Do you offer custom cakes?</summary>
                <p className="pl-4 mt-2 text-sm text-gray-500">Absolutely! We specialize in custom cakes for all occasions. Just let us know your requirements and we’ll bring your ideas to life.</p>
              </details>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
