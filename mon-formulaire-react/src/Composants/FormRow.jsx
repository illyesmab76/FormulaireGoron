import { Box } from "@mui/material";
import TypoLabel from "./TypoLabel";
import BoxLabel from "./BoxLabel";

function FormRow({ label, input1, input2 }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        mb: 2,
      }}
    >
      <BoxLabel>
        <TypoLabel>{label}</TypoLabel>
      </BoxLabel>

      <BoxLabel>{input1}</BoxLabel>
      <BoxLabel>{input2}</BoxLabel>
    </Box>
  );
}

export default FormRow;

