import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./StudentPages/About";
import ReportAPorblem from "./StudentPages/ReportAPorblem";
import StudentHome from "./StudentPages/StudentHome";
import StudentViewAllItems from "./StudentPages/StudentViewAllItems";
import MyRequest from "./StudentPages/MyRequest";
// import { useState } from "react";

export default function InstructorUI() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 912);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 912);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);
  return (
    <BrowserRouter>
      <div className="row ">
        <div
          className={`col-2 p-0 sticky-top ${isMobile ? "d-none" : "d-block"}`}
        >
          <div className="sticky-top">
            <Sidebar />
          </div>
        </div>
        <div className={`${isMobile ? "col" : "col-10"} p-0`}>
          <div class="row">
            <div class="col sticky-top p-0">
              <Navbar isMobile={isMobile} />
            </div>
            <div class="row">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<StudentHome />} />
                <Route path="/requests" element={<MyRequest />} />
                <Route path="/report" element={<ReportAPorblem />} />
                <Route path="/all-items" element={<StudentViewAllItems />} />
                {/* <Route path="/report" element={<ReportAPorblem/>} /> */}
              </Routes>
            </div>
            <div class="row mt-5">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
