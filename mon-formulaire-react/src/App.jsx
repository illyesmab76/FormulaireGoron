import { Routes, Route } from "react-router-dom";
import FormulaireInformatique from "./Page/Formulaireinformatique";

function App() {
  return (
    <Routes>
      <Route
        path="/formulaire-informatique"
        element={<FormulaireInformatique />}
      />
    </Routes>
  );
}

export default App;
