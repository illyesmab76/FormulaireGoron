import { Box } from "@mui/material";
import SelectMui from "./SelectMui";
import ButtonMui from "../Composants/ButtonMui";

function ModelValidationRow({ value, onChange, onValidate, disabled }) {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
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

      <Box sx={{ flex: "0 0 calc((100% - 32px) / 3)" }}>
        <ButtonMui
          onClick={() => {
            console.log("🔵 BOUTON CLIQUÉ");
            onValidate();
          }}
          disabled={disabled}
          sx={{
            backgroundColor: "#ee773d",
            "&:hover": { backgroundColor: "#d96532" },
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