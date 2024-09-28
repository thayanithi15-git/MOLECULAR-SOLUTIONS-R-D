import React, { useState, useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./Home.css";
import SideNavbar from "../../assets/sidenavbar.svg";
import GenomicsMain from "../Genomics/Genomics";

export default function Home() {
  const location = useLocation();

  const [activePath, setActivePath] = useState(location.pathname);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarOpen, setTopbarOpen] = useState(false);

  const sidebarRef = useRef(null);
  const topbarRef = useRef(null);

  // Update activePath when location changes
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  // Close both sidebar and topbar
  const closeSidebar = () => {
    setSidebarOpen(false);
    setTopbarOpen(false);
  };

  // Toggle sidebar and close topbar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setTopbarOpen(false); // Close topbar
  };

  // Toggle topbar and close sidebar
  const toggleTopbar = () => {
    setTopbarOpen(!topbarOpen);
    setSidebarOpen(false); // Close sidebar
  };

  // Handle clicks outside the sidebar and topbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        topbarRef.current &&
        !topbarRef.current.contains(event.target) &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        closeSidebar(); // Close both sidebar and topbar
      }
    };

    // Add event listener if either sidebar or topbar is open
    if (sidebarOpen || topbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener when both sidebar and topbar are closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, topbarOpen]);

  return (
    <div className="home-page">
      {/* Header */}
      <div className="header">
        <div className="logo-container">
          <img
            src="https://molecularsolutions.co.in/products/assets/logo-BC31OmR4.svg"
            alt="logo"
            className="logo"
          />
        </div>
        <div
          className={`header-bars ${topbarOpen ? "open" : ""}`}
          ref={topbarRef}
        >
          <div className={`titles ${topbarOpen ? "open" : ""}`}>
            <div
              style={{ cursor: "pointer" }}
              className={`home-title ${
                activePath === "/" ? "open" : ""
              }`}
              onClick={() => setActivePath("/")}
            >
              <a href="https://molecularsolutions.co.in/">Home</a>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={`products-title ${
                activePath.startsWith("/products") ? "open" : ""
              }`}
              onClick={() => setActivePath("/products")}
            >
              <div>Products</div>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={`leadership-title ${
                activePath === "/leadership" ? "open" : ""
              }`}
              onClick={() => setActivePath("/leadership")}
            >
              <a href="https://molecularsolutions.co.in/leadership/">
                Leadership
              </a>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={`advisoryboard-title ${
                activePath === "/advisory-board" ? "open" : ""
              }`}
              onClick={() => setActivePath("/advisory-board")}
            >
              <a href="https://molecularsolutions.co.in/advisory-board/">
                Advisory board
              </a>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className={`contactus-title ${
              activePath === "/contact-us" ? "open" : ""
            }`}
            onClick={() => setActivePath("/contact-us")}
          >
            <a href="https://molecularsolutions.co.in/contact-us/">
              Contact us
            </a>
          </div>
        </div>
        <div
          className={`menu-icon-header ${topbarOpen ? "open" : ""}`}
          onClick={toggleTopbar}
        >
          <i className="fa fa-bars"></i>
        </div>
        {topbarOpen && <div className="overlay" onClick={closeSidebar}></div>}
      </div>

      {/* Sidebar and Content */}
      <div className="productspage-contents">
        <div
          className={`menu-icon ${sidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          <img className="sidebar-img" src={SideNavbar} alt="sidebar" />
        </div>

        <div
          className={`left-navbars ${sidebarOpen ? "open" : ""}`}
          ref={sidebarRef}
        >
          <NavLink
  to="/products"
  end
  className="main-container"
  onClick={() => setActivePath("/products")}
>
  <div className={`Genomics ${(activePath === "/products" || activePath === "/products/") ? "edit" : ""}`}>
    <div>All Products</div>
    <i className="fa-solid fa-caret-right rotate-right"></i>
  </div>
</NavLink>

          <NavLink
            to="/products/aiml"
            className="main-container"
            onClick={() => setActivePath("/products/aiml")}
          >
            <div className={`Genomics ${activePath === "/products/aiml" ? "edit" : ""}`}>
              <div>AI/ML</div>
              <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </NavLink>
          <NavLink
            to="/products/biology"
            className="main-container"
            onClick={() => setActivePath("/products/biology")}
          >
            <div className={`Genomics ${activePath === "/products/biology" ? "edit" : ""}`}>
              <div>Biology R &amp; D</div>
              <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </NavLink>
          <NavLink
            to="/products/chemistry"
            className="main-container"
            onClick={() => setActivePath("/products/chemistry")}
          >
            <div className={`Genomics ${activePath === "/products/chemistry" ? "edit" : ""}`}>
              <div>Chemistry R &amp; D</div>
              <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </NavLink>
          <NavLink
            to="/products/computational-chemistry"
            className="main-container"
            onClick={() => setActivePath("/products/computational-chemistry")}
          >
            <div
              className={`Genomics ${
                activePath === "/products/computational-chemistry" ? "edit" : ""
              }`}
            >
              <div>Computational Chemistry</div>
              <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </NavLink>
          <NavLink
            to="/products/dmpk"
            className="main-container"
            onClick={() => setActivePath("/products/dmpk")}
          >
            <div className={`Genomics ${activePath === "/products/dmpk" ? "edit" : ""}`}>
              <div>DMPK</div>
              <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </NavLink>
          <NavLink
            to="/products/eln-lims"
            className="main-container"
            onClick={() => setActivePath("/products/eln-lims")}
          >
            <div className={`Genomics ${activePath === "/products/eln-lims" ? "edit" : ""}`}>
              <div>ELN &amp; LIMS</div>
              <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </NavLink>
          <NavLink
            to="/products/virtual-reality"
            className="main-container"
            onClick={() => setActivePath("/products/virtual-reality")}
          >
            <div
              className={`Genomics ${
                activePath === "/products/virtual-reality" ? "edit" : ""
              }`}
            >
              <div>Virtual Reality</div>
              <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </NavLink>
        </div>

        <div className="right-contents">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
