import { FaUserShield, FaClock, FaHospitalAlt, FaAward } from "react-icons/fa";
import whyImage from  "/src/assets/Images/hero-image.jpg";
export const whyChooseData = {
  subtitle: "Why Choose Us",
  title: "We Provide The Best Medical Care For Your Family",
  description:
    "Our mission is to deliver high-quality healthcare services with compassion, professionalism, and modern technology.",
  image: whyImage,
  features: [
    {
      icon: FaUserShield,
      title: "Qualified Doctors",
      description:
        "Our medical team consists of highly trained and certified professionals.",
    },
    {
      icon: FaClock,
      title: "24/7 Availability",
      description:
        "We are available anytime to provide emergency and routine care.",
    },
    {
      icon: FaHospitalAlt,
      title: "Modern Equipment",
      description:
        "Advanced medical technology ensures accurate diagnosis and treatment.",
    },
    {
      icon: FaAward,
      title: "Trusted Service",
      description:
        "Thousands of patients trust us for reliable healthcare solutions.",
    },
  ],
};
