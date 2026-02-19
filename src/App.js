import './App.css';
import Certifications from './Certifications/Certifications';
import MassiveNavbar from './Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToolsMachinery from './ToolsMachinery/ToolsMachinery';

function App() {
  return (
    <Router>
      <MassiveNavbar />

      <Routes>
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/toolsMachinery" element={<ToolsMachinery />} />
      </Routes>

    </Router>
  );
}

export default App;
