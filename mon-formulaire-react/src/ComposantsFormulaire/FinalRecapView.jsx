import React from "react";
import { Box, Grid } from "@mui/material";
import InputMui from "../Composants/InputMui";
import Typo from "../Composants/Typo";
import DividerMui from "../Composants/DividerMui";
import RetourButton from "./RetourButton";

function FinalRecapView({ form, onBack }) {
  const loginVPN = `A_${form.trigrammeGenere}`.toUpperCase();
  const ebpValue = form.trigrammeGenere.toUpperCase();

  // Style : Largeur maximale, texte gris anthracite, plus de hauteur
  const recapInputStyle = {
    width: "100%", 
    "& .MuiInputBase-root": {
      height: 60, // Plus haut pour remplir l'espace
      backgroundColor: "#fafafa",
    },
    "& .MuiInputBase-input": {
      color: "#333333 !important", // Gris anthracite (moins agressif que le noir)
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    "& .MuiInputLabel-root": {
      color: "#757575 !important",
    }
  };

  return (
    <Box sx={{ mt: 4, width: "100%" }}>
      <Typo variant="h5" color="lightgrey" fontWeight="bold" mb={4}>
        Récapitulatif
      </Typo>

      <Grid container spacing={4}>
        {/* Colonne Gauche - 50% de la largeur */}
        <Grid item xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <InputMui label="Adresse mail" value={form.emailGenere} sx={recapInputStyle} InputProps={{ readOnly: true }} />
            <InputMui label="Login TSE et VPN" value={loginVPN} sx={recapInputStyle} InputProps={{ readOnly: true }} />
            <InputMui label="Nom de la machine" value={form.nomMachine} sx={recapInputStyle} InputProps={{ readOnly: true }} />
            <InputMui label="Numéro de série" value={form.numeroSerie} sx={recapInputStyle} InputProps={{ readOnly: true }} />
          </Box>
        </Grid>

        {/* Colonne Droite - 50% de la largeur */}
        <Grid item xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <InputMui label="Mot de passe" value={form.passwordGenere} sx={recapInputStyle} InputProps={{ readOnly: true }} />
            <InputMui label="EBP" value={ebpValue} sx={recapInputStyle} InputProps={{ readOnly: true }} />
            <InputMui label="Marque" value={form.marque} sx={recapInputStyle} InputProps={{ readOnly: true }} />
            <InputMui label="Garantie" value={form.garantie} sx={recapInputStyle} InputProps={{ readOnly: true }} />
          </Box>
        </Grid>
      </Grid>

                    <InputMui 
                label="Documents joints" 
                value={`${form.fichiers.length} fichier(s)`} 
                sx={recapInputStyle} 
                InputProps={{ readOnly: true }} 
                />

      <DividerMui variant="strong" sx={{ mt: 8, mb: 3 }} />

      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <RetourButton onRetour={onBack} />
      </Box>
    </Box>
  );
}

export default FinalRecapView;