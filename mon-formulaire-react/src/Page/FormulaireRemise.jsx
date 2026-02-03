import { useState } from "react";
import { Box } from "@mui/material";

// ─── Importation de tous tes composants personnalisés ───────────────────────
import InputMui from "../Composants/InputMui";
import Typo from "../Composants/Typo";
import DividerMui from "../Composants/DividerMui";
import Soussigne from "../Composants/Soussigne";
import Engagement from "../Composants/Engagement";
import SignatureBlock from "../Composants/SignatureBlock";
import DateInput from "../Composants/DateInput";
import ValidationRemise from "../Composants/ValidationRemise";
import SubmitButtonWithTooltip from "../Composants/SubmitButtonWithTooltip";
import InputWithButton from "../Composants/InputWithButton";

function FormulaireRemise() {
  // ─── État du formulaire ──────────────────────────────────────────────────
  // Plus simple que FormulaireInformatique : juste les infos de base,
  // les équipements, et la signature.
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    date: "",
    NomEquipement: "",
    Monsieur: "",
    DateSignature: "",
    NomSignature: "",
    signatureImage: "",
  });

  // Met à jour la clé correspondante dans "form" à chaque keystroke
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Soumission : vérifie la validation puis envoie
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    alert("Le formulaire a bien été envoyé !");
    console.log(form);
  };

  // Sauvegarde de la signature du participant
  const handleSaveSignature = (image) => {
    setForm((prev) => ({ ...prev, signatureImage: image }));
  };

  // Sauvegarde de la signature de l'animateur
  const handleSaveNomSignature = (image) => {
    setForm((prev) => ({ ...prev, NomSignature: image }));
  };

  // ─── Validation du formulaire ────────────────────────────────────────────
  // ⚠️ Attention : ValidationRemise n'est pas un hook (elle ne commence pas
  // par "use"), donc appeler avec "const { isValid } = ValidationRemise(form)"
  // fonctionne, mais ce n'est pas la convention React.
  // Tu pourrais la renommer "useValidationRemise" pour rester cohérent
  // avec useFormValidation.
  const { isValid } = ValidationRemise(form);

  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1200, mx: "auto" }}>

        {/* ── Titre + séparateur ───────────────────────────────────────── */}
        <Typo variant="h3" color="#ee773d" fontWeight="bold" mb={3}>
          Remise informatique
        </Typo>
        <DividerMui variant="strong" />

        {/* ── Nom / Prénom / Date ──────────────────────────────────────── */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <InputMui label="Nom" name="nom" value={form.nom} onChange={handleChange} fullWidth />
          <InputMui label="Prénom" name="prenom" value={form.prenom} onChange={handleChange} fullWidth />
          <DateInput label="Date (JJ/MM/AAAA)" name="date" value={form.date} onChange={handleChange} required />
        </Box>
        <DividerMui variant="strong" />

        {/* ── Liste d'équipements ──────────────────────────────────────── */}
        {/* ⚠️ Plusieurs props passées ici (inputName, inputValue,         */}
        {/* onInputChange, onButtonClick) ne sont pas utilisées dans        */}
        {/* InputWithButton tel qu'il est défini. Le composant gère         */}
        {/* sa propre liste en interne avec useState.                       */}
        <InputWithButton
          label="A reçu les équipements suivants à disposition :"
          inputLabel="Nom de l'équipement"
          inputName="NomEquipement"
          inputValue={form.NomEquipement}
          onInputChange={handleChange}
          buttonText="AJOUTER"
          onButtonClick={() => console.log("Bouton cliqué")}
          inputWidth="350px"
          buttonWidth="150px"
        />

        <DividerMui variant="strong" />

        {/* ── Section "Je soussigné..." ────────────────────────────────── */}
        <Soussigne label="Je soussigné…">
          <InputMui label="Monsieur..." name="Monsieur" value={form.Monsieur} onChange={handleChange} fullWidth />
        </Soussigne>

        {/* ── Texte d'engagement ───────────────────────────────────────── */}
        <Engagement
          title="m'engage à :"
          text={`- A faire bon usage du matériel informatique
                - De ne pas laisser celui-ci dans mon véhicule
                - De veiller à ne pas conserver les données de l'entreprise sur des supports non sécurisés 
                - A respecter la charte des système d'information en annexe 
                - A respecter le règlement intérieur en annexe 

          Je reconnais avoir reçu les consignes d'utilisation de tous ces équipements avec une présentation des différente procédures internes  .`}
        />

        {/* ── Bloc de signature ────────────────────────────────────────── */}
        <SignatureBlock
          form={form}
          handleChange={handleChange}
          onSaveSignature={handleSaveSignature}
          onSaveNomSignature={handleSaveNomSignature}
        />

        {/* ── Bouton "Envoyer" avec tooltip si formulaire incomplet ────── */}
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 3 }}>
          <SubmitButtonWithTooltip
            disabled={!isValid}
            tooltip="Tous les champs doivent être remplis correctement pour envoyer le formulaire"
          >
            Envoyer
          </SubmitButtonWithTooltip>
        </Box>

        <DividerMui variant="strong" sx={{ mt: 3 }} />
      </Box>
    </Box>
  );
}

export default FormulaireRemise;