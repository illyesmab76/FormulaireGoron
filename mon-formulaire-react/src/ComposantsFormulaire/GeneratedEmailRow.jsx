import React from "react";
import { Box } from "@mui/material";
import InputMui from "../Composants/InputMui";
import InputPasswordMui from "./InputPasswordMui";

function GeneratedEmailRow({ email, password, trigramme, onChange }) {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        gap: 2, 
        width: "100%", 
        alignItems: "flex-start",
        boxSizing: "border-box"
      }}
    >
      <Box sx={{ flex: "0 0 calc(33.33% - 11px)", maxWidth: "calc(33.33% - 11px)" }}>
        <InputMui 
          label="Adresse email générée" 
          name="emailGenere" 
          value={email} 
          onChange={onChange}
        />
      </Box>

      <Box sx={{ flex: "0 0 calc(33.33% - 11px)", maxWidth: "calc(33.33% - 11px)" }}>
        <InputPasswordMui 
          label="Mot de passe généré" 
          name="passwordGenere" 
          value={password} 
          onChange={onChange}
        />
      </Box>

      <Box sx={{ flex: "0 0 calc(33.34% - 11px)", maxWidth: "calc(33.34% - 11px)" }}>
        <InputMui 
          label="Trigramme" 
          name="trigrammeGenere" 
          value={trigramme} 
          onChange={onChange}
          inputProps={{ style: { textTransform: 'uppercase' }, maxLength: 3 }}
        />
      </Box>
    </Box>
  );
}

export default GeneratedEmailRow;