import TextField from "@mui/material/TextField";

function InputMui({
  label, name, value, onChange, type = "text",
  error = false, helperText = "", required = false,
  fullWidth = true, disabled = false, sx = {}, ...props
}) {
  return (
    <TextField
      {...props}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      error={error}
      helperText={helperText}
      required={required}
      fullWidth={fullWidth}
      disabled={disabled}
      variant="outlined"
      sx={{ ...sx }} 
    />
  );
}

export default InputMui;