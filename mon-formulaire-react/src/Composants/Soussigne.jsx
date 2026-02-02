import { Box } from "@mui/material";
import Typo from "./Typo";

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
      }}
    >
      <Typo
        variant="body1"          
        fontWeight={500}
        sx={{
          textAlign: "left",
          m: 0,                  
          p: 0,
          lineHeight: 1,
          transform: "translateY(6px)", 
        }}
      >
        {label}
      </Typo>

      {children}
    </Box>
  );
}

export default Soussigne;
