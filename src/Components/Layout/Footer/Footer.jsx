import { Link } from "react-router-dom";
import { footerData } from "./footerData";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            {footerData.brand.name}
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {footerData.brand.description}
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {footerData.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="hover:text-blue-500 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-3">
            {footerData.services.map((service, index) => (
              <li
                key={index}
                className="hover:text-blue-500 transition cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-blue-500" />
              <span>{footerData.contact.address}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500" />
              <span>{footerData.contact.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <span>{footerData.contact.email}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} {footerData.brand.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
