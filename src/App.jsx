import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AIML from "./Components/AIML/AIML";
import BiologyMain from "./Components/Biology/Biology";
import ChemistryMain from "./Components/Chemistry/Chemistry";
import ComputationalChemistry from "./Components/ComputationalChemistry/ComputationalChemistry";
import DMPK from "./Components/DMPK/DMPK";
import ELN_LIMS from "./Components/ELN & LIMS/ELN_LIMS";
import VirtualRealityMain from "./Components/VirtualReality/VirtualReality";
import GenomicsMain from "./Components/Genomics/Genomics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Home />}>
          {/* <Route path="/products/allproducts" element={<GenomicsMain />} /> */}
          <Route path="/products/aiml" element={<AIML />} />
          <Route path="/products/biology" element={<BiologyMain />} />
          <Route path="/products/chemistry" element={<ChemistryMain />} />
          <Route path="/products/computational-chemistry" element={<ComputationalChemistry />} />
          <Route path="/products/dmpk" element={<DMPK />} />
          <Route path="/products/eln-lims" element={<ELN_LIMS />} />
          <Route path="/products/virtual-reality" element={<VirtualRealityMain />} />
        </Route>
      </Routes>
    </Router>
  );  
}

export default App;

