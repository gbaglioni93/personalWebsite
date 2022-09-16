import "./App.css";
import { Route, BrowserRouter, HashRouter, Routes } from "react-router-dom";
import HomePage from "./res/pages/home";
import SamCountdown from "./res/pages/samCountdown";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="sam-and-giorgio-become-best-friends"
          element={<SamCountdown />}
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
