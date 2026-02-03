import { Routes, Route } from "react-router-dom";
import Formulaireinformatique from "./Page/Formulaireinformatique";
import FormulaireRemise from "./Page/FormulaireRemise";
import FormulaireIdentifiant from "./Page/FormulaireIdentifiant";

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
      <Route
        path="/formulaire-identifiant"
        element={<FormulaireIdentifiant />}
      />
    </Routes>
    
  );
}

export default App;
