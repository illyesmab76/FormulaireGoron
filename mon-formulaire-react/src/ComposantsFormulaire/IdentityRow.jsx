import { Box } from "@mui/material";
import InputMui from "../Composants/InputMui";
import DateTodayInput from "./DateTodayInput";

function IdentityRow({ form, onChange, disabled }) {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2, mt: 2 }}>
      {/* NOM - 33.33% */}
      <Box sx={{ width: "33.33%" }}>
        <InputMui
          label="Nom"
          name="nom"
          value={form.nom}
          onChange={onChange}
          disabled={disabled}
          fullWidth
        />
      </Box>

      {/* PRÉNOM - 33.33% */}
      <Box sx={{ width: "33.33%" }}>
        <InputMui
          label="Prénom"
          name="prenom"
          value={form.prenom}
          onChange={onChange}
          disabled={disabled}
          fullWidth
        />
      </Box>

      {/* DATE - 33.33% (Reste modifiable) */}
      <Box sx={{ width: "33.33%" }}>
        <DateTodayInput
          label="Date d'entrée"
          name="date"
          value={form.date}
          onChange={onChange}
          fullWidth
          // On ne passe pas "disabled" ici pour qu'elle reste libre
        />
      </Box>
    </Box>
  );
}

export default IdentityRow;