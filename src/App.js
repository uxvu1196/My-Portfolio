import './App.scss';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Contact } from './pages/Contact';



function App() {
  return (
    //Routing - ToDo: Handle auth users
    < Router >
      <Routes>
        {/* Home Sweet Home */}
        <Route path="/" element={<Home />} exact />
        <Route path="/work" element={<Work />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </Router >
  );
}

export default App;
