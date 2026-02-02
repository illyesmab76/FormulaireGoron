import { Box, Typography, TextField, Button } from "@mui/material";

function InputWithButton({ 
  label = "Label", 
  inputLabel = "Nom de l'équipement",
  inputName = "equipement",
  inputValue = "",
  onInputChange,
  buttonText = "AJOUTER",
  onButtonClick,
  inputWidth = "350px",
  buttonWidth = "150px"
}) {
  return (
    <Box sx={{ mb: 2 }}>
      {/* Texte en haut à gauche */}
      <Typography
        variant="subtitle2"
        sx={{ mb: 1, color: "text.secondary" }}
      >
        {label}
      </Typography>

      {/* Input + Bouton alignés */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "fit-content", // 🔑 Le bloc prend uniquement la place nécessaire
        }}
      >
        {/* Input */}
        <TextField
          label={inputLabel}
          name={inputName}
          value={inputValue}
          onChange={onInputChange}
          variant="outlined"
          sx={{ width: inputWidth }}
        />

        {/* Bouton */}
        <Button
          variant="contained"
          onClick={onButtonClick}
          sx={{
            backgroundColor: "#ee773d",
            "&:hover": {
              backgroundColor: "#d96532",
            },
            textTransform: "uppercase",
            fontWeight: "bold",
            width: buttonWidth,
            height: "56px", // 🔑 Même hauteur que le TextField
            whiteSpace: "nowrap",
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
}

export default InputWithButton;