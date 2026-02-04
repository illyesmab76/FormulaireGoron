import ButtonMui from "../Composants/ButtonMui";

function InfoPCButton({ onInfoPC }) {
  return (
    <ButtonMui
      onClick={onInfoPC}
      sx={{
        backgroundColor: "#ee773d",
        "&:hover": { backgroundColor: "#d96532" },
        width: "200px", // Taille fixe identique au bouton Retour
        height: 55,
        textTransform: "uppercase",
        fontWeight: "bold",
        whiteSpace: "nowrap",
      }}
    >
      Information PC
    </ButtonMui>
  );
}

export default InfoPCButton;