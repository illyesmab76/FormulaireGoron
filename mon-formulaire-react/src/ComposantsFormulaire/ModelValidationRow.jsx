import { Box } from "@mui/material";
import SelectMui from "./SelectMui";
import ButtonMui from "../Composants/ButtonMui";

function ModelValidationRow({ value, onChange, onValidate, disabled }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 2,
      }}
    >
      {/* Même largeur que "Nom" : on force flex: "0 0 calc((100% - 32px) / 3)" */}
      {/* 32px = 2 gaps de 16px, /3 car 3 colonnes au-dessus */}
      <Box sx={{ flex: "0 0 calc((100% - 32px) / 3)" }}>
        <SelectMui
          label="Modèle"
          name="modele"
          value={value}
          onChange={onChange}
          required
          options={[
            { label: "Modèle technicien", value: "technicien" },
            { label: "Modèle direction", value: "direction" },
          ]}
        />
      </Box>

      {/* Ce Box prend la largeur de "Prénom" pour l'alignement */}
      {/* Le bouton à l'intérieur fait juste 50% de cette largeur */}
      <Box sx={{ flex: "0 0 calc((100% - 32px) / 3)" }}>
        <ButtonMui
          onClick={onValidate}
          disabled={disabled}
          sx={{
            backgroundColor: "#ee773d",
            "&:hover": {
              backgroundColor: "#d96532",
            },
            width: "50%",
            height: 55,
            textTransform: "uppercase",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          Valider
        </ButtonMui>
      </Box>
    </Box>
  );
}

export default ModelValidationRow;