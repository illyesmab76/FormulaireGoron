// ─── Importation du composant Button depuis Material UI ─────────────────────
// Button est un composant de bouton déjà stylisé fourni par MUI.
import Button from "@mui/material/Button";

// ─── Création d'un composant réutilisable appelé "ButtonMui" ────────────────
// On destructure les props :
//   - children  → le texte affiché sur le bouton (par défaut "Envoyer")
//   - ...props  → récupère TOUTES les autres propriétés passées au composant
//                 et les regroupe dans un objet appelé "props"
//                 (on appelle ça le "rest operator" ou "spread")
function ButtonMui({ children = "Envoyer", ...props }) {
  return (
    // ─── Composant Button de MUI ─────────────────────────────────────────────
    <Button
      variant="contained"   // ← Style du bouton : "contained" = bouton plein avec couleur de fond
      fullWidth             // ← Le bouton prend toute la largeur du conteneur parent
      // ─── "sx" : objet de styles personnalisés ──────────────────────────────
      sx={{
        backgroundColor: "#ee773d",   // ← Couleur de fond du bouton (orange)
        "&:hover": {                   // ← "&:hover" = quand la souris est sur le bouton
          backgroundColor: "#d96532", //    → la couleur devient un peu plus sombre
        },
        textTransform: "none",        // ← Empêche MUI de mettre le texte en MAJUSCULES
                                      //    (comportement par défaut de MUI sur les boutons)
        fontWeight: "bold",           // ← Met le texte du bouton en gras
      }}
      // ─── Spread des props restantes sur le Button ──────────────────────────
      // Tout ce qui a été passé au composant ButtonMui (sauf children)
      // est transmis directement au Button de MUI.
      // Ex : si on écrit <ButtonMui onClick={maFonction} />,
      //      "onClick={maFonction}" sera automatiquement appliqué ici.
      {...props}
    >
      {/* ── Affiche le texte du bouton ────────────────────────────────────── */}
      {/* Si rien n'est passé, il affichera "Envoyer" par défaut             */}
      {children}
    </Button>
  );
}

// ─── Export du composant pour l'utiliser dans d'autres fichiers ─────────────
export default ButtonMui;