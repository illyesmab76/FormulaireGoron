// ─── Importation des composants ──────────────────────────────────────────────
// Box       → conteneur polyvalent de MUI
import { Box } from "@mui/material";
// TypoLabel → ton composant de texte personnalisé (probablement stylisé pour les labels)
import TypoLabel from "./TypoLabel";
// BoxLabel  → ton composant de conteneur personnalisé (celui qu'on a déjà vu !)
import BoxLabel from "./BoxLabel";

// ─── Composant principal : FormRow ───────────────────────────────────────────
// Il représente UNE ligne de formulaire composée d'un label et d'un ou deux inputs.
// Props reçues :
//   - label  → texte affiché à gauche (ex : "Prénom")
//   - input1 → premier champ d'entrée (ex : un composant <InputMui />)
//   - input2 → deuxième champ d'entrée (optionnel, peut être undefined)
function FormRow({ label, input1, input2 }) {
  return (
    // ─── Conteneur de la ligne ─────────────────────────────────────────────
    // display: "flex"          → place les enfants côte à côte horizontalement
    // alignItems: "flex-start" → aligne les éléments en haut (utile si les
    //                             inputs ont des tailles différentes)
    // gap: 2                   → espace entre chaque élément (2 × 8px = 16px)
    // mb: 2                    → espace en dessous de la ligne (2 × 8px = 16px)
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        mb: 2,
      }}
    >
      {/* ── Colonne "Label" ──────────────────────────────────────────────── */}
      {/* BoxLabel est le conteneur, TypoLabel est le texte à l'intérieur   */}
      {/* On wrappe le label dans BoxLabel pour qu'il ait la même largeur   */}
      {/* que les autres colonnes et que tout reste bien aligné             */}
      <BoxLabel>
        <TypoLabel>{label}</TypoLabel>
      </BoxLabel>

      {/* ── Colonne "Input 1" ────────────────────────────────────────────── */}
      {/* input1 est un composant passé en prop (ex : <InputMui label="..." />) */}
      {/* BoxLabel lui donne une largeur cohérente avec le reste de la ligne   */}
      <BoxLabel>{input1}</BoxLabel>

      {/* ── Colonne "Input 2" ────────────────────────────────────────────── */}
      {/* Même fonctionnement que input1                                     */}
      {/* Si input2 n'est pas passé, BoxLabel sera juste vide (rien affiché) */}
      <BoxLabel>{input2}</BoxLabel>
    </Box>
  );
}

// ─── Export du composant ─────────────────────────────────────────────────────
export default FormRow;