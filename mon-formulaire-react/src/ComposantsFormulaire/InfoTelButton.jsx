import ButtonMui from "../Composants/ButtonMui";

function InfoTelButton({ onInfoTel, disabled }) { // Ajout de la prop disabled
  return (
    <ButtonMui
      onClick={onInfoTel}
      disabled={disabled} // Liaison au bouton
      sx={{
        backgroundColor: "#ee773d",
        "&:hover": { backgroundColor: "#d96532" },
        width: "200px", 
        height: 55,
        textTransform: "uppercase",
        fontWeight: "bold",
        whiteSpace: "nowrap",
      }}
    >
      Information Téléphone
    </ButtonMui>
  );
}

export default InfoTelButton;