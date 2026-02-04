import ButtonMui from "../Composants/ButtonMui";

/**
 * Composant Bouton Récapitulatif
 * @param {Function} onRecap - Fonction appelée au clic
 * @param {boolean} disabled - État d'activation du bouton
 */
function RecapButton({ onRecap, disabled }) {
  return (
    <ButtonMui
      onClick={onRecap}
      disabled={disabled}
      sx={{
        backgroundColor: "#ee773d", // Couleur verte (Success)
        "&:hover": { 
          backgroundColor: "#ee773d" 
        },
        "&.Mui-disabled": {
          backgroundColor: "rgba(0, 0, 0, 0.12)", // Couleur grise quand désactivé
        },
        width: "200px",
        height: 55,
        textTransform: "uppercase",
        fontWeight: "bold",
        whiteSpace: "nowrap",
      }}
    >
      Récapitulatif
    </ButtonMui>
  );
}

// C'EST CETTE LIGNE QUI MANQUE DANS TON FICHIER :
export default RecapButton;