import { Box } from "@mui/material";
import InputMui from "../Composants/InputMui";
import DividerMui from "../Composants/DividerMui";

function GeneratedEmailRow({ email, password, trigramme, onChange }) {
  const colStyle = { flex: "0 0 calc((100% - 32px) / 3)" };

  return (
    <Box sx={{ width: "100%" }}>
      <DividerMui sx={{ my: 4 }} />
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Box sx={colStyle}>
          <InputMui
            label="Adresse email générée"
            name="emailGenere"
            value={email}
            onChange={onChange}
            fullWidth
          />
        </Box>
        <Box sx={colStyle}>
          <InputMui
            label="Mot de passe généré"
            name="passwordGenere"
            value={password}
            onChange={onChange}
            fullWidth
          />
        </Box>
        <Box sx={colStyle}>
          <InputMui
            label="Trigramme"
            name="trigrammeGenere"
            value={trigramme}
            onChange={onChange}
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