import Button from "@mui/material/Button";

function ButtonMui({ children = "Envoyer", ...props }) {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        backgroundColor: "#ee773d",
        "&:hover": {
          backgroundColor: "#d96532",
        },
        textTransform: "none",
        fontWeight: "bold",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ButtonMui;
