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
import RecapButton from "../ComposantsFormulaire/RecapButton";
import { generateStrongPassword, generateTrigramme } from "../utils/generators";

const getTodayFR = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
};

function FormulaireIdentifiant() {
  const [isLocked, setIsLocked] = useState(false);
  const [showInfoPC, setShowInfoPC] = useState(false);
  const [form, setForm] = useState({
    nom: "", prenom: "", date: getTodayFR(), modele: "",
    emailGenere: "", passwordGenere: "", trigrammeGenere: "",
    nomMachine: "", marque: "", numeroSerie: "", garantie: "",
  });

  const { isValid, isValidPC } = ValidationChamps(form);

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleValidate = () => {
    if (!isValid) return;
    const cleanNom = form.nom.trim().toLowerCase().replace(/\s+/g, "");
    const cleanPrenom = form.prenom.trim().toLowerCase();
    setForm((prev) => ({
      ...prev,
      emailGenere: `${cleanPrenom[0] || ""}.${cleanNom}@goron-systemes.fr`,
      passwordGenere: generateStrongPassword(),
      trigrammeGenere: generateTrigramme(prev.prenom, prev.nom),
    }));
    setIsLocked(true);
  };

  const resetGenerations = () => {
    setIsLocked(false);
    setShowInfoPC(false);
    setForm(prev => ({ 
      ...prev, emailGenere: "", passwordGenere: "", trigrammeGenere: "",
      nomMachine: "", marque: "", numeroSerie: "", garantie: "" 
    }));
  };

  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typo variant="h3" color="#ee773d" fontWeight="bold" mb={3}>
          Identifiants informatique
        </Typo>
        <DividerMui variant="strong" sx={{ mb: 2 }} />

        <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
          <IdentityRow form={form} onChange={handleFormChange} disabled={isLocked} />

          {!isLocked ? (
            <>
              <ModelValidationRow
                value={form.modele}
                onChange={handleFormChange}
                onValidate={handleValidate}
                disabled={!isValid}
              />
              <DividerMui variant="strong" sx={{ mt: 4 }} /> 
            </>
          ) : (
            <>
              {!showInfoPC ? (
                <>
                  <DividerMui variant="light" sx={{ mt: 4, mb: 3 }} />
                  
                  <GeneratedEmailRow 
                    email={form.emailGenere} 
                    password={form.passwordGenere} 
                    trigramme={form.trigrammeGenere}
                    onChange={handleFormChange}
                  />

                  <DividerMui variant="strong" sx={{ mt: 4, mb: 3 }} />

                  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                    <RetourButton onRetour={resetGenerations} />
                    <InfoPCButton onInfoPC={() => setShowInfoPC(true)} />
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ mt: 3 }}>
                    <InfoPCRow
                      nomMachine={form.nomMachine} marque={form.marque}
                      numeroSerie={form.numeroSerie} garantie={form.garantie}
                      onChange={handleFormChange}
                    />
                  </Box>
                  
                  <DividerMui variant="strong" sx={{ mt: 4, mb: 3 }} />
                  
                  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                    <RetourButton onRetour={() => setShowInfoPC(false)} />
                    <RecapButton onRecap={() => console.log(form)} disabled={!isValidPC} />
                  </Box>
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default FormulaireIdentifiant;