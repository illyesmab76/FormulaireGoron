import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function SelectMui({
  label = "Modèle",
  name = "modele",
  value,
  onChange,
  required = false,
  fullWidth = true,
  options = [
    { label: "Modèle technicien", value: "technicien" },
    { label: "Modèle direction", value: "direction" },
    { label: "Modèle admin", value: "admin" },
  ],
}) {
  return (
    <FormControl fullWidth={fullWidth} required={required}>
      <InputLabel>{label}</InputLabel>

      <Select
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        renderValue={(selected) =>
          selected ? options.find((o) => o.value === selected)?.label : ""
        }
      >
        {/* ── Texte par défaut quand rien n'est sélectionné ──────────── */}
        <MenuItem value="" disabled>
          Selectionner un modèle
        </MenuItem>

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