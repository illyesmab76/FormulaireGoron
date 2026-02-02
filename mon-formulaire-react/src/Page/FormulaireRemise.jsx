import { useState } from "react";
import { Box } from "@mui/material";
import InputMui from "../Composants/InputMui";
import Typo from "../Composants/Typo";
import DividerMui from "../Composants/DividerMui";
import Soussigne from "../Composants/Soussigne";
import Engagement from "../Composants/Engagement";
import SignatureBlock from "../Composants/SignatureBlock"
import DateInput from "../Composants/DateInput";
import ValidationRemise from "../Composants/ValidationRemise";
import SubmitButtonWithTooltip from "../Composants/SubmitButtonWithTooltip";
import InputWithButton from "../Composants/InputWithButton";

function FormulaireRemise() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    date: "",
    NomEquipement: "",
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

     if (!isValid) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
  }
  alert("Le formulaire a bien été envoyé !");
    console.log(form);
  };

  const handleSaveSignature = (image) => {
  setForm((prev) => ({ ...prev, signatureImage: image }));
  };

  const handleSaveNomSignature = (image) => {
  setForm((prev) => ({ ...prev, NomSignature: image }));
  };

  const { isValid } = ValidationRemise(form);

  return (

    <Box sx={{ minHeight: "100vh", p: 4 }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1200, mx: "auto" }}>
        
        <Typo variant="h3" color="#ee773d" fontWeight="bold" mb={3}>
          Remise informatique
        </Typo>

        <DividerMui variant="strong" />

        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <InputMui label="Nom" name="nom" value={form.nom} onChange={handleChange} fullWidth  />
          <InputMui label="Prénom" name="prenom" value={form.prenom} onChange={handleChange} fullWidth />
          <DateInput label="Date (JJ/MM/AAAA)" name="date" value={form.date} onChange={handleChange} required/>
        </Box>

        <DividerMui variant="strong" />

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







        <Soussigne label="Je soussigné…">
          <InputMui label="Monsieur..." name="Monsieur" value={form.Monsieur} onChange={handleChange} fullWidth/>
        </Soussigne>

        <Engagement
          title="m’engage à :"
          text={`- A faire bon usage du matériel informatique
                - De ne pas laisser celui-ci dans mon véhicule
                - De veiller à ne pas conserver les données de l'entreprise sur des supports non sécurisés 
                - A respecter la charte des système d'information en annexe 
                - A respecter le règlement intérieur en annexe 

          Je reconnais avoir reçu les consignes d'utilisation de tous ces équipements avec une présentation des différente procédures internes  .`}/>
        
        <SignatureBlock form={form} handleChange={handleChange} onSaveSignature={handleSaveSignature} onSaveNomSignature={handleSaveNomSignature}/>

          <Box sx={{ maxWidth: 900, mx: "auto", mt: 3 }}>
            <SubmitButtonWithTooltip
              disabled={!isValid}
              tooltip="Tous les champs doivent être remplis correctement pour envoyer le formulaire"
            >
              Envoyer
            </SubmitButtonWithTooltip>
            </Box>


          <DividerMui variant="strong" sx={{ mt: 3,}} />
         
      </Box>
    </Box>

    );
}

  export default FormulaireRemise;