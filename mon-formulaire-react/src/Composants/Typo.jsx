import Typography from "@mui/material/Typography";

function Typo({
  children,
  variant = "body1",
  color = "#ee773d",
  align = "left",
  mb = 2,
  fontWeight = "bold",
  ...props
}) {
  return (
    <Typography
      variant={variant}
      sx={{
        color,
        textAlign: align,
        fontWeight,
        mb,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

export default Typo;
