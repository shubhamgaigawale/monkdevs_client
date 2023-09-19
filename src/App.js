import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Footer } from "./Components/Footer";
import { About } from "./Components/About";
import { HeaderContainer } from "./Components/Header/HeaderContainer";
import { StayInTouch } from "./Components/Home/StayInTouch";
import { AboutUs } from "./Components/Home/AboutUs";
import { Services } from "./Components/Home/Services";
import { MobileAppDevelopment } from "./Components/Services/MobileAppDevelopment";
import { WebAppDevelopment } from "./Components/Services/WebAppDevelopment";
import { ZohoDevelopment } from "./Components/Services/ZohoDevelopment";

function App() {
  return (
    <div>
      <HeaderContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<StayInTouch />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/web-app-development" element={<WebAppDevelopment />} />
        <Route path="/zoho-development" element={<ZohoDevelopment />} />

      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
