import { useState } from "react";
import { Box } from "@mui/material";
import Typo from "../Composants/Typo";
import DividerMui from "../Composants/DividerMui";
import ValidationChamps from "../ComposantsFormulaire/ValidationChamps.jsx";
import IdentityRow from "../ComposantsFormulaire/IdentityRow";
import ModelValidationRow from "../ComposantsFormulaire/ModelValidationRow";
import GeneratedEmailRow from "../ComposantsFormulaire/GeneratedEmailRow";
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
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    date: getTodayFR(),
    modele: "",
    emailGenere: "",
    passwordGenere: "",
    trigrammeGenere: "",
  });

  const { isValid } = ValidationChamps(form);

  // ✅ CORRIGÉ : prenom + "." + nom
  const generateEmail = (prenom, nom) => {
    if (!prenom || !nom) return "";
    const firstLetter = prenom.trim().toLowerCase()[0];
    const lastName = nom.trim().toLowerCase().replace(/\s+/g, "");
    return `${firstLetter}.${lastName}@goron-systemes.fr`;
  };

  const handleChange = (e) => {
    if (isLocked) return;
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleGeneratedChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidate = () => {
    if (!isValid) return;

    const email = generateEmail(form.prenom, form.nom);
    const password = generateStrongPassword();
    const trigramme = generateTrigramme(form.prenom, form.nom);

    setForm((prev) => ({
      ...prev,
      emailGenere: email,
      passwordGenere: password,
      trigrammeGenere: trigramme,
    }));

    setIsLocked(true);
  };

  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
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
            trigramme={form.trigrammeGenere}
            onTrigrammeChange={handleGeneratedChange}
          />
        )}

        <DividerMui variant="strong" sx={{ mt: 3 }} />
      </Box>
    </Box>
  );
}

export default FormulaireIdentifiant;