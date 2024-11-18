import React from "react";
import Header from "./components/Common/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import IndustryPage from "./components/Industry_Page/IndustryPage";
import VisionPage from "./components/VisionPage/VisionPage";
import Aihub from "./components/aihub/Aihub";
import AIHubSection from "./components/aihub/Ai1hub";
import AI1HubSection from "./components/aihub/Ai2hub";
import Ourwork from "./components/ourWork/ourWork";
import Footer from "./components/Footer/Footer";
import SmartMetering from "./components/aihub/Smartmetering";

const App = () => {
  return (
    <>
    
      <Header />
      <Carousel />
      <IndustryPage />
      <Aihub />
      <AIHubSection/>
      <AI1HubSection/>
       <VisionPage />
      <Ourwork/>
      <SmartMetering/>
      <Footer />
    </>
  );
};

export default App;
