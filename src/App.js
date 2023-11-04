import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import SMAHome from "./SMAHome";
import PHome from "./PHome";
import DHome from "./DHome";
import Map from "./Map";

const App=()=>{
    return(
        <>
        
            <Routes>
                <Route exact path="/" element={<Home />} />;
                <Route exact path="/about" element={<About />} />;
                <Route exact path="/service" element={<Service />} />;
                <Route exact path="/contact" element={<Contact />} />;
                <Route exact path="/login" element={<LoginPage />} />;
                <Route exact path="/smahome" element={<SMAHome />} />;
                <Route exact path="/dhome" element={<DHome />} />;
                <Route exact path="/phome" element={<PHome />} />;
                <Route exact path="/map" element={<Map />} />;
                <Route path="*" element={<Home />} />;
            </Routes>
            {/* <Footer /> */}
        </>
    );
}

export default App;