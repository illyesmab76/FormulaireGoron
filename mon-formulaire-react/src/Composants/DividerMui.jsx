// ─── Importation du composant Divider depuis Material UI ────────────────────
// Divider est une ligne horizontale (ou verticale) utilisée pour séparer du contenu
import Divider from "@mui/material/Divider";

// ─── Objet de configuration des styles selon la variante choisie ─────────────
// Chaque clé ("soft", "medium", "strong") correspond à un niveau de visibilité.
// On déclare cet objet en dehors du composant car il ne change jamais :
// inutile de le recréer à chaque rendu.
const variants = {
  soft: {                    // ← Variante la plus discrète
    borderColor: "grey.300", //    → Couleur claire (MUI utilise une échelle de gris de 50 à 900)
    borderBottomWidth: 1,    //    → Épaisseur de 1px
  },
  medium: {                  // ← Variante moyenne (utilisée par défaut)
    borderColor: "grey.400", //    → Couleur un peu plus sombre
    borderBottomWidth: 1.5,  //    → Épaisseur de 1.5px
  },
  strong: {                  // ← Variante la plus visible
    borderColor: "grey.600", //    → Couleur bien marquée
    borderBottomWidth: 2,    //    → Épaisseur de 2px
  },
};

// ─── Composant principal : DividerMui ────────────────────────────────────────
// Props reçues :
//   - variant → choisit le style parmi "soft", "medium", "strong" (défaut : "medium")
//   - sx      → permet au parent de passer des styles supplémentaires
//   - ...props → récupère toutes les autres propriétés pour les passer au Divider
function DividerMui({ variant = "medium", sx, ...props }) {
  return (
    <Divider
      sx={{
        mb: 4,                  // ← "mb" = margin-bottom → espace en dessous du séparateur
                                //    En MUI, mb: 4 = 4 × 8px = 32px (chaque unité = 8px)
        ...variants[variant],   // ← Étale les styles de la variante choisie
                                //    Ex : si variant = "soft", ça équivaut à écrire
                                //    borderColor: "grey.300", borderBottomWidth: 1
        ...sx,                  // ← Étale les styles passés par le parent
                                //    Placé APRÈS variants → les styles du parent
                                //    peuvent donc ÉCRASER ceux de la variante
      }}
      {...props}  // ← Transmet les autres propriétés au Divider de MUI
    />
  );
}

// ─── Export du composant ─────────────────────────────────────────────────────
export default DividerMui;