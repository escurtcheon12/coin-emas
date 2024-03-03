import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Survey, Result, Home, Package, Thankyou } from "../../pages/index";
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/survey" element={<Survey />} />
        <Route exact path="/result" element={<Result />} />
        <Route exact path="/package" element={<Package />} />
        <Route exact path="/thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
};
export default Routers;
