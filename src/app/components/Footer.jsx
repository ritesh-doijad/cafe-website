import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-white py-12 px-6 md:px-16 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Lush Layers</h3>
              <p className="text-sm text-muted mb-4">
                Crafting sweet memories with artisanal cakes for your special celebrations.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted hover:text-foreground transition-colors">
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted hover:text-foreground transition-colors">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted hover:text-foreground transition-colors">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted hover:text-foreground transition-colors">
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#">Support</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-muted mb-4">
                Subscribe to get the latest updates and offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-border rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted">
            © 2024 Lush Layers. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  