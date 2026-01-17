import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "../src/pages/Home/Layout";
import MainLayout from "./pages/MainLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
