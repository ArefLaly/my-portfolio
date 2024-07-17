import "./assets/css/index.css";

import Layout from "./layouts/v1/Layout";
import AppRoutes from "./routes/AppRoute";

function App() {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;
