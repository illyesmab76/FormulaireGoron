import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function SelectMui({ 
  label, 
  name, 
  value, 
  onChange, 
  options = [], 
  error = false, 
  helperText = "", 
  required = false,
  fullWidth = true, 
  disabled = false,
  sx = {},
  ...props 
}) {
  return (
    <FormControl 
      fullWidth={fullWidth} 
      error={error} 
      required={required} 
      disabled={disabled}
      sx={{ ...sx }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        {...props}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        sx={{
          height: "56px",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectMui;