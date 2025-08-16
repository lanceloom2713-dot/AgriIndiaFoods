import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#B3F58C]  py-10 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex  items-center space-x-2">
                <img className="max-h-20" src="images/logo.png" alt="" />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-6 text-gray-800">
              Leading rice exporter committed to quality, sustainability, and
              customer satisfaction.
            </p>

            {/* Social Media */}
   <div className="flex space-x-4">
</div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 text-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 font-semibold text-[20px] text-gray-700">{">"}</span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 font-semibold text-[20px] text-gray-700">{">"}</span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 font-semibold text-[20px] text-gray-700">{">"}</span>
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 font-semibold text-[20px] text-gray-700">{">"}</span>
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 font-semibold text-[20px] text-gray-700">{">"}</span>
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

         {/* Address */}
<div className="lg:col-span-1">
  <h4 className="text-lg font-bold mb-6 text-gray-800">Address</h4>
  <div className="space-y-4">
    {/* Phone */}
    <div className="flex items-start space-x-3">
      <Phone className="w-5 h-5 mt-0.5 text-gray-700" />
      <div className="text-sm text-gray-800 space-y-1">
        <a
          href="https://wa.me/919877002359"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 transition-colors"
        >
          Amit Thatai: +91 9877002359
        </a>
        <br />
        <a
          href="https://wa.me/919517909020"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 transition-colors"
        >
          Akshit Thatai: +91 9517909020
        </a>
      </div>
    </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 text-gray-700" />
                <div className="text-sm text-gray-800">
                  info@agriindiafoods.com
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-gray-700 flex-shrink-0" />
                <div className="text-sm text-gray-800 ">
                  Survey No. 305/4 & 306/4, Godown No.2, Village Mithrohar,
                  Taluka-anjar, Gandhidham, Kachchh, 370201
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600/30 mt-12 pt-8">
          <div className="text-sm text-gray-700">
            © Agri India Foods, All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
