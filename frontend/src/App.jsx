import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "../src/pages/Home/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
