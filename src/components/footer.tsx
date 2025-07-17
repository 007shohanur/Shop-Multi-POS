import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Your Company</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building amazing digital experiences with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/web-development" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/mobile-apps" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/ui-ux-design" className="text-gray-300 hover:text-white transition-colors text-sm">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  123 Business Street
                  <br />
                  Suite 100
                  <br />
                  City, State 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <Link href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +1 (234) 567-8900
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <Link
                  href="mailto:info@company.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  info@company.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="lg:flex-1">
              <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-300 text-sm">Get the latest updates and news delivered to your inbox.</p>
            </div>
            <div className="lg:flex-1 lg:max-w-md lg:ml-8">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</div>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}