import { Box } from "@mui/material";
import InputMui from "../Composants/InputMui";
import DatePickerMui from "./DatePickerMui";

function IdentityRow({ form, onChange, disabled }) {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        gap: 2, 
        mt: 2,
        width: "100%",
        alignItems: "flex-start",
        boxSizing: "border-box"
      }}
    >
      <Box sx={{ flex: "0 0 calc(33.33% - 11px)", maxWidth: "calc(33.33% - 11px)" }}>
        <InputMui
          label="Nom"
          name="nom"
          value={form.nom}
          onChange={onChange}
          disabled={disabled}
        />
      </Box>
      <Box sx={{ flex: "0 0 calc(33.33% - 11px)", maxWidth: "calc(33.33% - 11px)" }}>
        <InputMui
          label="Prénom"
          name="prenom"
          value={form.prenom}
          onChange={onChange}
          disabled={disabled}
        />
      </Box>
      <Box sx={{ flex: "0 0 calc(33.34% - 11px)", maxWidth: "calc(33.34% - 11px)" }}>
        <DatePickerMui
          label="Date d'arrivée"
          name="date"
          value={form.date}
          onChange={onChange}
          disabled={disabled}
        />
      </Box>
    </Box>
  );
}

export default IdentityRow;