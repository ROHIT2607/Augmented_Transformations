import React from "react";
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

const App = () => {
  return (
    <>
      <Header />
      {/* <CarAnimate/> */}
      <IndustryPage />
      <Aihub />
      <AIHubSection/>
      <AI1HubSection/>
       <VisionPage />
      <Ourwork/>
      <SmartMetering/>
     <Projects />
      <Footer />

    </>
  );
};

export default App;
