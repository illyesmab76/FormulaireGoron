import { Box, Button, Typography, List, ListItem } from "@mui/material";
import InputMui from "../Composants/InputMui";
import DividerMui from "../Composants/DividerMui";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function InfoTelRow({ modeleTel, marqueTel, imei, garantieTel, onChange, fichiers = [], onFileChange }) {
  const columnStyle = { flex: "0 0 calc((100% - 32px) / 3)" };

  return (
    <Box sx={{ width: "100%" }}>
      <DividerMui sx={{ my: 4 }} />
      
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {/* Ligne 1 : Marque et Modèle */}
        <Box sx={columnStyle}>
          <InputMui
            label="Marque du téléphone"
            name="marqueTel"
            value={marqueTel}
            onChange={onChange}
            fullWidth
          />
        </Box>
        <Box sx={columnStyle}>
          <InputMui
            label="Modèle"
            name="modeleTel"
            value={modeleTel}
            onChange={onChange}
            fullWidth
          />
        </Box>
        <Box sx={columnStyle} />

        {/* Ligne 2 : IMEI et Garantie */}
        <Box sx={columnStyle}>
          <InputMui
            label="Numéro IMEI / Série"
            name="imei"
            value={imei}
            onChange={onChange}
            fullWidth
          />
        </Box>
        <Box sx={columnStyle}>
          <InputMui
            label="Garantie"
            name="garantieTel"
            value={garantieTel}
            onChange={onChange}
            fullWidth
          />
        </Box>
        <Box sx={columnStyle} />

        {/* Section Pièces jointes */}
        <Box sx={{ ...columnStyle, mt: 2 }}>
          <Typography variant="body2" sx={{ mb: 1, color: "grey.700", fontWeight: "bold" }}>
            Documents du Téléphone 
          </Typography>
          <Button
            component="label"
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            fullWidth
            sx={{ height: "56px", borderColor: "rgba(0, 0, 0, 0.23)", color: "grey.800", textTransform: "none" }}
          >
            Joindre des fichiers
            <input type="file" hidden multiple onChange={onFileChange} />
          </Button>

          {fichiers && fichiers.length > 0 && (
            <List dense sx={{ mt: 1 }}>
              {fichiers.map((file, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <InsertDriveFileIcon sx={{ fontSize: 18, mr: 1, color: "#ee773d" }} />
                  <Typography variant="caption" noWrap>{file.name}</Typography>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default InfoTelRow;