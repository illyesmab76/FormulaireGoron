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
import FinalRecapView from "../ComposantsFormulaire/FinalRecapView";
import { generateStrongPassword, generateTrigramme } from "../utils/generators";
import InfoTelButton from "../ComposantsFormulaire/InfoTelButton";
import InfoTelRow from "../ComposantsFormulaire/InfoTelRow";
import InfoEquipButton from "../ComposantsFormulaire/InfoEquipButton";
import InfoEquipementRow from "../ComposantsFormulaire/InfoEquipementRow";

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
  const [showInfoTel, setShowInfoTel] = useState(false);
  const [showInfoEquip, setShowInfoEquip] = useState(false);
  const [showFinalRecap, setShowFinalRecap] = useState(false);

  const [form, setForm] = useState({
    nom: "", prenom: "", date: getTodayFR(), modele: "",
    emailGenere: "", passwordGenere: "", trigrammeGenere: "",
    nomMachine: "", marque: "", numeroSerie: "", garantie: "",
    marqueTel: "", modeleTel: "", imei: "", garantieTel: "", fichiersTel: [],
    equipements: [],
    fichiers: []
  });

  const { isValid, isValidPC, isValidTel } = ValidationChamps(form);

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleAddEquipement = (newEquip) => {
    setForm(prev => ({
      ...prev,
      equipements: [...prev.equipements, newEquip]
    }));
  };

  const handleDeleteEquipement = (index) => {
    setForm(prev => ({
      ...prev,
      equipements: prev.equipements.filter((_, i) => i !== index)
    }));
  };

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

  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typo variant="h3" color="#ee773d" fontWeight="bold" mb={3}>
          Identifiants informatique
        </Typo>
        <DividerMui variant="strong" sx={{ mb: 2 }} />

        {showFinalRecap ? (
          <FinalRecapView form={form} onBack={() => setShowFinalRecap(false)} />
        ) : (
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
                {!showInfoPC && !showInfoTel && !showInfoEquip && (
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
                      <RetourButton onRetour={() => setIsLocked(false)} />
                      <InfoPCButton onInfoPC={() => setShowInfoPC(true)} />
                    </Box>
                  </>
                )}

                {showInfoPC && !showInfoTel && !showInfoEquip && (
                  <>
                    <Box sx={{ mt: 3 }}>
                      <InfoPCRow
                        nomMachine={form.nomMachine} 
                        marque={form.marque}
                        numeroSerie={form.numeroSerie} 
                        garantie={form.garantie}
                        onChange={handleFormChange}
                        fichiers={form.fichiers}
                        onFileChange={(e) => {
                          setForm(prev => ({ ...prev, fichiers: Array.from(e.target.files) }));
                        }}
                      />
                    </Box>
                    <DividerMui variant="strong" sx={{ mt: 4, mb: 3 }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                      <RetourButton onRetour={() => setShowInfoPC(false)} />
                      <InfoTelButton 
                        onInfoTel={() => setShowInfoTel(true)} 
                        disabled={!isValidPC} 
                      />
                    </Box>
                  </>
                )}

                {showInfoTel && !showInfoEquip && (
                  <>
                    <Box sx={{ mt: 3 }}>
                      <InfoTelRow
                        marqueTel={form.marqueTel}
                        modeleTel={form.modeleTel}
                        imei={form.imei}
                        garantieTel={form.garantieTel}
                        onChange={handleFormChange}
                        fichiers={form.fichiersTel}
                        onFileChange={(e) => {
                          setForm(prev => ({ ...prev, fichiersTel: Array.from(e.target.files) }));
                        }}
                      />
                    </Box>
                    <DividerMui variant="strong" sx={{ mt: 4, mb: 3 }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                      <RetourButton onRetour={() => setShowInfoTel(false)} />
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <InfoEquipButton onOpen={() => setShowInfoEquip(true)} />
                        <RecapButton 
                          onRecap={() => setShowFinalRecap(true)} 
                          disabled={!isValidTel} 
                        />
                      </Box>
                    </Box>
                  </>
                )}

                {showInfoEquip && (
                  <>
                    <Box sx={{ mt: 3 }}>
                      <InfoEquipementRow 
                        equipements={form.equipements}
                        onAdd={handleAddEquipement}
                        onDelete={handleDeleteEquipement}
                      />
                    </Box>
                    <DividerMui variant="strong" sx={{ mt: 4, mb: 3 }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                      <RetourButton onRetour={() => setShowInfoEquip(false)} />
                      <RecapButton 
                        onRecap={() => setShowFinalRecap(true)} 
                      />
                    </Box>
                  </>
                )}
              </>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default FormulaireIdentifiant;