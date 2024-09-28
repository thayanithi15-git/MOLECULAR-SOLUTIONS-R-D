import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Home.css";
import SideNavbar from "../../assets/sidenavbar.svg";
import GenomicsMain from "../Genomics/Genomics";

export default function Home() {
  const [Home, setHome] = useState(false);
  const [Products, setProducts] = useState(true);
  const [Leadership, setLeadership] = useState(false);
  const [AdvisoryBoard, setAdvisoryBoard] = useState(false);
  const [Contactus, setContactus] = useState(false);

  const [AllProducts, setAllProducts] = useState(true);
  const [AIML, setAIML] = useState(false);
  const [Biology, setBiology] = useState(false);
  const [Chemistry, setChemistry] = useState(false);
  const [ComputationalChemistry, setComputationalChemistry] = useState(false);
  const [DMPK, setDMPK] = useState(false);
  const [ELN_LIMS, setELN_LIMS] = useState(false);
  const [VirtualReality, setVirtualReality] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarOpen, setTopbarOpen] = useState(false);

  const sidebarRef = useRef(null);
  const topbarRef = useRef(null);

  const handleHome = () => {
    setHome(true);
    setProducts(false);
    setLeadership(false);
    setAdvisoryBoard(false);
    setContactus(false);
  };

  const handleProducts = () => {
    setHome(false);
    setProducts(true);
    setLeadership(false);
    setAdvisoryBoard(false);
    setContactus(false);
  };

  const handleLeadership = () => {
    setHome(false);
    setProducts(false);
    setLeadership(true);
    setAdvisoryBoard(false);
    setContactus(false);
  };

  const handleAdvisoryBoard = () => {
    setHome(false);
    setProducts(false);
    setLeadership(false);
    setAdvisoryBoard(true);
    setContactus(false);
  };

  const handleContactus = () => {
    setHome(false);
    setProducts(false);
    setLeadership(false);
    setAdvisoryBoard(false);
    setContactus(true);
  };

  const handleAllProducts = () => {
    setAllProducts(true);
    setAIML(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
  };

  const handleAIML = () => {
    setAllProducts(false);
    setAIML(true);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
  };

  const handleBiology = () => {
    setAllProducts(false);
    setAIML(false);
    setBiology(true);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
  };

  const handleChemistry = () => {
    setAllProducts(false);
    setAIML(false);
    setBiology(false);
    setChemistry(true);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
  };

  const handleComputationalChemistry = () => {
    setAllProducts(false);
    setAIML(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(true);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
  };

  const handleDMPK = () => {
    setAllProducts(false);
    setAIML(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(true);
    setELN_LIMS(false);
    setVirtualReality(false);
  };

  const handleELN_LIMS = () => {
    setAllProducts(false);
    setAIML(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(true);
    setVirtualReality(false);
  };

  const handleVirtualReality = () => {
    setAllProducts(false);
    setAIML(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(true);
  };

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
          ref={topbarRef}>
          <div className={`titles ${topbarOpen ? "open" : ""}`}>
            <div
              style={{ cursor: "pointer" }}
              className={`home-title ${Home ? "open" : ""}`}
              onClick={handleHome}>
              <a href="https://molecularsolutions.co.in/">Home</a>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={`products-title ${Products ? "open" : ""}`}
              onClick={handleProducts}>
              <Link to="/allproducts">Products</Link>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={`leadership-title ${Leadership ? "open" : ""}`}
              onClick={handleLeadership}>
              <a href="https://molecularsolutions.co.in/leadership/">
                Leadership
              </a>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={`advisoryboard-title ${AdvisoryBoard ? "open" : ""}`}
              onClick={handleAdvisoryBoard}>
              <a href="https://molecularsolutions.co.in/advisory-board/">
                Advisory board
              </a>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className={`contactus-title ${Contactus ? "open" : ""}`}
            onClick={handleContactus}>
            <a href="https://molecularsolutions.co.in/contact-us/">
              Contact us
            </a>
          </div>
        </div>
        <div
          className={`menu-icon-header ${sidebarOpen ? "open" : ""}`}
          onClick={toggleTopbar}>
          <i className="fa fa-bars"></i>
        </div>
        {topbarOpen && <div className="overlay" onClick={closeSidebar}></div>}
      </div>

      {/* Sidebar and Content */}
      <div className="productspage-contents">
        <div
          className={`menu-icon ${sidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}>
          <img className="sidebar-img" src={SideNavbar} alt="sidebar" />
        </div>

        <div
          className={`left-navbars ${sidebarOpen ? "open" : ""}`}
          ref={sidebarRef}>
          <Link to="/products/allproducts" className="main-container" onClick={handleAllProducts}>
            <div className={`Genomics ${AllProducts ? "edit" : ""}`}>
              <div>All Products</div>
              <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </Link>
          <Link to="/products/aiml" className="main-container" onClick={handleAIML}>
            <div className={`Genomics ${AIML ? "edit" : ""}`}>
              <div>AI/ML</div>
              <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </Link>
          <Link
            to="/products/biology"
            className="main-container"
            onClick={handleBiology}>
              <div className={`Genomics ${Biology ? "edit" : ""}`}>
            <div >
              Biology R & D
            </div>
            <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </Link>
          <Link
            to="/products/chemistry"
            className="main-container"
            onClick={handleChemistry}>
              <div className={`Genomics ${Chemistry ? "edit" : ""}`}>
            <div >
              Chemistry R & D
            </div>
            <i className="fa-solid fa-caret-right rotate-right"></i>

            </div>
          </Link>
          <Link
            to="/products/computational-chemistry"
            className="main-container"
            onClick={handleComputationalChemistry}>
              <div className={`Genomics ${ComputationalChemistry ? "edit" : ""}`}>
            <div >
              Computational Chemistry
            </div>
            <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </Link>
          <Link to="/products/dmpk" className="main-container" onClick={handleDMPK}>
          <div className={`Genomics ${DMPK ? "edit" : ""}`}>
            <div >DMPK</div>
            <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </Link>
          <Link
            to="/products/eln-lims"
            className="main-container"
            onClick={handleELN_LIMS}>
              <div className={`Genomics ${ELN_LIMS ? "edit" : ""}`}>
            <div >
              ELN & LIMS
            </div>
            <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </Link>
          <Link
            to="/products/virtual-reality"
            className="main-container"
            onClick={handleVirtualReality}>
            <div className={`Genomics ${VirtualReality ? "edit" : ""}`}>
              <div>
              Virtual Reality
            </div>
            <i className="fa-solid fa-caret-right rotate-right"></i>
            </div>
          </Link>
        </div>

        <div className="right-contents">
          {AllProducts ? <GenomicsMain /> : <Outlet />}
        </div>
      </div>
    </div>
  );
}
