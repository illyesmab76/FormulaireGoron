import TextField from "@mui/material/TextField";

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
      margin="normal"
      variant="outlined"
    />
  );
}

export default InputMui;
