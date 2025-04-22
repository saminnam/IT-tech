import React, { useEffect, startTransition } from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
// import Courses from "./Pages/Courses";
import Blog from "./Pages/Blog";
import HireFromUs from "./Pages/HireFromUs";
import Contact from "./Pages/Contact";
import Aluminis from "./Pages/Aluminis";
import BlogDetail from "./Pages/BlogDetail";
import ScrollToTopButton from "./Components/ScrollTopButton";
import WhatsAppIcon from "./Components/WhatsAppIcon";
// import ConnectWithMentor from "./Components/ConnectWithMentor";
import BecomeMentor from "./Pages/BecomeMentor";
import CareerServices from "./Pages/CareerServices";
import CourseDetail from "./Pages/CourseDetail";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      startTransition(() => {
        window.scrollTo(0, 0);
      });
    }, [pathname]);

    return null;
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <ScrollToTopButton />
      <WhatsAppIcon />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hirefromus" element={<HireFromUs />} />
        <Route path="/alumini" element={<Aluminis />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/becomementor" element={<BecomeMentor />} />
        <Route path="/careerservice" element={<CareerServices />} />
        <Route path="/courseDetail/:name" element={<CourseDetail />} />
      </Routes>
      {/* <ConnectWithMentor /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
