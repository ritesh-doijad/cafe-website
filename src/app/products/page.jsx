
import CategoryTabs from "../components/products/CategoryTabs";
import HeroSection from "../components/products/HeroSection";
import ProductGrid from "../components/products/ProductGrid";
import ServicesSection from "../components/products/ServicesSection";

export default function Home() {
    return (
      <main className="min-h-screen bg-[#fff8f2]">
        <HeroSection />
        <CategoryTabs />
        <ProductGrid />
        <ServicesSection />
      </main>
    )
  }