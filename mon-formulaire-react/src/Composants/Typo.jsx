// ─── Importation du composant Typography depuis Material UI ─────────────────
// Typography est le composant de MUI destiné à l'affichage de texte.
// Il offre des variantes prédéfinies (h1, h2, body1, body2, etc.)
import Typography from "@mui/material/Typography";

// ─── Composant principal : Typo ──────────────────────────────────────────────
// C'est ton wrapper personnalisé autour de Typography.
// Il prédéfinit un style par défaut cohérent avec ton projet
// (couleur orange, texte gras, aligné à gauche), que tu peux
// ensuite surcharger facilement prop par prop.
//
// Props reçues (avec leurs valeurs par défaut) :
//   - children   → le texte à afficher
//   - variant    → taille/style du texte selon les variantes MUI
//                  (défaut : "body1" = texte standard ~16px)
//   - color      → couleur du texte (défaut : orange de ton projet)
//   - align      → alignement du texte (défaut : "left")
//   - mb         → espace en dessous du texte (défaut : 2 = 16px)
//   - fontWeight → épaisseur du texte (défaut : "bold" = gras)
//   - ...props   → toutes les autres propriétés sont récupérées
//                  et transmises au Typography (comme on a vu dans ButtonMui)
function Typo({
  children,
  variant = "body1",
  color = "#ee773d",
  align = "left",
  mb = 2,
  fontWeight = "bold",
  ...props
}) {
  return (
    <Typography
      variant={variant}   // ← Variante MUI (ex : "h1", "h2", "body1", "body2", etc.)
      sx={{
        color,            // ← Couleur du texte (raccourci pour color: color)
        textAlign: align, // ← Alignement : "left", "center", "right"
        fontWeight,       // ← Épaisseur : "bold", "normal", ou un nombre (400, 500, 700...)
        mb,               // ← Margin-bottom (espace en dessous)
      }}
      // ─── Spread des props restantes ──────────────────────────────────────
      // Ça permet de passer des propriétés supplémentaires depuis le parent.
      // Par exemple, dans ton code on a déjà vu :
      //   <Typo sx={{ textAlign: "left", fontWeight: 500 }}>...</Typo>
      // Le "sx" ici va être transmis via ...props au Typography.
      // ⚠️ Attention : le "sx" passé par le parent va ÉCRASER le "sx"
      // défini juste au-dessus, pas se fusionner avec lui.
      {...props}
    >
      {children}
    </Typography>
  );
}

// ─── Export du composant ─────────────────────────────────────────────────────
export default Typo;