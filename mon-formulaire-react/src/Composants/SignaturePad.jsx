// ─── Importation des composants ──────────────────────────────────────────────
import { Box, Button } from "@mui/material";
// useRef    → permet de faire référence directement à un élément du DOM
//             sans provoquer de re-rendu (on va l'utiliser pour accéder au canvas)
// useEffect → permet d'exécuter du code après que le composant s'est affiché
//             (on va l'utiliser pour ajuster la résolution du canvas)
import { useRef, useEffect } from "react";
// SignatureCanvas → bibliothèque externe qui fournit un canvas où on peut dessiner
import SignatureCanvas from "react-signature-canvas";

// ─── Composant principal : SignaturePad ──────────────────────────────────────
// Il affiche une zone de dessin pour signer + un bouton "Effacer".
// Props reçues :
//   - onSave → fonction appelée avec l'image de la signature (ou "" si effacée)
//              elle permet de remonter la signature au composant parent
function SignaturePad({ onSave }) {
  // ─── Référence vers le composant SignatureCanvas ───────────────────────
  // useRef crée un "pointeur" vers un élément.
  // sigRef.current → sera le composant SignatureCanvas une fois rendu.
  // Ça permet d'appeler ses méthodes directement (clear(), toDataURL(), etc.)
  const sigRef = useRef(null);

  // ─── useEffect : corriger la résolution du canvas ─────────────────────
  // Sur certains écrans (surtout mobiles ou Retina), le canvas peut être
  // flou ou le doigt/souris peut être décalé par rapport à ce qui se dessine.
  // Cette fonction corrige ça en adaptant la résolution interne du canvas
  // à la résolution de l'écran (devicePixelRatio).
  useEffect(() => {
    const resizeCanvas = () => {
      // sigRef.current?.getCanvas() → récupère l'élément HTML <canvas>
      // Le "?" après "current" = chaînage optionnel :
      //   si sigRef.current est null, on ne plante pas, on retourne juste undefined
      const canvas = sigRef.current?.getCanvas();
      if (!canvas) return; // Si le canvas n'existe pas encore, on sort

      // devicePixelRatio = rapport entre la résolution de l'écran physique
      // et la résolution logique (ex : 2 sur un écran Retina)
      // Math.max(..., 1) s'assure que la valeur est au minimum 1
      const ratio = Math.max(window.devicePixelRatio || 1, 1);

      // getBoundingClientRect() → retourne la taille visuelle du canvas
      // en pixels telle qu'elle apparaît sur l'écran
      const { width, height } = canvas.getBoundingClientRect();

      // On multiplie par le ratio pour agrandir la résolution interne du canvas
      // Ex : si l'écran est Retina (ratio = 2) et le canvas fait 400px visuellement,
      //      on met sa résolution interne à 800px pour éviter le flou
      canvas.width = width * ratio;
      canvas.height = height * ratio;

      // getContext("2d") → récupère le contexte de dessin du canvas
      // ctx.scale(ratio, ratio) → on ramène l'échelle de dessin à la normale
      //   pour que les traits restent au bon endroit malgré le canvas plus grand
      const ctx = canvas.getContext("2d");
      ctx.scale(ratio, ratio);
    };

    // On lance la correction une première fois au montage du composant
    resizeCanvas();

    // On écoute aussi l'événement "resize" : si la fenêtre est redimensionnée,
    // on relance la correction
    window.addEventListener("resize", resizeCanvas);

    // ─── Fonction de nettoyage (cleanup) ─────────────────────────────────
    // Quand le composant est supprimé de la page (ou avant que useEffect
    // ne relance), on supprime l'écouteur d'événement.
    // Si on ne le faisait pas, ça pourrait provoquer des erreurs ou des
    // fuites mémoire (l'écouteur continuerait à exister même sans composant)
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []); // ← [] = tableau de dépendances vide → cet effet ne lance qu'une seule fois,
          //    à l'apparition du composant

  // ─── Fonction : appelée automatiquement quand l'utilisateur termine un trait ──
  const handleEnd = () => {
    // isEmpty() → vérifie si le canvas est vide (rien n'a été dessiné)
    if (!sigRef.current.isEmpty()) {
      // toDataURL("image/png") → convertit ce qui est dessiné sur le canvas
      // en une chaîne de caractères qui représente une image PNG
      // (format "base64" → utilisable directement dans une balise <img>)
      const image = sigRef.current.toDataURL("image/png");
      // On envoie cette image au composant parent via onSave
      onSave(image);
    }
  };

  // ─── Fonction : effacer la signature ─────────────────────────────────────
  const handleClear = () => {
    sigRef.current.clear(); // Efface tout ce qui est dessiné sur le canvas
    onSave("");             // On prévient le parent que la signature est vide
  };

  // ─── Rendu du composant ──────────────────────────────────────────────────
  return (
    <Box sx={{ width: "100%" }}>
      {/* ── Zone de dessin ────────────────────────────────────────────────── */}
      <SignatureCanvas
        ref={sigRef}              // ← On attache notre "pointeur" au composant
        penColor="black"          // ← Couleur du trait
        onEnd={handleEnd}         // ← Appelé quand l'utilisateur lève le doigt/souris
        canvasProps={{            // ← Propriétés passées directement à l'élément <canvas>
          style: {
            width: "100%",           // ← Largeur totale du conteneur parent
            height: 150,             // ← Hauteur fixe de 150px
            border: "1px solid #ccc", // ← Bordure grise claire
            borderRadius: 4,         // ← Coins légèrement arrondis
            backgroundColor: "#fff", // ← Fond blanc
            touchAction: "none",     // ← Empêche le scroll sur mobile quand
                                     //    on dessine sur le canvas
          },
        }}
      />

      {/* ── Bouton "Effacer" aligné à droite ──────────────────────────────── */}
      <Box sx={{ textAlign: "right", mt: 1 }}>
        <Button size="small" onClick={handleClear}>
          Effacer
        </Button>
      </Box>
    </Box>
  );
}

// ─── Export du composant ─────────────────────────────────────────────────────
export default SignaturePad;