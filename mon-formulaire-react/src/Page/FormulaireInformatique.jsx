import { useState } from "react";
import { Box } from "@mui/material";
import InputMui from "../Composants/InputMui";
import ButtonMui from "../Composants/ButtonMui";
import Typo from "../Composants/Typo";
import DividerMui from "../Composants/DividerMui";
import FormRow from "../Composants/FormRow";
import Soussigne from "../Composants/Soussigne";
import Engagement from "../Composants/Engagement";
import SignatureBlock from "../Composants/SignatureBlock"
import DateInput from "../Composants/DateInput";



function FormulaireInformatique() {
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

    Monsieur: "",

    DateSignature:"",
    NomSignature:"",
    signatureImage:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleSaveSignature = (image) => {
  setForm((prev) => ({ ...prev, signatureImage: image }));
};

const handleSaveNomSignature = (image) => {
  setForm((prev) => ({ ...prev, NomSignature: image }));
};

const signaturesOK = form.signatureImage && form.NomSignature;

const isValidDateFR = (date) => /^\d{2}\/\d{2}\/\d{4}$/.test(date);






  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1200, mx: "auto" }}>
        
        <Typo variant="h3" color="#ee773d" fontWeight="bold" mb={3}>
          Identifiants informatique
        </Typo>

        <DividerMui variant="strong" />

        {/* INFOS PERSONNELLES */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <InputMui label="Nom" name="nom" value={form.nom} onChange={handleChange} fullWidth />
          <InputMui label="Prénom" name="prenom" value={form.prenom} onChange={handleChange} fullWidth />
          <DateInput label="Date (JJ/MM/AAAA)" name="date" value={form.date} onChange={handleChange} required/>
        </Box>

        <DividerMui variant="strong" />

        <FormRow
          label="Adresse mail"
          input1={
            <InputMui label="Identifiant" name="IdMail" value={form.IdMail} onChange={handleChange} fullWidth/>}
          input2={
            <InputMui label="Mot de passe" name="MDPmail" value={form.MDPmail} onChange={handleChange} fullWidth/>}
        />

        <DividerMui />

        <FormRow
          label="Google Agenda"
          input1={
            <InputMui label="Identifiant" name="IdGoogleAgenda" value={form.IdGoogleAgenda} onChange={handleChange} fullWidth/>}
          input2={
            <InputMui label="Mot de passe" name="MDPGoogle" value={form.MDPGoogle} onChange={handleChange} fullWidth/>}
        />

        <DividerMui />

        <FormRow
          label="Login TSE ASSI"
          input1={
            <InputMui label="Identifiant" name="IdTSE" value={form.IdGoogleTSE} onChange={handleChange} fullWidth/>}
          input2={
            <InputMui label="Mot de passe" name="MDPTSE" value={form.MDPTSE} onChange={handleChange} fullWidth/>}
        />

        <DividerMui />

        <FormRow
          label="Compte EBP"
          input1={
            <InputMui label="Identifiant" name="IdEBP" value={form.IdEBP} onChange={handleChange} fullWidth/>}
          input2={
            <InputMui label="Mot de passe" name="MDPEBP" value={form.MDPEBP} onChange={handleChange} fullWidth/>}
        />

        <DividerMui />

        <FormRow
          label="Login VPN DISTANT"
          input1={
            <InputMui label="Identifiant" name="IdVPN" value={form.IdVPN} onChange={handleChange} fullWidth/>}
          input2={
            <InputMui label="Mot de passe" name="MDPVPN" value={form.MDPVPN} onChange={handleChange} fullWidth/>}
        />

        <DividerMui />

        <FormRow
          label={
      <Box sx={{mt: "px 15"}}>
      <Box>PC PORTABLE</Box>
      <Box
        sx={{
          mt: "px15",     
          fontSize: "20px",
          color: "#000000",
        }}
        >
        (NOM INFORMATIQUE)
        </Box>
        </Box>
            }
          input1={
            <InputMui label="Identifiant" name="IdPC" value={form.IdPC} onChange={handleChange} fullWidth/>}
          input2={
            <InputMui label="Mot de passe" name="MDPPC" value={form.MDPPC} onChange={handleChange} fullWidth/>}
        />

        <DividerMui />

        <FormRow
          label="MDP BIOS"
          input1={
            <InputMui label="Identifiant" name="IdBios" value={form.IdBios} onChange={handleChange} fullWidth/>}
          input2={
            <InputMui label="Mot de passe" name="MDPBios" value={form.MDPBios} onChange={handleChange} fullWidth/>}
        />

        <DividerMui />

        <FormRow
          label="MDP SESSION WINDOWS"
          input1={
            <InputMui label="Identifiant" name="IdWindows" value={form.IdWindows} onChange={handleChange} fullWidth/>}
          input2={
            <InputMui label="Mot de passe" name="MDPWindows" value={form.MDPWindows} onChange={handleChange} fullWidth/>}
        />

        <DividerMui variant="strong" />

        <Soussigne label="Je soussigné…">
          <InputMui
            label="Monsieur..."
            name="Monsieur"
            value={form.Monsieur}
            onChange={handleChange}
            fullWidth
          />
        </Soussigne>

        <Engagement
          title="m’engage à :"
          text={`M’engage à ne jamais diffuser ses identifiants. Ceux-ci sont personnels.
          A respecter la propriété des informations d’ASSI et de la société GORON conformément au règlement intérieur et à la charte SI.

          Je reconnais avoir reçu les consignes d’utilisation.`}
        />
        {/* SIGNATURE + BOUTON */}
        
        <SignatureBlock
          form={form}
          handleChange={handleChange}
          onSaveSignature={handleSaveSignature}
          onSaveNomSignature={handleSaveNomSignature}
        />


          <Box sx={{ maxWidth: 900, mx: "auto", mt: 3 }}>
            <ButtonMui
              type="submit"
              disabled={!signaturesOK || !isValidDateFR(form.date)}
                >
              Envoyer
            </ButtonMui>
          </Box>


         
          <DividerMui variant="strong" sx={{ mt: 3,}} />
         
      </Box>
    </Box>
  );
}

export default FormulaireInformatique;
