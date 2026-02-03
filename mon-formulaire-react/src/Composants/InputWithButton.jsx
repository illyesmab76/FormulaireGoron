// ─── Importation de useState depuis React ───────────────────────────────────
// useState permet de créer des variables "réactives" : quand leur valeur change,
// le composant se reaffiche automatiquement.
import { useState } from "react";

// ─── Importation des composants depuis Material UI ──────────────────────────
// Box              → conteneur polyvalent
// Typography       → composant de texte
// TextField        → composant d'input
// Button           → composant de bouton
// List             → conteneur de liste
// ListItem         → un élément dans la liste
// ListItemText     → texte à l'intérieur d'un ListItem
// IconButton       → bouton qui affiche uniquement une icône
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from "@mui/material";
// ─── Importation de l'icône "poubelle" depuis les icônes MUI ────────────────
import DeleteIcon from "@mui/icons-material/Delete";

// ─── Composant principal : InputWithButton ───────────────────────────────────
// Un input + un bouton "Ajouter" qui permet de créer une liste dynamique.
// L'utilisateur tape un texte, appuie sur "Ajouter" (ou Enter), et l'élément
// apparaît dans une liste en dessous avec un bouton de suppression.
//
// Props reçues (avec leurs valeurs par défaut) :
//   - label      → texte affiché au-dessus de l'input
//   - inputLabel → placeholder/label de l'input lui-même
//   - buttonText → texte du bouton
//   - inputWidth → largeur de l'input
//   - buttonWidth → largeur du bouton
function InputWithButton({ 
  label = "Label", 
  inputLabel = "Nom de l'équipement",
  buttonText = "AJOUTER",
  inputWidth = "350px",
  buttonWidth = "150px"
}) {
  // ─── État local : valeur actuelle de l'input ─────────────────────────────
  // inputValue       → ce qui est écrit dans l'input en ce moment
  // setInputValue    → fonction pour mettre à jour inputValue
  const [inputValue, setInputValue] = useState("");

  // ─── État local : liste des équipements ajoutés ─────────────────────────
  // equipements      → tableau contenant tous les éléments ajoutés
  // setEquipements   → fonction pour mettre à jour ce tableau
  const [equipements, setEquipements] = useState([]);

  // ─── Fonction : ajouter un équipement à la liste ────────────────────────
  const handleAdd = () => {
    // trim() supprime les espaces avant/après le texte
    // On vérifie que l'input n'est pas vide avant d'ajouter
    if (inputValue.trim() !== "") {
      // On crée un nouveau tableau avec les anciens éléments + le nouveau
      // [...equipements] = copie du tableau actuel (on ne modifie jamais l'état directement)
      setEquipements([...equipements, inputValue]);
      setInputValue(""); // On vide l'input après l'ajout
    }
  };

  // ─── Fonction : supprimer un équipement par son index ────────────────────
  // "index" = position de l'élément dans le tableau (commence à 0)
  const handleDelete = (index) => {
    // filter() crée un nouveau tableau en gardant uniquement les éléments
    // qui ne correspondent PAS à l'index à supprimer.
    // "_" = on n'utilise pas la valeur de l'élément, on ne se soucie que de "i" (son index)
    setEquipements(equipements.filter((_, i) => i !== index));
  };

  // ─── Fonction : permettre l'ajout en appuyant sur la touche Enter ────────
  const handleKeyPress = (e) => {
    // e.key = la touche qui a été appuyée
    if (e.key === "Enter") {
      handleAdd(); // On appelle la même fonction que le bouton "Ajouter"
    }
  };

  // ─── Rendu du composant ──────────────────────────────────────────────────
  return (
    // ─── Conteneur général ───────────────────────────────────────────────
    <Box sx={{ mb: 2 }}>
      {/* ── Label au-dessus de l'input ─────────────────────────────────── */}
      {/* color: "text.secondary" → couleur grise par défaut dans le thème MUI */}
      <Typography
        variant="subtitle2"
        sx={{ mb: 1, color: "text.secondary" }}
      >
        {label}
      </Typography>

      {/* ── Conteneur horizontal : Input + Bouton côte à côte ──────────── */}
      {/* width: "fit-content" → le conteneur s'adapte à la taille de son contenu */}
      {/* au lieu de prendre toute la largeur disponible                          */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",  // ← Centre verticalement l'input et le bouton
          gap: 2,                // ← Espace entre l'input et le bouton (16px)
          width: "fit-content",
        }}
      >
        {/* ── Input ────────────────────────────────────────────────────── */}
        <TextField
          label={inputLabel}
          value={inputValue}                              // ← Valeur contrôlée par l'état
          onChange={(e) => setInputValue(e.target.value)} // ← Met à jour l'état à chaque keystroke
          onKeyPress={handleKeyPress}                     // ← Écoute la touche Enter
          variant="outlined"
          sx={{ width: inputWidth }}
        />

        {/* ── Bouton "Ajouter" ─────────────────────────────────────────── */}
        <Button
          variant="contained"
          onClick={handleAdd}             // ← Appelle handleAdd quand on clique
          sx={{
            backgroundColor: "#ee773d",   // ← Même orange que dans ton ButtonMui
            "&:hover": {
              backgroundColor: "#ee773d", // ← Couleur identique au hover (pas de changement)
            },
            textTransform: "uppercase",   // ← Met le texte en majuscules
            fontWeight: "bold",           // ← Texte en gras
            width: buttonWidth,           // ← Largeur du bouton
            height: "56px",               // ← Hauteur fixe pour aligner avec l'input
            whiteSpace: "nowrap",         // ← Empêche le texte de sauter de ligne
          }}
        >
          {buttonText}
        </Button>
      </Box>

      {/* ── Liste des équipements ajoutés ────────────────────────────────── */}
      {/* Le "&&" = rendu conditionnel : la liste n'apparaît que si elle n'est */}
      {/* pas vide. Si equipements.length === 0, rien n'est affiché.          */}
      {equipements.length > 0 && (
        <Box sx={{ mt: 2, width: "fit-content" }}>
          {/* List = conteneur de la liste avec une bordure et un fond blanc */}
          <List sx={{ bgcolor: "background.paper", border: "1px solid #e0e0e0", borderRadius: 1 }}>
            {/* ── On boucle sur chaque équipement avec .map() ─────────────── */}
            {/* .map() parcourt le tableau et retourne un composant pour chaque élément */}
            {/* "equipement" = la valeur actuelle (ex : "Téléphone")          */}
            {/* "index" = sa position dans le tableau (0, 1, 2...)            */}
            {equipements.map((equipement, index) => (
              <ListItem
                key={index}  // ← React a besoin d'une clé unique pour chaque élément de liste
                // ─── secondaryAction ─────────────────────────────────────────

                // Propriété de ListItem qui place un élément à DROITE          
                // de la ligne automatiquement
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                    {/* ⚠️ Note : il y a un IconButton imbriqué dans un autre  */}
                    {/* IconButton ici. Le deuxième IconButton (celui avec la   */}
                    {/* couleur orange) est celui qui affiche vraiment l'icône. */}
                    {/* Le premier (externe) est probablement un doublon.       */}
                    <IconButton 
                      edge="end" 
                      aria-label="delete" 
                      onClick={() => handleDelete(index)}
                      sx={{ color: "#ee773d" }}>  {/* ← Couleur de l'icône poubelle */}
                      <DeleteIcon />
                    </IconButton>
                  </IconButton>
                }
              >
                {/* ── Texte de l'élément ─────────────────────────────────── */}
                {/* index + 1 car les index commencent à 0, mais on veut      */}
                {/* afficher la numérotation à partir de 1                     */}
                <ListItemText primary={`${index + 1}. ${equipement}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}

// ─── Export du composant ─────────────────────────────────────────────────────
export default InputWithButton;