import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import Typo from "../Composants/Typo";
import DividerMui from "../Composants/DividerMui";
import ValidationChamps from "../ComposantsFormulaire/ValidationChamps.jsx";
import IdentityRow from "../ComposantsFormulaire/IdentityRow";
import ModelValidationRow from "../ComposantsFormulaire/ModelValidationRow";
import GeneratedEmailRow from "../ComposantsFormulaire/GeneratedEmailRow";
import InfoPCRow from "../ComposantsFormulaire/InfoPCRow";
import RetourButton from "../ComposantsFormulaire/RetourButton";
import InfoPCButton from "../ComposantsFormulaire/InfoPCButton";
import { generateStrongPassword, generateTrigramme } from "../utils/generators";

const getTodayFR = () => {
  const today = new Date();
  return `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;
};

function FormulaireIdentifiant() {
  const [isLocked, setIsLocked] = useState(false);
  const [showInfoPC, setShowInfoPC] = useState(false);
  const [form, setForm] = useState({
    nom: "", prenom: "", date: getTodayFR(), modele: "",
    emailGenere: "", passwordGenere: "", trigrammeGenere: "",
    nomMachine: "", marque: "", numeroSerie: "", garantie: "",
  });

  // Utilisation simple de la validation
  const { isValid } = ValidationChamps(form);

  // Fonction de modification unique pour tout le formulaire
  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleValidate = () => {
    if (!isValid) return;
    const email = `${form.prenom.trim().toLowerCase()[0] || ""}.${form.nom.trim().toLowerCase().replace(/\s+/g, "")}@goron-systemes.fr`;
    
    setForm((prev) => ({
      ...prev,
      emailGenere: email,
      passwordGenere: generateStrongPassword(),
      trigrammeGenere: generateTrigramme(prev.prenom, prev.nom),
    }));
    setIsLocked(true);
  };

  const resetGenerations = () => {
    setIsLocked(false);
    setShowInfoPC(false);
    setForm(prev => ({ ...prev, emailGenere: "", passwordGenere: "", trigrammeGenere: "" }));
  };

  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typo variant="h3" color="#ee773d" fontWeight="bold" mb={3}>
          Identifiants informatique
        </Typo>
        <DividerMui variant="strong" />

        <IdentityRow form={form} onChange={handleFormChange} disabled={isLocked} />

        {!isLocked ? (
          <ModelValidationRow
            value={form.modele}
            onChange={handleFormChange}
            onValidate={handleValidate}
            disabled={!isValid}
          />
        ) : (
          <>
            {!showInfoPC ? (
              <>
                <GeneratedEmailRow 
                  email={form.emailGenere} 
                  password={form.passwordGenere} 
                  trigramme={form.trigrammeGenere}
                  onChange={handleFormChange}
                />
                <DividerMui variant="strong" sx={{ mt: 3 }} />
                <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                  <RetourButton onRetour={resetGenerations} />
                  <InfoPCButton onInfoPC={() => setShowInfoPC(true)} />
                </Box>
              </>
            ) : (
              <>
                <InfoPCRow
                  nomMachine={form.nomMachine}
                  marque={form.marque}
                  numeroSerie={form.numeroSerie}
                  garantie={form.garantie}
                  onChange={handleFormChange}
                />
                <DividerMui variant="strong" sx={{ mt: 3 }} />
                <Box sx={{ mt: 3 }}>
                  <RetourButton onRetour={() => setShowInfoPC(false)} />
                </Box>
              </>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}

export default FormulaireIdentifiant;