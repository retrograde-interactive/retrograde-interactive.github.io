import "./styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ScrollToTop from "./components/ScrollToTop";
import Operator from "./components/operator/Operator";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/operator" element={<Operator />} />
        </Routes>
      </HashRouter>
    );
  }
}

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
