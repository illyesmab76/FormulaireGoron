// ─── Importation des composants ──────────────────────────────────────────────
import { Box } from "@mui/material";
import Typo from "./Typo";  // Ton composant de texte personnalisé

// ─── Composant principal : Soussigne ─────────────────────────────────────────
// Il représente un bloc "soussigné" : un label au-dessus d'un contenu.
// Le composant est très générique → il peut contenir n'importe quoi en dessous
// du label (une ligne, une signature, un input, etc.)
//
// Props reçues :
//   - label    → texte affiché en haut du bloc (ex : "Soussigné")
//   - children → tout ce qui sera placé en dessous du label
function Soussigne({ label, children }) {
  return (
    // ─── Conteneur général ─────────────────────────────────────────────────
    // width: "100%"   → prend toute la largeur disponible
    // maxWidth: 900   → mais pas plus de 900px
    // mx: "auto"      → centré horizontalement
    // mb: 3           → espace en dessous (3 × 8px = 24px)
    // flexDirection: "column" → empile le label et les enfants verticalement
    <Box
      sx={{
        width: "100%",
        maxWidth: 900,
        mx: "auto",
        mb: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Label du bloc ──────────────────────────────────────────────── */}
      <Typo
        variant="body1"          
        fontWeight={500}         // ← Texte légèrement gras (entre normal et bold)
                                 //    500 = demi-gras, 700 = bold, 400 = normal
        sx={{
          textAlign: "left",     // ← Texte aligné à gauche
          m: 0,                  // ← Supprime tout margin (MUI en ajoute par défaut
                                 //    sur les composants de texte)
          p: 0,                  // ← Supprime tout padding
          lineHeight: 1,         // ← Hauteur de ligne = exactement 1× la taille de la police
                                 //    (pas d'espace supplémentaire au-dessus/en dessous du texte)
          transform: "translateY(6px)", // ← Décale le label de 6px vers le bas
                                        //    pour l'aligner visuellement avec le contenu
                                        //    qui se trouve juste en dessous
        }}
      >
        {label}
      </Typo>

      {/* ── Contenu sous le label ──────────────────────────────────────── */}
      {/* children = tout ce qui sera passé entre les balises du composant */}
      {/* Ex : <Soussigne label="Prénom">                                  */}
      {/*        <InputMui ... />                                           */}
      {/*      </Soussigne>                                                 */}
      {/* Dans cet exemple, <InputMui /> sera affiché ici                  */}
      {children}
    </Box>
  );
}

// ─── Export du composant ─────────────────────────────────────────────────────
export default Soussigne;