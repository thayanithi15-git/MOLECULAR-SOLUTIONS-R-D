import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import Logo from "../../assets/logo.svg";
import GenomicsImg from "../../assets/genomics.svg";
import BiologyImg from "../../assets/biology.svg";
import ChemistryImg from "../../assets/chemistry.svg";
import AI from "../../assets/AI.png";
import VirtualRealityImg from "../../assets/VR.png";
import Biology from "../../assets/Microscope.png";
import OutcomesManagementImg from "../../assets/outcomesmanagement.svg";
import SubNavbars from "../../assets/subnavbars.svg";
import Productgenomics1 from "../../assets/productgenomics1.svg";
import Productgenomics2 from "../../assets/productgenomics2.svg";
import Productgenomics3 from "../../assets/productgenomics3.svg";
import Productgenomics4 from "../../assets/productgenomics4.svg";
import Productgenomics5 from "../../assets/productgenomics5.svg";
import Productgenomics6 from "../../assets/productgenomics6.svg";
import Productgenomics7 from "../../assets/productgenomics7.svg";
import Productgenomics8 from "../../assets/productgenomics8.svg";
import Productgenomics9 from "../../assets/productgenomics9.svg";
import Productgenomics10 from "../../assets/productgenomics10.svg";
import Productgenomics11 from "../../assets/productgenomics11.svg";
import SideNavbar from "../../assets/sidenavbar.svg";
import { TbMinusVertical } from "react-icons/tb";

import Genomics_Main from "../Genomics/Genomics";
import Biology_Main from "../Biology/Biology";
import Chemistry_Main from "../Chemistry/Chemistry";
import ComputationalChemistry_Main from "../ComputationalChemistry/ComputationalChemistry";
import DMPK_Main from "../DMPK/DMPK";
import ELN_LIMS_Main from "../ELN & LIMS/ELN_LIMS";
import VirtualReality_Main from "../VirtualReality/VirtualReality";
import AIML_Main from "../AIML/AIML";

import Commander_Main from "../Genomics/Commander";
import SarVision_Biologics_Main from "../Biology/SARVision-Biologics";
import ChemAIRS_Main from "../Chemistry/ChemAIRS";
import SarVision_SM_Main from "../Chemistry/SARVision-SM";
import Vortex_Main from "../Chemistry/Vortex";
import Medchem_Designer_Main from "../Chemistry/MedchemDesigner";
import AdmetPredictor_Main from "../ComputationalChemistry/AdmetPredictor";
import GastroPlus_Main from "../DMPK/GastroPlus";
import ILDsym_Main from "../DMPK/ILDsym";
import DotmaticsELN_Main from "../ELN & LIMS/DotmaticsEln";
import LabArchives_Main from "../ELN & LIMS/LabArchives";
import GeneCDMS_Main from "../ELN & LIMS/GeneCDMS";
import GeneCIS_Main from "../ELN & LIMS/GeneCIS";
import GeneATS_Main from "../ELN & LIMS/GeneATS";
import GeneBIS_Main from "../ELN & LIMS/GeneBIS";
import Nanome_Main from "../VirtualReality/Nanome";
import Mara_Main from "../AIML/Mara";
import Luma_Main from "../AIML/Luma";

import Dialog from "@mui/material/Dialog";

export default function Home() {
  const [HomePage, setHomePage] = useState(false);
  const [ProductsPage, setProductsPage] = useState(true);
  const [LeadershipPage, setLeadershipPage] = useState(false);
  const [AdvisoryboardPage, setAdvisoryboardPage] = useState(false);
  const [ContactPage, setContactPage] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarOpen, setTopbarOpen] = useState(false);

  const sidebarRef = useRef(null);
  const topbarRef = useRef(null);

  const [Sidebars, setSidebars] = useState(false);

  const [Genomics, setGenomics] = useState(true);
  const [Biology, setBiology] = useState(false);
  const [Chemistry, setChemistry] = useState(false);
  const [ComputationalChemistry, setComputationalChemistry] = useState(false);
  const [DMPK, setDMPK] = useState(false);
  const [ELN_LIMS, setELN_LIMS] = useState(false);
  const [VirtualReality, setVirtualReality] = useState(false);
  const [AIML, setAIML] = useState(false);

  const [Commander, setCommander] = useState(false);

  const [SarVisionBiologics, setSarVisionBiologics] = useState(false);

  const [ChemAIRS, setChemAIRS] = useState(false);
  const [SarVisionSM, setSarVisionSM] = useState(false);
  const [Vortex, setVortex] = useState(false);
  const [MedchemDesigner, setMedchemDesigner] = useState(false);

  const [ADMETpredictor, setADMETpredictor] = useState(false);

  const [GastroPlus, setGastroPlus] = useState(false);
  const [ILDsym, setILDsym] = useState(false);

  const [DotmaticsELN, setDotmaticsELN] = useState(false);
  const [LabArchives, setLabArchives] = useState(false);
  const [GeneCDMS, setGeneCDMS] = useState(false);
  const [GeneCIS, setGeneCIS] = useState(false);
  const [GeneATS, setGeneATS] = useState(false);
  const [GeneBIS, setGeneBIS] = useState(false);

  const [Nanome, setNanome] = useState(false);

  const [Mara, setMara] = useState(false);
  const [Luma, setLuma] = useState(false);

  const [Products, setProducts] = useState(false);
  const [Genomics_Products, setGenomics_Products] = useState(false);
  const [Biology_Products, setBiology_Products] = useState(false);
  const [Chemistry_Products, setChemistry_Products] = useState(false);
  const [ComputationalChemistry_Products, setComputationalChemistry_Products] =
    useState(false);
  const [DMPK_Products, setDMPK_Products] = useState(false);
  const [ELN_LIMS_Products, setELN_LIMS_Products] = useState(false);
  const [VirtualReality_Products, setVirtualReality_Products] = useState(false);
  const [AIML_Products, setAIML_Products] = useState(false);

  const handleHome = () => {
    // setHomePage(true);
    // setProductsPage(false);
    // setLeadershipPage(false);
    // setAdvisoryboardPage(false);
    // setContactPage(false);
    closeSidebar();
    window.location.href = "https://molecularsolutions.co.in/";
  };
  const handleProductsPage = () => {
    // setHomePage(false);
    // setProductsPage(true);
    // setLeadershipPage(false);
    // setAdvisoryboardPage(false);
    // setContactPage(false);
  };
  const handleLeadership = () => {
    // setHomePage(false);
    // setProductsPage(false);
    // setLeadershipPage(true);
    // setAdvisoryboardPage(false);
    // setContactPage(false);
    closeSidebar();
    window.location.href = "https://molecularsolutions.co.in/leadership/";
  };
  const handleAdvisoryboard = () => {
    // setHomePage(false);
    // setProductsPage(false);
    // setLeadershipPage(false);
    // setAdvisoryboardPage(true);
    // setContactPage(false);
    closeSidebar();
    window.location.href = "https://molecularsolutions.co.in/advisory-board/";
  };
  const handleContact = () => {
    // setHomePage(false);
    // setProductsPage(false);
    // setLeadershipPage(false);
    // setAdvisoryboardPage(false);
    // setContactPage(true);
    closeSidebar();
    window.location.href = "https://molecularsolutions.co.in/contact-us/";
  };

  const handleGenomics = () => {
    setGenomics((prevState) => !prevState);
    setSidebars(false);
    if (!Genomics) {
      setBiology(false);
      setChemistry(false);
      setComputationalChemistry(false);
      setDMPK(false);
      setELN_LIMS(false);
      setVirtualReality(false);
      setAIML(false);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };

  const handleBiology = () => {
    setBiology((prevState) => !prevState);
    setSidebars(false);
    if (!Biology) {
      setGenomics(false);
      setChemistry(false);
      setComputationalChemistry(false);
      setDMPK(false);
      setELN_LIMS(false);
      setVirtualReality(false);
      setAIML(false);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleChemistry = () => {
    setChemistry((prevState) => !prevState);
    setSidebars(false);
    if (!Chemistry) {
      setGenomics(false);
      setBiology(false);
      setComputationalChemistry(false);
      setDMPK(false);
      setELN_LIMS(false);
      setVirtualReality(false);
      setAIML(false);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleComputationalChemistry = () => {
    setComputationalChemistry((prevState) => !prevState);
    setSidebars(false);
    if (!ComputationalChemistry) {
      setGenomics(false);
      setBiology(false);
      setChemistry(false);
      setDMPK(false);
      setELN_LIMS(false);
      setVirtualReality(false);
      setAIML(false);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleDMPK = () => {
    setDMPK((prevState) => !prevState);
    setSidebars(false);
    if (!DMPK) {
      setGenomics(false);
      setBiology(false);
      setChemistry(false);
      setComputationalChemistry(false);
      setELN_LIMS(false);
      setVirtualReality(false);
      setAIML(false);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleELN_LIMS = () => {
    setELN_LIMS((prevState) => !prevState);
    setSidebars(false);
    if (!ELN_LIMS) {
      setGenomics(false);
      setBiology(false);
      setChemistry(false);
      setComputationalChemistry(false);
      setDMPK(false);
      setVirtualReality(false);
      setAIML(false);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleVirtualReality = () => {
    setVirtualReality((prevState) => !prevState);
    setSidebars(false);
    if (!VirtualReality) {
      setGenomics(false);
      setBiology(false);
      setChemistry(false);
      setComputationalChemistry(false);
      setDMPK(false);
      setELN_LIMS(false);
      setAIML(false);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleAIML = () => {
    setAIML((prevState) => !prevState);
    setSidebars(false);
    if (!AIML) {
      setGenomics(false);
      setBiology(false);
      setChemistry(false);
      setComputationalChemistry(false);
      setDMPK(false);
      setELN_LIMS(false);
      setVirtualReality(false);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };

  const handleCommander = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
    setAIML(false);
    setCommander(true);
    if (!Commander) {
      setGenomics(true);
      setSidebars(true);

      setCommander(true);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleSarVisionBiologics = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
    setAIML(false);
    setSarVisionBiologics(true);
    if (!SarVisionBiologics) {
      setBiology(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(true);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleChemAIRS = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
    setAIML(false);
    setChemAIRS(true);
    if (!ChemAIRS) {
      setChemistry(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(true);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleSarVisionSM = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
    setAIML(false);
    setSarVisionSM(true);
    if (!SarVisionSM) {
      setChemistry(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(true);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleVortex = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
    setAIML(false);
    setVortex(true);
    if (!Vortex) {
      setChemistry(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(true);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleMedchemDesigner = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
    setAIML(false);
    setMedchemDesigner(true);
    if (!MedchemDesigner) {
      setChemistry(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(true);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleADMETpredictor = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
    setAIML(false);
    setADMETpredictor(true);
    if (!ADMETpredictor) {
      setComputationalChemistry(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(true);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleGastroPlus = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setELN_LIMS(false);
    setVirtualReality(false);
    setAIML(false);
    setGastroPlus(true);
    if (!GastroPlus) {
      setDMPK(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(true);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleILDsym = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setELN_LIMS(false);
    setVirtualReality(false);
    setAIML(false);
    setILDsym(true);
    if (!ILDsym) {
      setDMPK(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(true);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleDotmaticsELN = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setVirtualReality(false);
    setAIML(false);
    setDotmaticsELN(true);
    if (!DotmaticsELN) {
      setELN_LIMS(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(true);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleLabArchives = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setVirtualReality(false);
    setAIML(false);
    setLabArchives(true);
    if (!LabArchives) {
      setELN_LIMS(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(true);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleGeneCDMS = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setVirtualReality(false);
    setAIML(false);
    setGeneCDMS(true);
    if (!GeneCDMS) {
      setELN_LIMS(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(true);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleGeneCIS = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setVirtualReality(false);
    setAIML(false);
    setGeneCIS(true);
    if (!GeneCIS) {
      setELN_LIMS(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(true);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleGeneATS = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setVirtualReality(false);
    setAIML(false);
    setGeneATS(true);
    if (!GeneATS) {
      setELN_LIMS(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(true);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleGeneBIS = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setVirtualReality(false);
    setAIML(false);
    setGeneBIS(true);
    if (!GeneBIS) {
      setELN_LIMS(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(true);
      setNanome(false);
      setMara(false);
      setLuma(false);
    }
  };
  const handleNanome = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setAIML(false);
    setNanome(true);
    if (!Nanome) {
      setVirtualReality(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(true);
      setMara(false);
      setLuma(false);
    }
  };
  const handleMara = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
    setMara(true);
    if (!Mara) {
      setAIML(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(true);
      setLuma(false);
    }
  };
  const handleLuma = () => {
    setHomePage(false);
    setProductsPage(true);
    setLeadershipPage(false);
    setAdvisoryboardPage(false);
    setContactPage(false);

    setGenomics(false);
    setBiology(false);
    setChemistry(false);
    setComputationalChemistry(false);
    setDMPK(false);
    setELN_LIMS(false);
    setVirtualReality(false);
    setLuma(true);
    if (!Luma) {
      setAIML(true);
      setSidebars(true);

      setCommander(false);
      setSarVisionBiologics(false);
      setChemAIRS(false);
      setSarVisionSM(false);
      setVortex(false);
      setMedchemDesigner(false);
      setADMETpredictor(false);
      setGastroPlus(false);
      setILDsym(false);
      setDotmaticsELN(false);
      setLabArchives(false);
      setGeneCDMS(false);
      setGeneCIS(false);
      setGeneATS(false);
      setGeneBIS(false);
      setNanome(false);
      setMara(false);
      setLuma(true);
    }
  };

  const handleProducts = () => {
    setProducts(true);
    setGenomics_Products(false);
    setBiology_Products(false);
    setChemistry_Products(false);
    setComputationalChemistry_Products(false);
    setDMPK_Products(false);
    setELN_LIMS_Products(false);
    setVirtualReality_Products(false);
    setAIML_Products(false);
  };

  const handleGenomics_Product = () => {
    setGenomics_Products(true);
    setBiology_Products(false);
    setChemistry_Products(false);
    setComputationalChemistry_Products(false);
    setDMPK_Products(false);
    setELN_LIMS_Products(false);
    setVirtualReality_Products(false);
    setAIML_Products(false);
  };

  const handleBiology_Product = () => {
    setGenomics_Products(false);
    setBiology_Products(true);
    setChemistry_Products(false);
    setComputationalChemistry_Products(false);
    setDMPK_Products(false);
    setELN_LIMS_Products(false);
    setVirtualReality_Products(false);
    setAIML_Products(false);
  };

  const handleChemistry_Product = () => {
    setGenomics_Products(false);
    setBiology_Products(false);
    setChemistry_Products(true);
    setComputationalChemistry_Products(false);
    setDMPK_Products(false);
    setELN_LIMS_Products(false);
    setVirtualReality_Products(false);
    setAIML_Products(false);
  };

  const handleComputationalChemistry_Product = () => {
    setGenomics_Products(false);
    setBiology_Products(false);
    setChemistry_Products(false);
    setComputationalChemistry_Products(true);
    setDMPK_Products(false);
    setELN_LIMS_Products(false);
    setVirtualReality_Products(false);
    setAIML_Products(false);
  };

  const handleDMPK_Product = () => {
    setGenomics_Products(false);
    setBiology_Products(false);
    setChemistry_Products(false);
    setComputationalChemistry_Products(false);
    setDMPK_Products(true);
    setELN_LIMS_Products(false);
    setVirtualReality_Products(false);
    setAIML_Products(false);
  };

  const handleELN_LIMS_Product = () => {
    setGenomics_Products(false);
    setBiology_Products(false);
    setChemistry_Products(false);
    setComputationalChemistry_Products(false);
    setDMPK_Products(false);
    setELN_LIMS_Products(true);
    setVirtualReality_Products(false);
    setAIML_Products(false);
  };

  const handleVirtualReality_Product = () => {
    setGenomics_Products(false);
    setBiology_Products(false);
    setChemistry_Products(false);
    setComputationalChemistry_Products(false);
    setDMPK_Products(false);
    setELN_LIMS_Products(false);
    setVirtualReality_Products(true);
    setAIML_Products(false);
  };

  const handleAIML_Product = () => {
    setGenomics_Products(false);
    setBiology_Products(false);
    setChemistry_Products(false);
    setComputationalChemistry_Products(false);
    setDMPK_Products(false);
    setELN_LIMS_Products(false);
    setVirtualReality_Products(false);
    setAIML_Products(true);
  };

  const items = [
    {
      image: Productgenomics1,
      title: "Commander",
      content: "NGS data analysis",
    },
    {
      image: Productgenomics2,
      title: "SARvision|Biologics",
      content:
        "Biologics SAR data analysis for Proteins, Peptides, Antibody and PROTACS",
    },
    {
      image: Productgenomics3,
      title: "ChemAIRS",
      content:
        "Most advanced AI/ML/ Knowledge & Data driven retrosynthetic software",
    },
    {
      image: Productgenomics4,
      title: "SARvision|SM",
      content: "A Comprehensive Tool for Chemical Data Analysis",
    },
    {
      image: Productgenomics5,
      title: "Vortex",
      content:
        "Intuitive Data Visualization & Analysis for Chemistry Decision Support",
    },
    {
      image: Productgenomics6,
      title: "Medchem Designer",
      content: "Chemical Structure Drawing and Property Prediction tool",
    },
    {
      image: Productgenomics7,
      title: "ADMET Predictor",
      content: "Machine learning platform for ADMET modeling",
    },
    {
      image: Productgenomics8,
      title: "Gastro Plus",
      content: "Formulation optimization and dosage prediction",
    },
    {
      image: Productgenomics8,
      title: "ILDsym",
      content: "Software for modeling interstitial lung disease (ILD)",
    },
    {
      image: Productgenomics8,
      title: "Dotmatics ELN",
      content: "Simplify Scientific Discovery with a Powerful Online ELN",
    },
    {
      image: Productgenomics9,
      title: "LabArchives",
      content: "The Easy-to-use Electronic Lab Notebook",
    },
    {
      image: Productgenomics10,
      title: "GeneCDMS",
      content: "Compound & Data Management System",
    },
    {
      image: Productgenomics11,
      title: "GeneCIS",
      content: "Chemical Inventory System",
    },
    {
      image: Productgenomics8,
      title: "GeneATS",
      content: "Analytical Ticketing System",
    },
    {
      image: Productgenomics8,
      title: "GeneBIS",
      content: "Chemical and Biology material Inventory Management system",
    },
    {
      image: Productgenomics8,
      title: "Nanome",
      content: "Molecular Design and Mixed Virtual Reality tool",
    },
    {
      image: Productgenomics8,
      title: "MARA",
      content: "Your Scientific Discovery Co-pilot",
    },
    {
      image: Productgenomics8,
      title: "LUMA",
      content: "The AI-native Multimodal Scientific Intelligence Platform",
    },
  ];

  const getFilteredItems = () => {
    if (Genomics_Products) return items.slice(0, 1);
    if (Biology_Products) return items.slice(1, 2);
    if (Chemistry_Products) return items.slice(2, 6);
    if (ComputationalChemistry_Products) return items.slice(6, 7);
    if (DMPK_Products) return items.slice(7, 9);
    if (ELN_LIMS_Products) return items.slice(9, 15);
    if (VirtualReality_Products) return items.slice(15, 16);
    if (AIML_Products) return items.slice(16, 18);
    return items.slice(0, 18);
  };

  const handleItemClick = (item, index) => {
    setProducts(false);
    console.log("ITEM NO : ", index);
    if (index === 0) {
      handleCommander();
    } else if (index === 1) {
      handleSarVisionBiologics();
    } else if (index === 2) {
      handleChemAIRS();
    } else if (index === 3) {
      handleSarVisionSM();
    } else if (index === 4) {
      handleVortex();
    } else if (index === 5) {
      handleMedchemDesigner();
    } else if (index === 6) {
      handleADMETpredictor();
    } else if (index === 7) {
      handleGastroPlus();
    } else if (index === 8) {
      handleILDsym();
    } else if (index === 9) {
      handleDotmaticsELN();
    } else if (index === 10) {
      handleLabArchives();
    } else if (index === 11) {
      handleGeneCDMS();
    } else if (index === 12) {
      handleGeneCIS();
    } else if (index === 13) {
      handleGeneATS();
    } else if (index === 14) {
      handleGeneBIS();
    } else if (index === 15) {
      handleNanome();
    } else if (index === 16) {
      handleMara();
    } else if (index === 17) {
      handleLuma();
    }
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
    document.addEventListener('mousedown', handleClickOutside);
  }

  // Cleanup event listener when both sidebar and topbar are closed
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [sidebarOpen, topbarOpen]);
  return (
    <div className="home-page">
      <div className="header">
        <div className="logo-container">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div
          className={`header-bars ${topbarOpen ? "open" : ""}`}
          ref={topbarRef}>
          <div className={`titles ${topbarOpen ? "open" : ""}`}>
            <div
              style={{ cursor: "pointer" }}
              className={`home-title ${HomePage ? "open" : ""}`}
              onClick={handleHome}>
              Home
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={`products-title ${ProductsPage ? "open" : ""}`}
              onClick={handleProductsPage}>
              <p>Products</p><i class="fa-solid fa-caret-down" style={{fontSize: "0.8rem",marginLeft: "-10%",marginTop: "5%"}}></i>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={`leadership-title ${LeadershipPage ? "open" : ""}`}
              onClick={handleLeadership}>
              Leadership
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={`advisoryboard-title ${
                AdvisoryboardPage ? "open" : ""
              }`}
              onClick={handleAdvisoryboard}>
              Advisory board
            </div>
          </div>
          <div
            className={`contactus-title ${ContactPage ? "open" : ""}`}
            onClick={handleContact}>
            Contact us
          </div>
        </div>
        <div
          className={`menu-icon-header ${sidebarOpen ? "open" : ""}`}
          onClick={toggleTopbar}>
          <i className="fa fa-bars"></i>
        </div>
        {topbarOpen && <div className="overlay" onClick={closeSidebar}></div>}
      </div>
      {/* {HomePage && <div className="homepage-contents"> 
        <a href="https://molecularsolutions.co.in/" target="_blank" rel="noopener noreferrer">
        Home
    </a> */}
    {/* </div>} */}
      {ProductsPage && (
        <div className="productspage-contents">
          <div
            className={`menu-icon ${sidebarOpen ? "open" : ""}`}
            onClick={toggleSidebar}>
            <img
            className="sidebar-img"
              src={SideNavbar}
              alt="sidebar"
            />
            
            
          </div>
          <div
            className={`left-navbars ${sidebarOpen ? "open" : ""}`}
            ref={sidebarRef}>
            <div className="main-container">
              <div
                style={{ cursor: "pointer", display: "flex", gap: "0.4rem" }}
                onClick={handleGenomics}
                className={`Genomics ${Genomics ? "edit" : ""}`}>
                {/* <img src={GenomicsImg} alt="Genomics img" /> */}
                <div style={{ marginTop: "1.5%", width: "65%" }}>
                  Genomics R & D
                </div>
                <i
                  className={`fa-solid fa-caret-right ${
                    Genomics ? "rotate-down" : "rotate-right"
                  }`}></i>
              </div>
              {Genomics && (
                <div style={{ marginLeft: "10%", marginTop: "5%" }}>
                  <div
                    className={`subproducts-container ${
                      Commander ? "edit" : ""
                    }`}
                    onClick={handleCommander}>
                    <img src={SubNavbars} alt="subnav" />
                    <div style={{ marginLeft: "2%" }}>Commander</div>
                  </div>
                  {sidebarOpen && (
                    <div className="overlay" onClick={closeSidebar}></div>
                  )}
                </div>
              )}
            </div>
            <div className="main-container">
              <div
                style={{ cursor: "pointer", display: "flex", gap: "0.4rem" }}
                onClick={handleBiology}
                className={`Genomics ${Biology ? "edit" : ""}`}>
                {/* <img src={BiologyImg} alt="Biology img" /> */}
                <div style={{ marginTop: "1.5%", width: "65%" }}>
                  Biology R & D
                </div>
                <i
                  className={`fa-solid fa-caret-right ${
                    Biology ? "rotate-down" : "rotate-right"
                  }`}></i>
              </div>
              {Biology && (
                <div style={{ marginLeft: "10%", marginTop: "5%" }}>
                  <div
                    className={`subproducts-container ${
                      SarVisionBiologics ? "edit" : ""
                    }`}
                    onClick={handleSarVisionBiologics}>
                    <img src={SubNavbars} alt="subnav" />
                    <div style={{ marginLeft: "2%" }}>SARvision|Biologics</div>
                  </div>
                </div>
              )}
            </div>
            <div className="main-container">
              <div
                style={{ cursor: "pointer", display: "flex", gap: "0.4rem" }}
                onClick={handleChemistry}
                className={`Genomics ${Chemistry ? "edit" : ""}`}>
                {/* <img src={ChemistryImg} alt="Chemistry img" /> */}
                <div style={{ marginTop: "1.5%", width: "65%" }}>
                  Chemistry R & D
                </div>
                <i
                  className={`fa-solid fa-caret-right ${
                    Chemistry ? "rotate-down" : "rotate-right"
                  }`}></i>
              </div>
              {Chemistry && (
                <div style={{ marginLeft: "10%", marginTop: "5%" }}>
                  <div
                    className={`subproducts-container ${
                      ChemAIRS ? "edit" : ""
                    }`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div style={{ marginLeft: "2%" }} onClick={handleChemAIRS}>
                      ChemAIRS
                    </div>
                  </div>
                  <div
                    className={`subproducts-container ${
                      SarVisionSM ? "edit" : ""
                    }`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div
                      style={{ marginLeft: "2%" }}
                      onClick={handleSarVisionSM}>
                      SARvision|SM
                    </div>
                  </div>
                  <div
                    className={`subproducts-container ${Vortex ? "edit" : ""}`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div style={{ marginLeft: "2%" }} onClick={handleVortex}>
                      Vortex
                    </div>
                  </div>
                  <div
                    className={`subproducts-container ${
                      MedchemDesigner ? "edit" : ""
                    }`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div
                      style={{ marginLeft: "2%" }}
                      onClick={handleMedchemDesigner}>
                      Medchem Designer
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="main-container">
              <div
                style={{ cursor: "pointer", display: "flex", gap: "0.4rem" }}
                onClick={handleComputationalChemistry}
                className={`Genomics ${ComputationalChemistry ? "edit" : ""}`}>
                {/* <img src={ChemistryImg} alt="Chemistry img" /> */}
                <div style={{ marginTop: "1.5%", width: "65%" }}>
                  Computational Chemistry
                </div>
                <i
                  className={`fa-solid fa-caret-right ${
                    ComputationalChemistry ? "rotate-down" : "rotate-right"
                  }`}></i>
              </div>
              {ComputationalChemistry && (
                <div style={{ marginLeft: "10%", marginTop: "5%" }}>
                  <div
                    className={`subproducts-container ${
                      ADMETpredictor ? "edit" : ""
                    }`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div
                      style={{ marginLeft: "2%" }}
                      onClick={handleADMETpredictor}>
                      ADMETpredictor
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="main-container">
              <div
                style={{ cursor: "pointer", display: "flex", gap: "0.4rem" }}
                onClick={handleDMPK}
                className={`Genomics ${DMPK ? "edit" : ""}`}>
                {/* <img src={ChemistryImg} alt="Chemistry img" /> */}
                <div style={{ marginTop: "1.5%", width: "65%" }}>DMPK</div>
                <i
                  className={`fa-solid fa-caret-right ${
                    DMPK ? "rotate-down" : "rotate-right"
                  }`}></i>
              </div>
              {DMPK && (
                <div style={{ marginLeft: "10%", marginTop: "5%" }}>
                  <div
                    className={`subproducts-container ${
                      GastroPlus ? "edit" : ""
                    }`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div
                      style={{ marginLeft: "2%" }}
                      onClick={handleGastroPlus}>
                      Gastro Plus
                    </div>
                  </div>
                  <div
                    className={`subproducts-container ${ILDsym ? "edit" : ""}`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div style={{ marginLeft: "2%" }} onClick={handleILDsym}>
                      ILDsym
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="main-container">
              <div
                style={{ cursor: "pointer", display: "flex", gap: "0.4rem" }}
                onClick={handleELN_LIMS}
                className={`Genomics ${ELN_LIMS ? "edit" : ""}`}>
                {/* <img src={ChemistryImg} alt="Chemistry img" /> */}
                <div style={{ marginTop: "1.5%", width: "65%" }}>
                  ELN & LIMS
                </div>
                <i
                  className={`fa-solid fa-caret-right ${
                    ELN_LIMS ? "rotate-down" : "rotate-right"
                  }`}></i>
              </div>
              {ELN_LIMS && (
                <div style={{ marginLeft: "10%", marginTop: "5%" }}>
                  <div
                    className={`subproducts-container ${
                      DotmaticsELN ? "edit" : ""
                    }`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div
                      style={{ marginLeft: "2%" }}
                      onClick={handleDotmaticsELN}>
                      DotmaticsELN
                    </div>
                  </div>
                  <div
                    className={`subproducts-container ${
                      LabArchives ? "edit" : ""
                    }`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div
                      style={{ marginLeft: "2%" }}
                      onClick={handleLabArchives}>
                      Lab Archives
                    </div>
                  </div>
                  <div
                    className={`subproducts-container ${
                      GeneCDMS ? "edit" : ""
                    }`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div style={{ marginLeft: "2%" }} onClick={handleGeneCDMS}>
                      GeneCDMS
                    </div>
                  </div>
                  <div
                    className={`subproducts-container ${
                      GeneCIS ? "edit" : ""
                    }`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div style={{ marginLeft: "2%" }} onClick={handleGeneCIS}>
                      GeneCIS
                    </div>
                  </div>
                  <div
                    className={`subproducts-container ${
                      GeneATS ? "edit" : ""
                    }`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div style={{ marginLeft: "2%" }} onClick={handleGeneATS}>
                      GeneATS
                    </div>
                  </div>
                  <div
                    className={`subproducts-container ${
                      GeneBIS ? "edit" : ""
                    }`}>
                    <img src={SubNavbars} alt="subnav" />
                    <div style={{ marginLeft: "2%" }} onClick={handleGeneBIS}>
                      GeneBIS
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="main-container">
              <div
                style={{ cursor: "pointer", display: "flex", gap: "0.4rem" }}
                onClick={handleVirtualReality}
                className={`Genomics ${VirtualReality ? "edit" : ""}`}>
                {/* <img src={VirtualRealityImg} alt="VirtualReality img" width={40} height={40}/> */}
                <div style={{ marginTop: "1.5%", width: "65%" }}>
                  Virtual Reality
                </div>
                <i
                  className={`fa-solid fa-caret-right ${
                    VirtualReality ? "rotate-down" : "rotate-right"
                  }`}></i>
              </div>
              {VirtualReality && (
                <div style={{ marginLeft: "10%", marginTop: "5%" }}>
                  <div
                    className={`subproducts-container ${Nanome ? "edit" : ""}`}
                    onClick={handleNanome}>
                    <img src={SubNavbars} alt="subnav" />
                    <div style={{ marginLeft: "2%" }}>Nanome</div>
                  </div>
                </div>
              )}
            </div>
            <div className="main-container">
              <div
                style={{ cursor: "pointer", display: "flex", gap: "0.4rem" }}
                onClick={handleAIML}
                className={`Genomics ${AIML ? "edit" : ""}`}>
                {/* <img src={AI} alt="VirtualReality img" width={28} height={28}/> */}
                <div style={{ marginTop: "1.5%", width: "65%" }}>AI/ML</div>
                <i
                  className={`fa-solid fa-caret-right ${
                    AIML ? "rotate-down" : "rotate-right"
                  }`}></i>
              </div>
              {AIML && (
                <div style={{ marginLeft: "10%", marginTop: "5%" }}>
                  <div
                    className={`subproducts-container ${Mara ? "edit" : ""}`}
                    onClick={handleMara}>
                    <img src={SubNavbars} alt="subnav" />
                    <div style={{ marginLeft: "2%" }}>MARA</div>
                  </div>
                  <div
                    className={`subproducts-container ${Luma ? "edit" : ""}`}
                    onClick={handleLuma}>
                    <img src={SubNavbars} alt="subnav" />
                    <div style={{ marginLeft: "2%" }}>LUMA</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="right-contents">
            {Genomics && !Sidebars ? (
              <Genomics_Main handleCommander={handleCommander} />
            ) : Biology && !Sidebars ? (
              <Biology_Main
                handleSarVisionBiologics={handleSarVisionBiologics}
              />
            ) : Chemistry && !Sidebars ? (
              <Chemistry_Main
                handleChemAIRS={handleChemAIRS}
                handleSarVisionSM={handleSarVisionSM}
                handleVortex={handleVortex}
                handleMedchemDesigner={handleMedchemDesigner}
              />
            ) : ComputationalChemistry && !Sidebars ? (
              <ComputationalChemistry_Main
                handleADMETpredictor={handleADMETpredictor}
              />
            ) : DMPK && !Sidebars ? (
              <DMPK_Main
                handleGastroPlus={handleGastroPlus}
                handleILDsym={handleILDsym}
              />
            ) : ELN_LIMS && !Sidebars ? (
              <ELN_LIMS_Main
                handleDotmaticsELN={handleDotmaticsELN}
                handleLabArchives={handleLabArchives}
                handleGeneCDMS={handleGeneCDMS}
                handleGeneCIS={handleGeneCIS}
                handleGeneATS={handleGeneATS}
                handleGeneBIS={handleGeneBIS}
              />
            ) : VirtualReality && !Sidebars ? (
              <VirtualReality_Main handleNanome={handleNanome} />
            ) : AIML && !Sidebars ? (
              <AIML_Main handleMara={handleMara} handleLuma={handleLuma} />
            ) : Commander ? (
              <Commander_Main />
            ) : SarVisionBiologics ? (
              <SarVision_Biologics_Main />
            ) : ChemAIRS ? (
              <ChemAIRS_Main />
            ) : SarVisionSM ? (
              <SarVision_SM_Main />
            ) : Vortex ? (
              <Vortex_Main />
            ) : MedchemDesigner ? (
              <Medchem_Designer_Main />
            ) : ADMETpredictor ? (
              <AdmetPredictor_Main />
            ) : GastroPlus ? (
              <GastroPlus_Main />
            ) : ILDsym ? (
              <ILDsym_Main />
            ) : DotmaticsELN ? (
              <DotmaticsELN_Main />
            ) : LabArchives ? (
              <LabArchives_Main />
            ) : GeneCDMS ? (
              <GeneCDMS_Main />
            ) : GeneCIS ? (
              <GeneCIS_Main />
            ) : GeneATS ? (
              <GeneATS_Main />
            ) : GeneBIS ? (
              <GeneBIS_Main />
            ) : Nanome ? (
              <Nanome_Main />
            ) : Mara ? (
              <Mara_Main />
            ) : Luma ? (
              <Luma_Main />
            ) : (
              setGenomics(true)
            )}
          </div>
        </div>
      )}
      {/* {LeadershipPage && (
        <div className="leadershippage-contents"> Leadership</div>
      )}
      {AdvisoryboardPage && (
        <div className="advisoryboardpage-contents"> Advisory Board</div>
      )}
      {ContactPage && <div className="contactuspage-contents"> Contact us</div>} */}
      <Dialog
        open={Products}
        onClose={() => setProducts(false)}
        className="dialog-products">
        <div className="products-dialog">
          <div className="navigators">
            <div className="navigators-contents">
              <div
                className={`genomics-navigator ${
                  Genomics_Products ? "edit" : ""
                }`}
                onClick={handleGenomics_Product}>
                <div className="title-navigator">Genomics R&D</div>
                <div className="content-navigator">
                  where the secrets of our DNA become the solutions of tomorrow
                </div>
              </div>
              <div
                className={`biology-navigator ${
                  Biology_Products ? "edit" : ""
                }`}
                onClick={handleBiology_Product}>
                <div className="title-navigator">Biology R&D</div>
                <div className="content-navigator">
                  In the lab of biology, every discovery is a step closer to
                  unlocking the full potential of life
                </div>
              </div>
              <div
                className={`chemistry-navigator ${
                  Chemistry_Products ? "edit" : ""
                }`}
                onClick={handleChemistry_Product}>
                <div className="title-navigator">Chemistry R&D</div>
                <div className="content-navigator">
                  where the elements of matter become the building blocks of
                  innovation
                </div>
              </div>
              <div
                className={`chemistry-navigator ${
                  ComputationalChemistry_Products ? "edit" : ""
                }`}
                onClick={handleComputationalChemistry_Product}>
                <div className="title-navigator">
                  Computational Chemistry R&D
                </div>
                <div className="content-navigator">
                  where the elements of matter become the building blocks of
                  innovation
                </div>
              </div>

              <div
                className={`chemistry-navigator ${DMPK_Products ? "edit" : ""}`}
                onClick={handleDMPK_Product}>
                <div className="title-navigator">DMPK</div>
                <div className="content-navigator">
                  where the elements of matter become the building blocks of
                  innovation
                </div>
              </div>
              <div
                className={`chemistry-navigator ${
                  ELN_LIMS_Products ? "edit" : ""
                }`}
                onClick={handleELN_LIMS_Product}>
                <div className="title-navigator">ELN & LIMS</div>
                <div className="content-navigator">
                  where the elements of matter become the building blocks of
                  innovation
                </div>
              </div>
              <div
                className={`virtual-navigator ${
                  VirtualReality_Products ? "edit" : ""
                }`}
                onClick={handleVirtualReality_Product}>
                <div className="title-navigator">Virtual Reality</div>
                <div className="content-navigator">
                  where the future is not just seen but experienced
                </div>
              </div>
              <div
                className={`outcomes-navigator ${AIML_Products ? "edit" : ""}`}
                onClick={handleAIML_Product}>
                <div className="title-navigator">AIML</div>
                <div className="content-navigator">
                  where the future is not just seen but experienced
                </div>
              </div>
            </div>
          </div>
          <div className="items-content">
            <div style={{}}>
              <div className="items-in">
                {getFilteredItems().map((item, index) => (
                  <div
                    className="items"
                    key={index}
                    onClick={() => handleItemClick(item, index)}>
                    {/* <img
                        src={item.image}
                        style={{ width: "30px", marginTop: "0%" }}
                        alt="img"
                      /> */}
                    <div>
                      <div className="title-navigator-item">{item.title}</div>
                      <div className="content-navigator-item">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="items-content">
              {items.map((item, index) => (
                <div className="items" key={index}>
                  <img src={item.image} alt="img" />
                  <div>
                    <div className="title-navigator">{item.title}</div>
                    <div className="content-navigator">{item.content}</div>
                  </div>
                </div>
              ))}
            </div> */}
        </div>
      </Dialog>
    </div>
  );
}
