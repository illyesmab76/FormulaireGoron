// ─── Importation de ton composant Typo personnalisé ──────────────────────────
// On n'utilise pas Typography de MUI directement ici,
// on construit au-dessus de Typo (qui est déjà un wrapper de Typography)
import Typo from "./Typo";

// ─── Objet de configuration des variantes de style ──────────────────────────
// Chaque clé correspond à un type de label visuel.
// Déclaré en dehors du composant car ces valeurs ne changent jamais :
// inutile de les recréer à chaque rendu (même logique que dans DividerMui).
const variants = {
  default: {
    mt: 3,              // ← Variante de base : juste un espace en haut (24px)
  },
  offset: {
    mt: 5,              // ← Plus d'espace en haut (40px) pour décaler le label vers le bas
  },
  multiline: {
    mt: 3,              // ← Même espace en haut que "default"
    lineHeight: 1.4,    // ← Mais l'espacement entre les lignes est plus grand
                        //    (utile si le label peut faire plusieurs lignes)
  },
  small: {
    fontSize: "0.9rem", // ← Texte légèrement plus petit que la taille par défaut
    color: "#000000",   // ← Texte noir (ici redéclaré explicitement,
                        //    même si c'est déjà la couleur dans les styles de base)
    mt: 3,              // ← Même espace en haut que "default"
  },
};

// ─── Composant principal : TypoLabel ─────────────────────────────────────────
// C'est un label de formulaire, construit au-dessus de Typo.
// Il ajoute ses propres styles par défaut (noir, centré, etc.)
// et permet de choisir une variante pour ajuster l'apparence.
//
// Props reçues :
//   - children  → texte du label
//   - variant   → choisit le style parmi "default", "offset", "multiline", "small"
//   - sx        → permet au parent de passer des styles supplémentaires
//   - ...props  → toutes les autres propriétés transmises à Typo
function TypoLabel({
  children,
  variant = "default",
  sx,
  ...props
}) {
  return (
    <Typo
      variant="h6"       // ← Variante MUI "h6" pour la taille de base du texte
      sx={{
        // ─── Styles de base (toujours présents) ──────────────────────────
        textAlign: "center",   // ← Texte centré
        color: "#000000",      // ← Couleur noire (écraser le orange par défaut de Typo)
        fontWeight: 400,       // ← Texte normal (pas gras)
                               //    (écraser le "bold" par défaut de Typo)
        width: "100%",         // ← Prend toute la largeur du conteneur parent
        minWidth: 140,         // ← Largeur minimale de 140px
                               //    (empêche le label de devenir trop étroit)
        lineHeight: 1.3,       // ← Espacement entre les lignes par défaut

        // ─── Styles de la variante choisie ────────────────────────────────
        // Placé APRÈS les styles de base → peut donc les écraser
        // Ex : si variant = "small", fontSize: "0.9rem" sera ajouté
        ...variants[variant], 

        // ─── Styles passés par le parent ──────────────────────────────────
        // Placé EN DERNIER → peut écraser les styles de base ET ceux
        // de la variante. C'est la même logique qu'on a vue dans DividerMui.
        ...sx,                
      }}
      {...props}
    >
      {children}
    </Typo>
  );
}

// ─── Export du composant ─────────────────────────────────────────────────────
export default TypoLabel;