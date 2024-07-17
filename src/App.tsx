import "./assets/css/index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import CutsomCursor from "./features/template/components/CutsomCursor";
import AppRoutes from "./routes/AppRoute";

function App() {
  return (
    <>
      <Header></Header>
      <AppRoutes />
      <Home />
      <CutsomCursor />

    </>
  );
}

export default App;
