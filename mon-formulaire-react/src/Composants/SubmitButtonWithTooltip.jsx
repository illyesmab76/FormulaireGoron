import { Box, Tooltip } from "@mui/material";
import ButtonMui from "./ButtonMui";

function SubmitButtonWithTooltip({ disabled, tooltip, children }) {
  return (
    <Box sx={{ display: "inline-block" }}>
      <Tooltip
        title={disabled ? tooltip : ""}
        arrow
        placement="top"
      >
        <Box sx={{ display: "inline-block" }}>
          <ButtonMui type="submit" disabled={disabled}>
            {children}
          </ButtonMui>
        </Box>
      </Tooltip>
    </Box>
  );
}

export default SubmitButtonWithTooltip;
