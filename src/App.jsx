import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart/Cart";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
