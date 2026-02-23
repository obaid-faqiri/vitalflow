import ContactCTA from "../../Sections/Services/ContactCTA/ContactCTA";
import ServicesGrid from "../../Sections/Services/ServicesGrid/ServicesGrid";
import ServicesHero from "../../Sections/Services/ServicesHero/ServicesHero";
import Testimonials from "../../Sections/Services/Testimonials/Testimonials";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <Testimonials />  
      <ContactCTA />
    </>
  );
};

export default Services;
