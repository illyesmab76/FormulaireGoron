import { useState } from "react";
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function InputWithButton({ 
  label = "Label", 
  inputLabel = "Nom de l'équipement",
  buttonText = "AJOUTER",
  inputWidth = "350px",
  buttonWidth = "150px"
}) {
  const [inputValue, setInputValue] = useState("");
  const [equipements, setEquipements] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setEquipements([...equipements, inputValue]);
      setInputValue(""); // Vider l'input après ajout
    }
  };

  const handleDelete = (index) => {
    setEquipements(equipements.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

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
          width: "fit-content",
        }}
      >
        {/* Input */}
        <TextField
          label={inputLabel}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          variant="outlined"
          sx={{ width: inputWidth }}
        />

        {/* Bouton */}
        <Button
          variant="contained"
          onClick={handleAdd}
          sx={{
            backgroundColor: "#ee773d",
            "&:hover": {
              backgroundColor: "#ee773d",
            },
            textTransform: "uppercase",
            fontWeight: "bold",
            width: buttonWidth,
            height: "56px",
            whiteSpace: "nowrap",
          }}
        >
          {buttonText}
        </Button>
      </Box>

      {/* Liste des équipements ajoutés */}
      {equipements.length > 0 && (
        <Box sx={{ mt: 2, width: "fit-content" }}>
          <List sx={{ bgcolor: "background.paper", border: "1px solid #e0e0e0", borderRadius: 1 }}>
            {equipements.map((equipement, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                    <IconButton 
                      edge="end" 
                      aria-label="delete" 
                      onClick={() => handleDelete(index)}
                      sx={{ color: "#ee773d" }}>
                      <DeleteIcon />
                      </IconButton>
                  </IconButton>
                }
              >
                <ListItemText primary={`${index + 1}. ${equipement}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}

export default InputWithButton;