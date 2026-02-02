import { Box, Typography } from "@mui/material";
import Typo from "./Typo";

function Engagement({ title, text }) {
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
      <Typo
        variant="body1"           // 🔥 taille maîtrisée
        fontWeight="bold"
        sx={{ textAlign: "left", mb: 1 }}
      >
        {title}
      </Typo>

      <Box
        sx={{
          border: "1px solid rgba(0,0,0,0.3)",
          borderRadius: 2,
          p: 2,
          backgroundColor: "#fafafa",
        }}
      >
        <Typography
          variant="body2"
          sx={{ lineHeight: 1.6, whiteSpace: "pre-line" }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default Engagement;
