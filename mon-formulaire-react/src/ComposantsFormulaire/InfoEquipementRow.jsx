import { useState } from "react";
import { Box, Button, Typography, Paper, IconButton, Grid } from "@mui/material";
import InputMui from "../Composants/InputMui";
import DatePickerMui from "./DatePickerMui";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function InfoEquipementRow({ equipements, onAdd, onDelete }) {
  const [local, setLocal] = useState({ nom: "", modele: "", sn: "", garantie: "", fichier: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocal(prev => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    setLocal(prev => ({ ...prev, fichier: e.target.files[0] }));
  };

  const handleAdd = () => {
    if (!local.nom || !local.sn) return alert("Veuillez remplir au moins le nom et le numéro de série");
    onAdd(local);
    setLocal({ nom: "", modele: "", sn: "", garantie: "", fichier: null });
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, color: "#ee773d", fontWeight: "bold" }}>
        Équipements Supplémentaires
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputMui label="Nom de l'équipement" name="nom" fullWidth value={local.nom} onChange={handleChange} />
        </Grid>
        <Grid item xs={6}>
          <InputMui label="Modèle de l'équipement" name="modele" fullWidth value={local.modele} onChange={handleChange} />
        </Grid>

        <Grid item xs={6}>
          <InputMui label="Numéro de série" name="sn" fullWidth value={local.sn} onChange={handleChange} />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
              <DatePickerMui label="Garantie" name="garantie" value={local.garantie} onChange={handleChange} />
            </Box>
            <Button
              component="label"
              variant="outlined"
              sx={{ 
                height: "56px", 
                minWidth: "60px", 
                borderColor: "rgba(0, 0, 0, 0.23)", 
                color: "#ee773d" 
              }}
            >
              <CloudUploadIcon />
              <input type="file" hidden onChange={handleFile} />
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleAdd}
            startIcon={<AddCircleIcon />}
            fullWidth
            sx={{ 
              backgroundColor: "#ee773d", 
              "&:hover": { backgroundColor: "#d66632" },
              height: "45px",
              fontWeight: "bold",
              mt: 1
            }}
          >
            Ajouter l'équipement
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        {equipements.map((item, index) => (
          <Paper 
            key={index} 
            elevation={0} 
            sx={{ 
              p: 2, 
              mb: 1, 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              border: "1px solid #eee", 
              borderLeft: "5px solid #ee773d" 
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <InsertDriveFileIcon sx={{ color: "#ee773d" }} />
              <Box>
                <Typography variant="body2">
                  <strong>Nom de l'équipement :</strong> {item.nom} | <strong>Modèle de l'équipement :</strong> {item.modele}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  <strong>Numéro de série :</strong> {item.sn} | <strong>Garantie :</strong> {item.garantie}
                  {item.fichier && ` | 📄 ${item.fichier.name}`}
                </Typography>
              </Box>
            </Box>
            <IconButton onClick={() => onDelete(index)} sx={{ color: "#ee773d" }}>
              <DeleteIcon />
            </IconButton>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default InfoEquipementRow;