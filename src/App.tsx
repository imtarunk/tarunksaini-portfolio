import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./provider/ThemeProvider";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/b" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
