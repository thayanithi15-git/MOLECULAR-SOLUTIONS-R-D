import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
// import AllProducts from "./Components/AllProducts/AllProducts"; 
import GenomicsMain from "./Components/Genomics/Genomics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/allproducts" element={<GenomicsMain />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
