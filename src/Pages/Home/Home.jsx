import Consultation from "../../Sections/Home/Consultation/Consultation";
import Doctors from "../../Sections/Home/Doctors/Doctors";
import FAQ from "../../Sections/Home/FAQ/FAQ";
import Hero from "../../Sections/Home/Hero/Hero";
import Services from "../../Sections/Home/Services/Services";
import Testimonials from "../../Sections/Home/Testimonials/Testimonials";
import WhyChooseUs from "../../Sections/Home/WhyChoose/WhyChoose";

const Home = () => {
  return (
    <>
      <Hero />
      <Consultation />
      <Services />
      <WhyChooseUs />
      <Doctors />
       <Testimonials />
       <FAQ />
    </>
  );
};

export default Home;
