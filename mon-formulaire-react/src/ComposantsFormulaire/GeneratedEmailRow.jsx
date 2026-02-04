import { Box } from "@mui/material";
import InputMui from "../Composants/InputMui";
import DividerMui from "../Composants/DividerMui";

function GeneratedEmailRow({ email, password, trigramme, onTrigrammeChange }) {
  return (
    <Box sx={{ width: "100%" }}>
      <DividerMui sx={{ my: 4 }} />
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Box sx={{ width: "33.33%" }}>
          <InputMui
            label="Adresse email générée"
            value={email}
            fullWidth
            InputProps={{ readOnly: true }}
          />
        </Box>
        <Box sx={{ width: "33.33%" }}>
          <InputMui
            label="Mot de passe généré"
            value={password}
            fullWidth
            InputProps={{ readOnly: true }}
          />
        </Box>
        <Box sx={{ width: "33.33%" }}>
          <InputMui
            label="Trigramme"
            name="trigrammeGenere"
            value={trigramme}
            onChange={onTrigrammeChange}
            fullWidth
            inputProps={{ 
              maxLength: 3,
              style: { textTransform: 'uppercase' }
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default GeneratedEmailRow;