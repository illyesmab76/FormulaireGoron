import { Box } from "@mui/material";
import SelectMui from "./SelectMui";
import ButtonMui from "../Composants/ButtonMui";

function ModelValidationRow({ value, onChange, onValidate, disabled }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Box 
        sx={{ 
          display: "flex", 
          gap: 2, 
          width: "100%", 
          alignItems: "flex-start",
          boxSizing: "border-box"
        }}
      >
        <Box sx={{ flex: "0 0 calc(33.33% - 11px)", maxWidth: "calc(33.33% - 11px)" }}>
          <SelectMui
            label="Modèle"
            name="modele"
            value={value}
            onChange={onChange}
            options={[
              { value: "technicien", label: "Modèle technicien" },
              { value: "direction", label: "Modèle direction" },
              { value: "admin", label: "Modèle admin" }
              
            ]}
          />
        </Box>
        
        <Box sx={{ flex: "0 0 calc(16.665% - 5.5px)", maxWidth: "calc(16.665% - 5.5px)" }}>
          <ButtonMui
            onClick={onValidate}
            disabled={disabled}
            variant="contained"
            fullWidth
            sx={{ 
              height: "56px",
              backgroundColor: "#ee773d",
              "&:hover": {
                backgroundColor: "#d66835"
              }
            }}
          >
            VALIDER
          </ButtonMui>
        </Box>
        
        <Box sx={{ flex: "0 0 calc(50% - 16.5px)", maxWidth: "calc(50% - 16.5px)" }} />
      </Box>
    </Box>
  );
}

export default ModelValidationRow;