import { useState } from "react";
import { Box, Typography } from "@mui/material";
import InputMui from "../Composants/InputMui";
import ButtonMui from "../Composants/ButtonMui";
import Typo from "../Composants/Typo";
import DividerMui from "../Composants/DividerMui";
import TypoLabel from "../Composants/TypoLabel";
import BoxLabel from "../Composants/BoxLabel";
import FormRow from "../Comporsants/FormRow";

function Formulaire() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    // PAGE PLEIN ÉCRAN AVEC MARGES
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        p: 4,                 // marges globales
        boxSizing: "border-box",
      }}
    >
      {/* FORMULAIRE */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",         // 🔥 centré horizontalement
          mt: 6,  
          px: 3,            // 🔥 petite marge en haut
         
        }}
      >
        <Typo
        variant="h3"
        color="#ee773d"
        fontWeight="bold"
        mb={3}
        >
        Identifiants informatique
        </Typo>

        
        <DividerMui variant="strong"/>

        <Box
        sx={{
        display: "flex",
        alignItems: "center", // 🔥 aligne verticalement
        gap: 2,               // espace entre input et bouton
        mb: 2,
        }}
        >

        <InputMui
          label="Nom"
          name="nom"
          value={form.nom}
          onChange={handleChange}
          required
          sx={{ flex: 1 }}      // 🔥 l’input prend l’espace dispo
        />

        <InputMui
          label="Prénom"
          name="prenom"
          value={form.prenom}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        >
        </InputMui>
        <InputMui
          label="Date : JJ/MM/AAAA"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>

        </Box>

        <DividerMui variant="strong"/>

        <Box
        sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        mb: 2,
        }}
        > 

        <BoxLabel>
        <TypoLabel>
          Adresse mail
        </TypoLabel>
        </BoxLabel>

        <BoxLabel >
        <InputMui
          label="Identifiant"
          name="IdentifiantMail"
          value={form.IdMail}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>
        </BoxLabel>

        <BoxLabel>
        <InputMui
          label="Mot de passe"
          name="MDPmail"
          value={form.MDPmail}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>
        </BoxLabel>

       </Box>

       <DividerMui/>

      <Box
        sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        mb: 2,
        }}
        > 

        <BoxLabel >
        <TypoLabel>
          Agenda Google
        </TypoLabel>
        </BoxLabel>

        <BoxLabel>
        <InputMui
          label="Identifiant"
          name="IdentifiantGoogleAgenda"
          value={form.IdGoogleAgenda}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>
        </BoxLabel>

        <BoxLabel>
        <InputMui
          label="Mot de passe"
          name="MDPGoogleAgenda"
          value={form.MDPGoogleAgenda}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>
        </BoxLabel>

       </Box>

       <DividerMui/>

       <Box
        sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        mb: 2,
        }}
        >  

        <BoxLabel>
        <TypoLabel>
          Login TSE ASSI 
        </TypoLabel>
        </BoxLabel>

        <BoxLabel>
        <InputMui
          label="Identifiant"
          name="IdentifiantTSEASSI"
          value={form.IdTSEASSI}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>
        </BoxLabel>

        <BoxLabel>
        <InputMui
          label="Mot de passe"
          name="MDPTSEASSI"
          value={form.MDPTSEASSI}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>
        </BoxLabel>

       </Box>

       <DividerMui/>

       <Box
        sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        mb: 2,
        }}
        > 

        <BoxLabel>
        <TypoLabel>
          Compte EBP
        </TypoLabel>
        </BoxLabel>

        <BoxLabel>  
        <InputMui
          label="Identifiant"
          name="IdentifiantEBM"
          value={form.IdEBM}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>
        </BoxLabel>

        <BoxLabel>
        <InputMui
          label="Mot de passe"
          name="MDPEBM"
          value={form.MDPEBM}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>
        </BoxLabel>

       </Box>

       <DividerMui/>

       <Box
        sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        mb: 2,
        }}
        > 
        <BoxLabel>
        <TypoLabel>
          Login VPN DISTANT
        </TypoLabel>
        </BoxLabel>
        
        <BoxLabel>
        <InputMui
          label="Identifiant"
          name="IdentifiantVPN"
          value={form.IdVPN}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>
        </BoxLabel>

        <BoxLabel>
        <InputMui
          label="Mot de passe"
          name="MDPVPN"
          value={form.MDPVPN}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>
        </BoxLabel>

       </Box>

       <DividerMui/>

       <Box
        sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        mb: 2,
        }}
        > 
        <BoxLabel>
          <TypoLabel sx={{ alignSelf: "flex-start", mt: 2 }} >
          PC PORTABLE <br />
          (NOM INFORMATIQUE)
        </TypoLabel>
        </BoxLabel>
        
        <BoxLabel>
        <InputMui
          label="Identifiant"
          name="IdentifiantPcPortable"
          value={form.IdPcPortable}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>
        </BoxLabel>
        
        <BoxLabel>
          <InputMui
          label="Mot de passe"
          name="MDPPcPortable"
          value={form.MDPPc}
          onChange={handleChange}
          required
          sx={{ flex: 1 }} 
        ></InputMui>
        </BoxLabel>
        

       </Box>

       <DividerMui/>

       <Box
        sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        mb: 2,
        }}
              >
        <BoxLabel>
          <TypoLabel>
            MPD SESSION WINDOWS
          </TypoLabel>
        </BoxLabel>

      <BoxLabel>
        <InputMui
          label="Identifiant"
          name="IdentifiantWindows"
          value={form.IdWindows}
          onChange={handleChange}
          required
          fullWidth
        />
      </BoxLabel>

      <BoxLabel>
        <InputMui
          label="Mot de passe"
          name="MDPWindows"
          value={form.MDPWindows}
          onChange={handleChange}
          required
          fullWidth
        />
      </BoxLabel>
    </Box>


       <DividerMui/>

       <Box
        sx={{
        display: "flex",
        gap: 2,
        mb: 2,
        }}
      >
  {/* LABEL */}
  <BoxLabel>
    <TypoLabel>
      MPD SESSION WINDOWS
    </TypoLabel>
  </BoxLabel>

  {/* INPUT 1 */}
  <BoxLabel>
    <InputMui
      label="Identifiant"
      name="IdentifiantWindows"
      value={form.IdWindows}
      onChange={handleChange}
      required
      fullWidth
    />
  </BoxLabel>

  {/* INPUT 2 */}
  <BoxLabel>
    <InputMui
      label="Mot de passe"
      name="MDPWindows"
      value={form.MDPWindows}
      onChange={handleChange}
      required
      fullWidth
    />
  </BoxLabel>
</Box>
    
<DividerMui variant="strong"/>     
    
    <Box
      sx={{
      width: "100%",          
      maxWidth: 900,          
      mx: "auto",             
      mb: 3,
      display: "flex",
      flexDirection: "column",
      gap: 1,
      }}
    >
    <Typo
      sx={{
      mt: 0,
      textAlign: "left",
      }}
      >
      Je soussigné…
    </Typo>

  <InputMui
    label="Monsieur..."
    name="Monsieur"
    value={form.Monsieur}
    onChange={handleChange}
    required
    fullWidth
  />
  <Box
  sx={{
    width: "100%",
    maxWidth: 900,       // 🔥 même largeur que "Je soussigné"
    mx: "auto",          // 🔥 centré
    mb: 4,
  }}
>
  {/* TITRE */}
  <Typo
    sx={{
      mt: 0,
      mb: 1,
      textAlign: "left",
    }}
  >
    M’engage à :
  </Typo>

  {/* ENCADRÉ */}
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
      sx={{
        color: "#000000",
        lineHeight: 1.6,
        whiteSpace: "pre-line", 
      }}
    >
      {`M’engage à ne jamais diffuser ses identifiants. Ceux-ci sont personnels.
      A respecter la propriété des informations d’ASSI et de la société GORON conformément au règlement intérieur et à la charte SI.

      Je reconnais avoir reçu les consignes d’utilisation.`}
    </Typography>
  </Box>
</Box>

  </Box>
   
      <Box>
        <ButtonMui type="submit">
          Envoyer
        </ButtonMui>
      </Box>
  </Box>
  <DividerMui variant="strong" /> 
</Box>
  );
}

export default Formulaire;
