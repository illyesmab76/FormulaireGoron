import { useState } from "react";
import { Box } from "@mui/material";

// ─── Importation de tous tes composants personnalisés ───────────────────────
import InputMui from "../Composants/InputMui";
import Typo from "../Composants/Typo";
import DividerMui from "../Composants/DividerMui";
import FormRow from "../Composants/FormRow";
import Soussigne from "../Composants/Soussigne";
import Engagement from "../Composants/Engagement";
import SignatureBlock from "../Composants/SignatureBlock";
import DateInput from "../Composants/DateInput";
import useFormValidation from "../Composants/useFormValidation";
import SubmitButtonWithTooltip from "../Composants/SubmitButtonWithTooltip";

function FormulaireInformatique() {
  // ─── État du formulaire ──────────────────────────────────────────────────
  // Un objet qui contient les valeurs de TOUS les champs du formulaire.
  // Chaque clé correspond au "name" d'un input.
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    date: "",

    IdMail: "",
    MDPmail: "",

    IdGoogleAgenda: "",
    MDPGoogle: "",

    IdTSE: "",
    MDPTSE: "",

    IdEBP: "",
    MDPEBP: "",

    IdVPN: "",
    MDPVPN: "",

    IdPC: "",
    MDPPC: "",

    IdBios: "",
    MDPBios: "",

    IdWindows: "",
    MDPWindows: "",

    Monsieur: "",

    DateSignature: "",
    NomSignature: "",
    signatureImage: "",
  });

  // ─── Mise à jour d'un champ ──────────────────────────────────────────────
  // Appelée à chaque keystroke dans n'importe quel input.
  // Elle met à jour uniquement la clé correspondante dans "form"
  // grâce à [name] (clé dynamique).
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ─── Soumission du formulaire ────────────────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la page de se recharger à l'envoi

    if (!isValid) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    alert("Le formulaire a bien été envoyé !");
    console.log(form); // Affiche les données du formulaire dans la console
  };

  // ─── Sauvegarde des signatures ───────────────────────────────────────────
  // Ces fonctions sont passées à SignatureBlock pour récupérer
  // l'image de signature depuis le SignaturePad.
  const handleSaveSignature = (image) => {
    setForm((prev) => ({ ...prev, signatureImage: image }));
  };

  const handleSaveNomSignature = (image) => {
    setForm((prev) => ({ ...prev, NomSignature: image }));
  };

  // ─── Validation du formulaire ────────────────────────────────────────────
  // isValid est true seulement si tous les champs sont remplis correctement.
  const { isValid } = useFormValidation(form);

  // ─── Rendu du formulaire ─────────────────────────────────────────────────
  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      {/* "component="form"" transforme le Box en balise <form> HTML */}
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1200, mx: "auto" }}>

        {/* ── Titre + séparateur fort ──────────────────────────────────── */}
        <Typo variant="h3" color="#ee773d" fontWeight="bold" mb={3}>
          Identifiants informatique
        </Typo>
        <DividerMui variant="strong" />

        {/* ── Nom / Prénom / Date ──────────────────────────────────────── */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <InputMui label="Nom" name="nom" value={form.nom} onChange={handleChange} fullWidth />
          <InputMui label="Prénom" name="prenom" value={form.prenom} onChange={handleChange} fullWidth />
          <DateInput label="Date (JJ/MM/AAAA)" name="date" value={form.date} onChange={handleChange} required />
        </Box>
        <DividerMui variant="strong" />

        {/* ── Ligne : Adresse mail ─────────────────────────────────────── */}
        <FormRow
          label="Adresse mail"
          input1={<InputMui label="Identifiant" name="IdMail" value={form.IdMail} onChange={handleChange} fullWidth />}
          input2={<InputMui label="Mot de passe" name="MDPmail" value={form.MDPmail} onChange={handleChange} fullWidth />}
        />
        <DividerMui />

        {/* ── Ligne : Google Agenda ────────────────────────────────────── */}
        <FormRow
          label="Google Agenda"
          input1={<InputMui label="Identifiant" name="IdGoogleAgenda" value={form.IdGoogleAgenda} onChange={handleChange} fullWidth />}
          input2={<InputMui label="Mot de passe" name="MDPGoogle" value={form.MDPGoogle} onChange={handleChange} fullWidth />}
        />
        <DividerMui />

        {/* ── Ligne : TSE ASSI ─────────────────────────────────────────── */}
        {/* ⚠️ Bug : value={form.IdGoogleTSE} devrait être value={form.IdTSE} */}
        <FormRow
          label="Login TSE ASSI"
          input1={<InputMui label="Identifiant" name="IdTSE" value={form.IdGoogleTSE} onChange={handleChange} fullWidth />}
          input2={<InputMui label="Mot de passe" name="MDPTSE" value={form.MDPTSE} onChange={handleChange} fullWidth />}
        />
        <DividerMui />

        {/* ── Ligne : EBP ──────────────────────────────────────────────── */}
        <FormRow
          label="Compte EBP"
          input1={<InputMui label="Identifiant" name="IdEBP" value={form.IdEBP} onChange={handleChange} fullWidth />}
          input2={<InputMui label="Mot de passe" name="MDPEBP" value={form.MDPEBP} onChange={handleChange} fullWidth />}
        />
        <DividerMui />

        {/* ── Ligne : VPN ──────────────────────────────────────────────── */}
        <FormRow
          label="Login VPN DISTANT"
          input1={<InputMui label="Identifiant" name="IdVPN" value={form.IdVPN} onChange={handleChange} fullWidth />}
          input2={<InputMui label="Mot de passe" name="MDPVPN" value={form.MDPVPN} onChange={handleChange} fullWidth />}
        />
        <DividerMui />

        {/* ── Ligne : PC Portable ──────────────────────────────────────── */}
        {/* Le label ici est un Box avec du texte sur 2 lignes            */}
        {/* ⚠️ "px 15" et "px15" ne sont pas des valeurs CSS valides,     */}
        {/*    ça devrait être "15px" ou mieux, utiliser MUI : mt: 2       */}
        <FormRow
          label={
            <Box sx={{ mt: "px 15" }}>
              <Box>PC PORTABLE</Box>
              <Box sx={{ mt: "px15", fontSize: "20px", color: "#000000" }}>
                (NOM INFORMATIQUE)
              </Box>
            </Box>
          }
          input1={<InputMui label="Identifiant" name="IdPC" value={form.IdPC} onChange={handleChange} fullWidth />}
          input2={<InputMui label="Mot de passe" name="MDPPC" value={form.MDPPC} onChange={handleChange} fullWidth />}
        />
        <DividerMui />

        {/* ── Ligne : BIOS ─────────────────────────────────────────────── */}
        <FormRow
          label="MDP BIOS"
          input1={<InputMui label="Identifiant" name="IdBios" value={form.IdBios} onChange={handleChange} fullWidth />}
          input2={<InputMui label="Mot de passe" name="MDPBios" value={form.MDPBios} onChange={handleChange} fullWidth />}
        />
        <DividerMui />

        {/* ── Ligne : Windows ──────────────────────────────────────────── */}
        <FormRow
          label="MDP SESSION WINDOWS"
          input1={<InputMui label="Identifiant" name="IdWindows" value={form.IdWindows} onChange={handleChange} fullWidth />}
          input2={<InputMui label="Mot de passe" name="MDPWindows" value={form.MDPWindows} onChange={handleChange} fullWidth />}
        />
        <DividerMui variant="strong" />

        {/* ── Section "Je soussigné..." ────────────────────────────────── */}
        <Soussigne label="Je soussigné…">
          <InputMui label="Monsieur..." name="Monsieur" value={form.Monsieur} onChange={handleChange} fullWidth />
        </Soussigne>

        {/* ── Texte d'engagement ───────────────────────────────────────── */}
        <Engagement
          title="m'engage à :"
          text={`M'engage à ne jamais diffuser ses identifiants. Ceux-ci sont personnels.
          A respecter la propriété des informations d'ASSI et de la société GORON conformément au règlement intérieur et à la charte SI.

          Je reconnais avoir reçu les consignes d'utilisation.`}
        />

        {/* ── Bloc de signature (date + lieu + 2 signatures) ──────────── */}
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

export default FormulaireInformatique;