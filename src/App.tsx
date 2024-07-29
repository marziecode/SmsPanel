import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes?.map((item, idx) => (
          <Route key={idx} path={item.path} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;