import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Doctors from "../Pages/Doctors/Doctors";
import Blog from "../Pages/Blog/Blog";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default Router;
