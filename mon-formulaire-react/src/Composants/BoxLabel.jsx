// ─── Importation du composant Box depuis la bibliothèque Material UI (MUI) ────
// Box est un composant très polyvalent qui fonctionne comme une "div" améliorée.
// Il permet de styliser facilement avec la propriété "sx".
import { Box } from "@mui/material";

// ─── Création d'un composant réutilisable appelé "BoxLabel" ─────────────────
// Entre parenthèses, on destructure les props (propriétés) passées au composant :
//   - children  → le contenu qu'on placera à l'intérieur (texte, composants, etc.)
//   - width     → la largeur du conteneur (par défaut "100%")
//   - align     → l'alignement des éléments à l'intérieur (par défaut "flex-start")
function BoxLabel({ children, width = "100%", align = "flex-start" }) {
  // ─── Retourne le JSX (ce qui sera affiché sur l'écran) ────────────────────
  return (
    // ─── Composant Box de MUI ────────────────────────────────────────────────
    // "sx" est un objet qui permet de définir les styles CSS directement ici.
    <Box
      sx={{
        width,                // ← Largeur du Box (valeur reçue via props ou "100%" par défaut)
        display: "flex",      // ← Active le mode Flexbox pour gérer le positionnement des enfants
        alignItems: align,    // ← Aligne verticalement les éléments à l'intérieur du Box
      }}
    >
      {/* ── Affiche le contenu passé entre les balises du composant ──────── */}
      {/* Exemple : <BoxLabel>Bonjour</BoxLabel> → "children" = "Bonjour"     */}
      {children}
    </Box>
  );
}

// ─── Export du composant pour pouvoir l'utiliser dans d'autres fichiers ─────
export default BoxLabel;