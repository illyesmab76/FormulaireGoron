import { Box } from "@mui/material";
import InputMui from "../Composants/InputMui";
import DividerMui from "../Composants/DividerMui";

function InfoPCRow({ nomMachine, marque, numeroSerie, garantie, onChange }) {
  // Style pour garantir le 33.33% identique aux autres lignes
  const columnStyle = { flex: "0 0 calc((100% - 32px) / 3)" };

  return (
    <Box sx={{ width: "100%" }}>
      <DividerMui sx={{ my: 4 }} />
      
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {/* Ligne 1 : Nom machine et Marque */}
        <Box sx={columnStyle}>
          <InputMui
            label="Nom de la machine"
            name="nomMachine"
            value={nomMachine}
            onChange={onChange}
            fullWidth
          />
        </Box>
        <Box sx={columnStyle}>
          <InputMui
            label="Marque"
            name="marque"
            value={marque}
            onChange={onChange}
            fullWidth
          />
        </Box>
        <Box sx={columnStyle} /> {/* Espace vide pour compléter la ligne 1 */}

        {/* Ligne 2 : Numéro de série et Garantie */}
        <Box sx={columnStyle}>
          <InputMui
            label="Numéro de série"
            name="numeroSerie"
            value={numeroSerie}
            onChange={onChange}
            fullWidth
          />
        </Box>
        <Box sx={columnStyle}>
          <InputMui
            label="Garantie"
            name="garantie"
            value={garantie}
            onChange={onChange}
            fullWidth
          />
        </Box>
      </Box>
    </Box>
  );
}

export default InfoPCRow;