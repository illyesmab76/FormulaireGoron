// ─── Importation du composant TextField depuis Material UI ──────────────────
// TextField est le composant d'input le plus utilisé en MUI.
// Il combine à l'intérieur lui-même : un input, un label, et un helperText.
import TextField from "@mui/material/TextField";

// ─── Composant principal : InputMui ──────────────────────────────────────────
// C'est un wrapper autour de TextField qui définit des valeurs par défaut,
// pour éviter de les répéter à chaque fois qu'on utilise un input.
//
// Props reçues (avec leurs valeurs par défaut) :
//   - label      → texte affiché comme label de l'input
//   - name       → identifiant du champ (utilisé pour récupérer la valeur)
//   - value      → valeur actuelle du champ (contrôlée par le composant parent)
//   - onChange   → fonction appelée à chaque modification du texte
//   - type       → type de l'input HTML (défaut : "text")
//   - error      → si true, l'input sera affiché en rouge (état d'erreur)
//   - helperText → petit texte affiché sous l'input (ex : un message d'erreur)
//   - required   → si true, le champ sera obligatoire
//   - fullWidth  → si true, l'input prend toute la largeur disponible
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
    // ─── Composant TextField de MUI ────────────────────────────────────────
    <TextField
      label={label}           // ← Texte du label (flottant au-dessus quand l'input est actif)
      name={name}             // ← Nom du champ (ex : "email", "prénom")
      value={value}           // ← Valeur actuelle de l'input
      onChange={onChange}      // ← Fonction appelée à chaque keystroke
      type={type}             // ← Type HTML de l'input (ex : "text", "password", "email")
      error={error}           // ← Si true → bordure rouge + texte d'erreur en rouge
      helperText={helperText} // ← Texte sous l'input (ex : "Ce champ est obligatoire")
                              //    Apparaît en rouge si error={true}
      required={required}     // ← Si true → ajoute un "*" après le label
      fullWidth={fullWidth}   // ← Si true → l'input prend 100% de la largeur
      margin="normal"         // ← Espace autour de l'input (MUI offre "normal" ou "dense")
                              //    "normal" = plus d'espace, "dense" = plus compact
      variant="outlined"      // ← Style de l'input : "outlined" = bordure autour
                              //    (les autres options sont "filled" et "standard")
    />
  );
}

// ─── Export du composant ─────────────────────────────────────────────────────
export default InputMui;