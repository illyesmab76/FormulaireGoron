import { Routes, Route } from "react-router-dom";
import Formulaireinformatique from "./Page/Formulaireinformatique";
import FormulaireRemise from "./Page/FormulaireRemise";

function App() {
  return (
    <Routes>
      <Route
        path="/formulaire-informatique"
        element={<Formulaireinformatique />}
      />
      <Route
        path="/formulaire-remise"
        element={<FormulaireRemise />}
      />
    </Routes>
  );
}

export default App;
