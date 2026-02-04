import ButtonMui from "../Composants/ButtonMui";

function RetourButton({ onRetour }) {
  return (
    <ButtonMui
      onClick={onRetour}
      sx={{
        backgroundColor: "#6c757d",
        "&:hover": { backgroundColor: "#5a6268" },
        width: "200px", // Taille fixe identique à InfoPC
        height: 55,
        textTransform: "uppercase",
        fontWeight: "bold",
        whiteSpace: "nowrap",
      }}
    >
      Retour
    </ButtonMui>
  );
}

export default RetourButton;