import { Routes, Route } from "react-router-dom";
import Formulaireinformatique from "./Page/Formulaireinformatique";

function App() {
  return (
    <Routes>
      <Route
        path="/formulaire-informatique"
        element={<Formulaireinformatique />}
      />
    </Routes>
  );
}

export default App;
