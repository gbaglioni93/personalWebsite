import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./res/pages/home";
import SamCountdown from "./res/pages/samCountdown";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="sam-and-giorgio-become-best-friends"
          element={<SamCountdown />}
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
