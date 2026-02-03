import { Box } from "@mui/material";
import InputMui from "../Composants/InputMui";
import DividerMui from "../Composants/DividerMui";

function GeneratedEmailRow({ email, password }) {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Ligne de séparation entre le bloc saisie et le bloc résultat */}
      <DividerMui sx={{ my: 4 }} />

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        {/* Colonne 1 : Email (Forcé à 33% pour s'aligner sous le NOM) */}
        <Box sx={{ width: "33.33%" }}>
          <InputMui
            label="Adresse email générée"
            value={email}
            fullWidth
            InputProps={{ readOnly: true }}
          />
        </Box>

        {/* Colonne 2 : Mot de passe (Forcé à 33% pour s'aligner sous le PRÉNOM) */}
        <Box sx={{ width: "33.33%" }}>
          <InputMui
            label="Mot de passe généré"
            value={password}
            fullWidth
            InputProps={{ readOnly: true }}
          />
        </Box>

        {/* Colonne 3 : Vide (Forcé à 33% pour s'aligner sous la DATE) */}
        <Box sx={{ width: "33.33%" }} />
      </Box>
    </Box>
  );
}

export default GeneratedEmailRow;