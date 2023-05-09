import { createSignal, lazy } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
const TechDetails = lazy(() => import("./pages/TechDetails"));
function App() {
  const [theme, setTheme] = createSignal(false);
  const toggleTheme = () => {
    setTheme(!theme());
  };

  return (
    <div class="container m-auto">
      <Header toggleTheme={toggleTheme} theme={theme()} />
      <Routes>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/techdetails/:id"} component={TechDetails} />
      </Routes>
    </div>
  );
}

export default App;
