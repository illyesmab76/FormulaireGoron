import { Box } from "@mui/material";
import TypoLabel from "./TypoLabel";

function Soussigne({ label, children }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 900,
        mx: "auto",
        mb: 3,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <TypoLabel sx={{ textAlign: "left", mt: 0 }}>
        {label}
      </TypoLabel>

      {children}
    </Box>
  );
}

export default Soussigne;
