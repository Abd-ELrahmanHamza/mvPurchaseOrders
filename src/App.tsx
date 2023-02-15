// Import routing components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./Pages/Home/Home";

// Import theme
import mainTheme from "./Theme/main";
import NavBar from "./Components/NavBar/NavBar";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
