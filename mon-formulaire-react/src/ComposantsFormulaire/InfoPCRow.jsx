import { Box, Button, Typography, List, ListItem } from "@mui/material";
import InputMui from "../Composants/InputMui";
import DatePickerMui from "./DatePickerMui";
import DividerMui from "../Composants/DividerMui";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function InfoPCRow({ nomMachine, marque, numeroSerie, garantie, onChange, fichiers = [], onFileChange }) {
  const columnStyle = { flex: "0 0 calc((100% - 32px) / 3)" };

  return (
    <Box sx={{ width: "100%" }}>
      <DividerMui sx={{ my: 4 }} />
      
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Box sx={columnStyle}>
          <InputMui
            label="Nom de la machine"
            name="nomMachine"
            value={nomMachine}
            onChange={onChange}
            fullWidth
          />
        </Box>
        <Box sx={columnStyle}>
          <InputMui
            label="Marque"
            name="marque"
            value={marque}
            onChange={onChange}
            fullWidth
          />
        </Box>
        <Box sx={columnStyle} />

        <Box sx={columnStyle}>
          <InputMui
            label="Numéro de série"
            name="numeroSerie"
            value={numeroSerie}
            onChange={onChange}
            fullWidth
          />
        </Box>
        <Box sx={columnStyle}>
          <DatePickerMui
            label="Garantie"
            name="garantie"
            value={garantie}
            onChange={onChange}
          />
        </Box>
        <Box sx={columnStyle} />

        <Box sx={{ ...columnStyle, mt: 2 }}>
          <Typography variant="body2" sx={{ mb: 1, color: "grey.700", fontWeight: "bold" }}>
            Documents du PC 
          </Typography>
          <Button
            component="label"
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            fullWidth
            sx={{ 
              height: "56px", 
              borderColor: "rgba(0, 0, 0, 0.23)", 
              color: "grey.800",
              textTransform: "none"
            }}
          >
            Joindre des fichiers
            <input
              type="file"
              hidden
              multiple
              onChange={onFileChange}
            />
          </Button>

          {fichiers && fichiers.length > 0 && (
            <List dense sx={{ mt: 1 }}>
              {fichiers.map((file, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <InsertDriveFileIcon sx={{ fontSize: 18, mr: 1, color: "#ee773d" }} />
                  <Typography variant="caption" noWrap>
                    {file.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default InfoPCRow;