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
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-white mt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
        {/* Logo Section */}
        <div className="flex flex-col items-start md:items-end">
          <img
            src="/images/logo/footer.png"
            alt="Logo"
            className="h-auto w-auto max-w-xs md:max-w-sm lg:max-w-md transition-transform duration-300 hover:-translate-y-2"
          />
        </div>

        {/* Quick Links & Categories */}
        <div className="space-y-8">
          {/* Quick Links */}
          <div>
            <button
              className="flex items-center justify-between w-full md:cursor-default md:pointer-events-none"
              onClick={() => toggleSection("quick")}
            >
              <h3 className="font-semibold text-gray-900">Quick Links</h3>
              <FaChevronDown
                className={`md:hidden transition-transform ${
                  openSection === "quick" ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`mt-2 space-y-2 text-gray-600 ${
                openSection === "quick" ? "block" : "hidden"
              } md:block`}
            >
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

          {/* Categories */}
          <div>
            <button
              className="flex items-center justify-between w-full md:cursor-default md:pointer-events-none"
              onClick={() => toggleSection("categories")}
            >
              <h3 className="font-semibold text-gray-900">Categories</h3>
              <FaChevronDown
                className={`md:hidden transition-transform ${
                  openSection === "categories" ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`mt-2 space-y-2 text-gray-600 ${
                openSection === "categories" ? "block" : "hidden"
              } md:block`}
            >
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

        {/* Contact Us */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
          <p className="text-gray-600">ReadKh@gmail.com</p>
          <p className="text-gray-600">0 123 456 789</p>
          <p className="text-gray-600">ReadKh.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
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
