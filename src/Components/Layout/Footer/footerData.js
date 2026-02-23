import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const footerData = {
  brand: {
    name: "VitalCare",
    description:
      "Providing trusted healthcare services with modern technology and experienced professionals.",
  },
  quickLinks: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Doctors", link: "/doctors" },
    { name: "Blog", link: "/blog" },
  ],
  services: [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Emergency Care",
  ],
  contact: {
    address: "123 Medical Street, Health City",
    phone: "+1 234 567 890",
    email: "info@vitalcare.com",
  },
  socials: [
    { icon: FaFacebookF, link: "#" },
    { icon: FaTwitter, link: "#" },
    { icon: FaLinkedinIn, link: "#" },
    { icon: FaInstagram, link: "#" },
  ],
};
