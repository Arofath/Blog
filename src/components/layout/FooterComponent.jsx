import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaTelegram,
} from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

export default function FooterComponents() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <footer className="bg-white">
       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Logo Section */}
        <div className="flex flex-col items-start md:items-end">
          <img
            src="/images/logo/footer.png"
            alt="Logo"
            className="h-auto w-auto max-w-xs md:max-w-sm lg:max-w-md transition-transform duration-300 hover:-translate-y-2"
          />
        </div>

        {/* Quick Links & Categories - Responsive for Mobile */}
        <div className="w-full lg:py-20 items-start">
          <div className="flex justify-between space-x-10 max-md:hidden">
            {/* First Column - Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/create-post" className="hover:text-[#A27B5C]">
                    Create Post
                  </a>
                </li>
              </ul>
            </div>

            {/* Second Column - Categories */}
            <div className="mr-4">
              <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Pop Culture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Personal Finance & Budgeting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Programming Languages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Cooking Skills & Techniques
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile version - Collapsible */}
          <div className="md:hidden">
            {/* Quick Links Collapsible */}
            <div
              onClick={() => toggle("quick")}
              className="cursor-pointer flex justify-between items-center py-2 border-b"
            >
              <h3 className="font-semibold text-gray-900">Quick Links</h3>
              <FaChevronDown
                className={`transition-transform ${
                  open === "quick" ? "rotate-180" : ""
                }`}
              />
            </div>
            {open === "quick" && (
              <ul className="space-y-2 text-gray-600 mt-2 pl-2">
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/create-post" className="hover:text-[#A27B5C]">
                    Create Post
                  </a>
                </li>
              </ul>
            )}

            {/* Categories Collapsible */}
            <div
              onClick={() => toggle("categories")}
              className="cursor-pointer flex justify-between items-center py-2 mt-4 border-b"
            >
              <h3 className="font-semibold text-gray-900">Categories</h3>
              <FaChevronDown
                className={`transition-transform ${
                  open === "categories" ? "rotate-180" : ""
                }`}
              />
            </div>
            {open === "categories" && (
              <ul className="space-y-2 text-gray-600 mt-2 pl-2">
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Pop Culture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Personal Finance & Budgeting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Programming Languages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#A27B5C]">
                    Cooking Skills & Techniques
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Contact Us */}
        <div className="lg:my-20 ml-0">
          <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
          <p className="text-gray-600">ReadKh@gmail.com</p>
          <p className="text-gray-600">0 123 456 789</p>
          <p className="text-gray-600">ReadKh.com</p>

          {/* Social Icons */}
          <div className="flex justify-start space-x-4 mt-4">
            {[
              FaFacebookSquare,
              FaInstagram,
              FaLinkedin,
              FaXTwitter,
              FaTelegram,
            ].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
