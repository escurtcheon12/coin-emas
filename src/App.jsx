import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routers } from "./config";

function App() {
  return (
    <>
      <Navbar />
      <Routers />
    </>
  );
}

export default App;
