import AboutHero from "../../Sections/About/AboutHero/AboutHero";
import AboutMission from "../../Sections/About/AboutMission/AboutMission";
import AboutStats from "../../Sections/About/AboutStats/AboutStats";
import Newsletter from "../../Sections/About/Newsletter/Newsletter";
import Team from "../../Sections/About/Team/Team";
import Vision from "../../Sections/About/Vision/Vision";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <Vision />
      <Team />
      <Newsletter />
    </>
  );
};

export default About;
