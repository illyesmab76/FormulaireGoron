// ─── Importation des composants depuis Material UI ──────────────────────────
// Box        → conteneur polyvalent (comme une "div" améliorée)
// Typography → composant pour afficher du texte avec des styles MUI
import { Box, Typography } from "@mui/material";
// ─── Importation du composant Typo personnalisé ─────────────────────────────
// C'est ton propre composant de texte (probablement un wrapper autour de Typography)
import Typo from "./Typo";

// ─── Composant principal : Engagement ────────────────────────────────────────
// Props reçues :
//   - title → texte du titre affiché au-dessus de la carte
//   - text  → contenu descriptif affiché à l'intérieur de la carte
function Engagement({ title, text }) {
  return (
    // ─── Conteneur général ──────────────────────────────────────────────────
    // maxWidth: 900  → largeur maximale de 900px (empêche de s'étirer trop sur un grand écran)
    // mx: "auto"     → centre le conteneur horizontalement
    //                   (margin-left et margin-right automatiques)
    // mb: 4          → espace en dessous (4 × 8px = 32px)
    <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>

      {/* ── Titre de la carte ──────────────────────────────────────────────── */}
      {/* On utilise ici "Typo" (composant personnalisé) et non "Typography"   */}
      {/* (composant MUI natif). Les deux font du même côté, mais Typo a      */}
      {/* probablement des styles par défaut préconfigurés.                    */}
      <Typo
        variant="body1"            // ← Taille de texte standard de MUI (16px par défaut)
        fontWeight="bold"          // ← Met le titre en gras
        sx={{ textAlign: "left", mb: 1 }} // ← Aligne à gauche + petit espace en dessous (8px)
      >
        {title}
      </Typo>

      {/* ── Carte / conteneur du texte ─────────────────────────────────────── */}
      <Box
        sx={{
          border: "1px solid rgba(0,0,0,0.3)", // ← Bordure noire à 30% d'opacité (gris léger)
                                                //    rgba = Rouge, Vert, Bleu, Opacité
          borderRadius: 2,                      // ← Coins arrondis (2 × 4px = 8px)
          p: 2,                                 // ← Padding interne (2 × 8px = 16px)
                                                //    (espace entre la bordure et le texte)
          backgroundColor: "#fafafa",           // ← Fond très légèrement gris (presque blanc)
        }}
      >
        {/* ── Texte descriptif à l'intérieur de la carte ──────────────────── */}
        <Typography
          variant="body2"          // ← Taille de texte légèrement plus petite que body1 (14px)
          sx={{
            lineHeight: 1.6,       // ← Espacement entre les lignes de texte
                                   //    (1.6 × la taille de la police) → très lisible
            whiteSpace: "pre-line", // ← Respecte les sauts de ligne (\n) dans le texte
                                   //    Ex : si "text" contient "\n", un saut de ligne sera affiché
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

// ─── Export du composant ─────────────────────────────────────────────────────
export default Engagement;