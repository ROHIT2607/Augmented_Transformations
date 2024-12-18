import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import IndustryPage from "./components/Industry_Page/IndustryPage";
import VisionPage from "./components/VisionPage/VisionPage";
import Aihub from "./components/aihub/Aihub";
import AIHubSection from "./components/aihub/Ai1hub";
import AI1HubSection from "./components/aihub/Ai2hub";
import Ourwork from "./components/ourWork/ourWork";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer/Footer";
import SmartMetering from "./components/aihub/Smartmetering";
import CustomerPage from "./components/CutomerPage/CustomerPage";
import ContactUs from "./components/Contact/Contact";
import Carousel_two from "./components/Carousel_2/Carousel_two";
import CustomerLogos from "./components/customerlogo/customer";
import AboutUs from "./pages/aboutus/AboutUs";
import Products from "./pages/products/Products";
import CobineProd from "./pages/products/CobineProd";
import ServiceCom from "./pages/services/ServiceCom";
import Success from "./pages/sucessstories/Success";

const App = () => {
  return (
    <BrowserRouter>
          <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel_two />
              <IndustryPage />
              <Aihub />
              <AIHubSection />
              <AI1HubSection />
              <VisionPage />
              <Ourwork />
              <SmartMetering />
              <Projects />
              <CustomerLogos />
              <CustomerPage />
            </>
          }
        />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<CobineProd/>}/>
        <Route path="/services" element={<ServiceCom/>} />
        <Route path="/stories" element={<Success/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
