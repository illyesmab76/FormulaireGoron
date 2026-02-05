import ButtonMui from "../Composants/ButtonMui";

function InfoEquipButton({ onOpen }) {
  return (
    <ButtonMui
      onClick={onOpen}
      sx={{
        backgroundColor: "#ee773d", 
        "&:hover": { backgroundColor: "#ee773d" },
        width: "200px", 
        height: 55,
        textTransform: "uppercase",
        fontWeight: "bold",
      }}
    >
      Équipement Supp
    </ButtonMui>
  );
}

export default InfoEquipButton;