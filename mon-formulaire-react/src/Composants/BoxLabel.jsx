import { Box } from "@mui/material";

function BoxLabel({ children, width = "100%", align = "flex-start" }) {
  return (
    <Box
      sx={{
        width,
        display: "flex",
        alignItems: align,
      }}
    >
      {children}
    </Box>
  );
}

export default BoxLabel;
