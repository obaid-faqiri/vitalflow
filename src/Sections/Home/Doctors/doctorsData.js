import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import doctor1 from "/src/assets/Images/hero-image.jpg";
import doctor2 from "/src/assets/Images/hero-image.jpg";
import doctor3 from "/src/assets/Images/hero-image.jpg";
import doctor4 from "/src/assets/Images/hero-image.jpg";

export const doctorsData = {
  subtitle: "Our Doctors",
  title: "Meet Our Professional Medical Team",
  description:
    "Our experienced and compassionate doctors are dedicated to providing the highest quality healthcare services.",
  doctors: [
    {
      image: doctor1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      socials: [
        { icon: FaFacebookF, link: "#" },
        { icon: FaTwitter, link: "#" },
        { icon: FaLinkedinIn, link: "#" },
      ],
    },
    {
      image: doctor2,
      name: "Dr. Michael Smith",
      specialty: "Neurologist",
      socials: [
        { icon: FaFacebookF, link: "#" },
        { icon: FaTwitter, link: "#" },
        { icon: FaLinkedinIn, link: "#" },
      ],
    },
    {
      image: doctor3,
      name: "Dr. Emily Davis",
      specialty: "Pediatrician",
      socials: [
        { icon: FaFacebookF, link: "#" },
        { icon: FaTwitter, link: "#" },
        { icon: FaLinkedinIn, link: "#" },
      ],
    },
    {
      image: doctor4,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      socials: [
        { icon: FaFacebookF, link: "#" },
        { icon: FaTwitter, link: "#" },
        { icon: FaLinkedinIn, link: "#" },
      ],
    },
  ],
};
