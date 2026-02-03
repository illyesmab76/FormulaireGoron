import { useState } from "react";
import { Box } from "@mui/material";
import Typo from "../Composants/Typo";
import DividerMui from "../Composants/DividerMui";
import ValidationChamps from "../ComposantsFormulaire/ValidationChamps.jsx";
import IdentityRow from "../ComposantsFormulaire/IdentityRow";
import ModelValidationRow from "../ComposantsFormulaire/ModelValidationRow";
import GeneratedEmailRow from "../ComposantsFormulaire/GeneratedEmailRow";
import { generateStrongPassword } from "../utils/generators";

// Fonction pour avoir la date par défaut dès le chargement
const getTodayFR = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
};

function FormulaireIdentifiant() {
  const [isLocked, setIsLocked] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    date: getTodayFR(), // Initialisée directement ici !
    modele: "",
    emailGenere: "",
    passwordGenere: "",
  });

  const { isValid } = ValidationChamps(form);

  const generateEmail = (p, n) => {
    if (!p || !n) return "";
    const firstLetter = p.trim().toLowerCase()[0];
    const lastName = n.trim().toLowerCase().replace(/\s+/g, "");
    return `${firstLetter}.${lastName}@goron-systemes.fr`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Si validé, on ne bloque que Nom et Prénom
    if (isLocked && (name === "nom" || name === "prenom")) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidate = (e) => {
    e.preventDefault();
    if (isValid) {
      const email = generateEmail(form.prenom, form.nom);
      const password = generateStrongPassword();
      setForm((prev) => ({
        ...prev,
        emailGenere: email,
        passwordGenere: password,
      }));
      setIsLocked(true);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      <Box component="form" sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typo variant="h3" color="#ee773d" fontWeight="bold" mb={3}>
          Identifiants informatique
        </Typo>

        <DividerMui variant="strong" />

        <IdentityRow 
          form={form} 
          onChange={handleChange} 
          disabled={isLocked} 
        />

        {!isLocked ? (
          <ModelValidationRow
            value={form.modele}
            onChange={handleChange}
            onValidate={handleValidate}
            disabled={!isValid}
          />
        ) : (
          <GeneratedEmailRow 
            email={form.emailGenere} 
            password={form.passwordGenere} 
          />
        )}

        <DividerMui variant="strong" sx={{ mt: 3 }} />
      </Box>
    </Box>
  );
}

export default FormulaireIdentifiant;