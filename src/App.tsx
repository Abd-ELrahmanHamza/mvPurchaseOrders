// Import routing components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./Pages/Home/Home";

// Import theme
import mainTheme from "./Theme/main";
import { ThemeProvider } from "styled-components";

// Import contexts
import { DataProvider } from "./Contexts/data";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
