import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import InputMui from "../Composants/InputMui";
import Typo from "../Composants/Typo";
import DividerMui from "../Composants/DividerMui";
import RetourButton from "./RetourButton";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function FinalRecapView({ form, onBack }) {
  const loginVPN = `A_${form.trigrammeGenere}`.toUpperCase();
  const ebpValue = form.trigrammeGenere.toUpperCase();

  const recapInputStyle = {
    width: "100%", 
    "& .MuiInputBase-root": {
      height: 60,
      backgroundColor: "#fafafa",
    },
    "& .MuiInputBase-input": {
      color: "#333333 !important",
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    "& .MuiInputLabel-root": {
      color: "#757575 !important",
    }
  };

  const FileList = ({ files, label }) => (
    <Box sx={{ mt: 1, mb: 2 }}>
      <Typography variant="caption" sx={{ color: "#ee773d", fontWeight: "bold", display: "block", mb: 0.5 }}>
        {label} :
      </Typography>
      {files && files.length > 0 ? (
        files.map((f, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
            <InsertDriveFileIcon sx={{ fontSize: 16, color: "#757575" }} />
            <Typography variant="caption">{f.name}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="caption" sx={{ fontStyle: "italic" }}>Aucun fichier</Typography>
      )}
    </Box>
  );

  return (
    <Box sx={{ mt: 4, width: "100%" }}>
      <Typo variant="h5" color="lightgrey" fontWeight="bold" mb={4}>
        Récapitulatif Final
      </Typo>

      {/* SECTION 1 : IDENTIFIANTS */}
      <Typography variant="subtitle1" sx={{ color: "#ee773d", fontWeight: "bold", mb: 2 }}>1. Identifiants et MDP</Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <InputMui label="Adresse mail" value={form.emailGenere} sx={recapInputStyle} InputProps={{ readOnly: true }} />
            <InputMui label="Login TSE et VPN" value={loginVPN} sx={recapInputStyle} InputProps={{ readOnly: true }} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <InputMui label="Mot de passe" value={form.passwordGenere} sx={recapInputStyle} InputProps={{ readOnly: true }} />
            <InputMui label="EBP" value={ebpValue} sx={recapInputStyle} InputProps={{ readOnly: true }} />
          </Box>
        </Grid>
      </Grid>

      <DividerMui sx={{ my: 4 }} />

      {/* SECTION 2 : POSTE INFORMATIQUE */}
      <Typography variant="subtitle1" sx={{ color: "#ee773d", fontWeight: "bold", mb: 2 }}>2. Information PC</Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <InputMui label="Nom de la machine" value={form.nomMachine} sx={recapInputStyle} InputProps={{ readOnly: true }} />
            <InputMui label="Marque" value={form.marque} sx={recapInputStyle} InputProps={{ readOnly: true }} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <InputMui label="Numéro de série" value={form.numeroSerie} sx={recapInputStyle} InputProps={{ readOnly: true }} />
            <InputMui label="Garantie" value={form.garantie} sx={recapInputStyle} InputProps={{ readOnly: true }} />
          </Box>
        </Grid>
      </Grid>
      <FileList files={form.fichiers} label="Pièces jointes Poste" />

      <DividerMui sx={{ my: 4 }} />

      {/* SECTION 3 : TÉLÉPHONIE */}
      <Typography variant="subtitle1" sx={{ color: "#ee773d", fontWeight: "bold", mb: 2 }}>3. Informations Téléphone</Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <InputMui label="Marque Téléphone" value={form.marqueTel || "N/A"} sx={recapInputStyle} InputProps={{ readOnly: true }} />
            <InputMui label="IMEI / Série" value={form.imei || "N/A"} sx={recapInputStyle} InputProps={{ readOnly: true }} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <InputMui label="Modèle Téléphone" value={form.modeleTel || "N/A"} sx={recapInputStyle} InputProps={{ readOnly: true }} />
            <InputMui label="Garantie Téléphone" value={form.garantieTel || "N/A"} sx={recapInputStyle} InputProps={{ readOnly: true }} />
          </Box>
        </Grid>
      </Grid>
      <FileList files={form.fichiersTel} label="Pièces jointes Téléphone" />

      <DividerMui sx={{ my: 4 }} />

      {/* SECTION 4 : ÉQUIPEMENTS SUPPLÉMENTAIRES */}
      <Typography variant="subtitle1" sx={{ color: "#ee773d", fontWeight: "bold", mb: 2 }}>4. Équipements Supplémentaires</Typography>
      {form.equipements && form.equipements.length > 0 ? (
        form.equipements.map((item, index) => (
          <Paper key={index} elevation={0} sx={{ p: 2, mb: 2, bgcolor: "#fafafa", border: "1px solid #eee" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2"><strong>Nom de l'équipement :</strong> {item.nom}</Typography>
                <Typography variant="body2"><strong>Modèle de l'équipement :</strong> {item.modele}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2"><strong>Numéro de série :</strong> {item.sn}</Typography>
                <Typography variant="body2"><strong>Garantie :</strong> {item.garantie}</Typography>
              </Grid>
            </Grid>
            {item.fichier && (
              <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}>
                <InsertDriveFileIcon sx={{ fontSize: 16, color: "#ee773d" }} />
                <Typography variant="caption">Fichier joint : {item.fichier.name}</Typography>
              </Box>
            )}
          </Paper>
        ))
      ) : (
        <Typography variant="body2" sx={{ fontStyle: "italic", color: "grey.500" }}>Aucun équipement supplémentaire.</Typography>
      )}

      <DividerMui variant="strong" sx={{ mt: 6, mb: 3 }} />

      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <RetourButton onRetour={onBack} />
      </Box>
    </Box>
  );
}

export default FinalRecapView;