import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Custom Cake Design",
    description: "Create your dream cake with our expert bakers",
    image: "/review-img1.png",
  },
  {
    title: "Corporate Bulk Orders",
    description: "Special packages for corporate celebrations",
    image: "/review-img2.png",
  },
  {
    title: "Event Catering",
    description: "Sweet treats for your special events",
    image: "/review-img3.png",
  },
  {
    title: "Wedding Consultation",
    description: "Design your perfect wedding cake",
    image: "/review-img1.png",
  },
]

const ServicesSection = () => {
  return (
    <section className="py-16 mt-12 bg-[#fff8f2]">
      <h2 className="mb-12 text-3xl font-bold text-center text-[#1e1e1e]">Our Services</h2>
      <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            className="flex bg-white shadow-sm rounded-lg overflow-hidden transition hover:shadow-md"
            key={idx}
          >
            <div className="">
              <Image
                src={service.image}
                alt={service.title}
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="p-6 w-1/2 md:w-3/5 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[#1e1e1e]">{service.title}</h3>
              <p className="mt-2 text-sm text-[#4b4b4b]">{service.description}</p>
              <Link href="#" className="flex items-center mt-3 text-sm text-[#da8554] hover:underline">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
