// ─── Importation des composants ──────────────────────────────────────────────
import { Box, Tooltip } from "@mui/material";
// Tooltip → composant MUI qui affiche une info-bulle au survol
import ButtonMui from "./ButtonMui";  // Ton composant de bouton personnalisé

// ─── Composant principal : SubmitButtonWithTooltip ───────────────────────────
// Un bouton "submit" qui affiche un message explicatif dans une info-bulle
// lorsqu'il est désactivé (disabled).
// Quand le bouton est actif, aucune info-bulle n'apparaît.
//
// Props reçues :
//   - disabled  → si true, le bouton est grisé et non cliquable
//   - tooltip   → texte affiché dans l'info-bulle quand le bouton est disabled
//                 (ex : "Veuillez remplir tous les champs obligatoires")
//   - children  → texte du bouton (ex : "Soumettre")
function SubmitButtonWithTooltip({ disabled, tooltip, children }) {
  return (
    // ─── Conteneur extérieur ─────────────────────────────────────────────
    // display: "inline-block" → le Box ne prend que la largeur du bouton
    //   au lieu de toute la largeur disponible (comportement par défaut d'un Box)
    <Box sx={{ display: "inline-block" }}>
      {/* ── Tooltip : l'info-bulle ──────────────────────────────────────── */}
      {/* title={disabled ? tooltip : ""} → ternaire :                      */}
      {/*   - si disabled est true  → on affiche le texte "tooltip"         */}
      {/*   - si disabled est false → on passe une chaîne vide "",          */}
      {/*     ce qui désactive l'info-bulle                                  */}
      {/* arrow        → affiche une flèche sur l'info-bulle                */}
      {/* placement="top" → l'info-bulle apparaît au-dessus du bouton      */}
      <Tooltip
        title={disabled ? tooltip : ""}
        arrow
        placement="top"
      >
        {/* ── Conteneur interne autour du bouton ────────────────────────── */}
        {/* ⚠️ Ce Box est important et non anodine !                        */}
        {/* En React, un composant "disabled" ne génère plus d'événements   */}
        {/* de souris (hover, click, etc.).                                  */}
        {/* Or, Tooltip a besoin de ces événements pour apparaître.         */}
        {/* En wrappant le bouton dans un Box, les événements sont          */}
        {/* generés par le Box (qui lui n'est pas disabled),                 */}
        {/* et le Tooltip peut donc fonctionner même quand le bouton est    */}
        {/* désactivé. C'est un pattern très courant avec MUI.              */}
        <Box sx={{ display: "inline-block" }}>
          {/* ── Bouton submit ───────────────────────────────────────────── */}
          {/* type="submit"  → quand on clique dessus, ça déclenche         */}
          {/*                  la soumission du formulaire parent           */}
          {/* disabled       → grise le bouton et empêche le clic          */}
          {/*                  si la prop est true                          */}
          <ButtonMui type="submit" disabled={disabled}>
            {children}
          </ButtonMui>
        </Box>
      </Tooltip>
    </Box>
  );
}

// ─── Export du composant ─────────────────────────────────────────────────────
export default SubmitButtonWithTooltip;