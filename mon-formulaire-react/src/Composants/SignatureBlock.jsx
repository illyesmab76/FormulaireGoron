import { Box } from "@mui/material";
import InputMui from "./InputMui";
import Typo from "./Typo";
import SignaturePad from "./SignaturePad";
import DateInput from "./DateInput";

function SignatureBlock({
  form,
  handleChange,
  onSaveSignature,
  onSaveNomSignature,
}) {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        mt: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >

      {/* DATE + LIEU */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
        }}
      >
        <DateInput
            label="Date (JJ/MM/AAAA)"
            name="DateSignature"
            value={form.DateSignature}
            onChange={handleChange}
        />


        <InputMui
          label="À"
          value="ST ETIENNE DU ROUVRAY"
          disabled
          fullWidth
        />
      </Box>

      {/* TITRES DES SIGNATURES */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
        }}
      >
        <Typo sx={{ textAlign: "left", fontWeight: 500 }}>
          Signature
        </Typo>

        <Typo sx={{ textAlign: "left", fontWeight: 500 }}>
          Nom et signature de l’animateur
        </Typo>
      </Box>

      {/* ZONES DE SIGNATURE */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
        }}
      >
        <SignaturePad onSave={onSaveSignature} />
        <SignaturePad onSave={onSaveNomSignature} />
      </Box>
    </Box>
  );
}

export default SignatureBlock;
