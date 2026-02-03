// ─── Importation nécessaire ──────────────────────────────────────────────────
import TextField from "@mui/material/TextField";

// ─── Composant principal : InputMui ──────────────────────────────────────────
function InputMui({
  label,
  name,
  value,
  onChange,
  type = "text",
  error = false,
  helperText = "",
  required = false,
  fullWidth = true,
  disabled = false, // ← Acceptation de la prop disabled
}) {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      error={error}
      helperText={helperText}
      required={required}
      fullWidth={fullWidth}
      disabled={disabled} // ← Transmission au composant MUI
      margin="normal"
      variant="outlined"
    />
  );
}

export default InputMui;