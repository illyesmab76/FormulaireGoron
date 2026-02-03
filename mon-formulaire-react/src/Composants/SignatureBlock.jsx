// ─── Importation des composants ──────────────────────────────────────────────
import { Box } from "@mui/material";
import InputMui from "./InputMui";           // Ton composant d'input personnalisé
import Typo from "./Typo";                   // Ton composant de texte personnalisé
import SignaturePad from "./SignaturePad";    // Composant qui permet de dessiner une signature
import DateInput from "./DateInput";         // Ton composant d'input de date (celui qu'on a déjà vu !)

// ─── Composant principal : SignatureBlock ────────────────────────────────────
// Il représente la section "signature" d'un formulaire :
// une date, un lieu, et deux zones de signature côte à côte.
//
// Props reçues :
//   - form                → objet contenant les valeurs du formulaire
//                            (ex : { DateSignature: "03/02/2026", ... })
//   - handleChange        → fonction appelée quand un champ change
//                            (probablement définie dans le composant parent)
//   - onSaveSignature     → fonction appelée quand la 1ère signature est sauvegardée
//   - onSaveNomSignature  → fonction appelée quand la 2ème signature est sauvegardée
function SignatureBlock({
  form,
  handleChange,
  onSaveSignature,
  onSaveNomSignature,
}) {
  return (
    // ─── Conteneur général ─────────────────────────────────────────────────
    // maxWidth: 900    → largeur maximale de 900px
    // mx: "auto"       → centré horizontalement
    // mt: 4            → espace en haut (4 × 8px = 32px)
    // flexDirection: "column" → empile les blocs verticalement
    // gap: 2           → espace entre chaque bloc (16px)
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

      {/* ── BLOC 1 : Date + Lieu ───────────────────────────────────────── */}
      {/* display: "grid" avec gridTemplateColumns: "1fr 1fr"              */}
      {/* → divise l'espace en 2 colonnes égales                          */}
      {/* "1fr" = 1 fraction de l'espace disponible                       */}
      {/* Donc "1fr 1fr" = 50% / 50%                                      */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
        }}
      >
        {/* Colonne gauche : input de date avec format JJ/MM/AAAA          */}
        {/* name="DateSignature" → clé utilisée dans l'objet "form"        */}
        {/* value={form.DateSignature} → récupère la valeur depuis "form"  */}
        <DateInput
          label="Date (JJ/MM/AAAA)"
          name="DateSignature"
          value={form.DateSignature}
          onChange={handleChange}
        />

        {/* Colonne droite : input du lieu, fixe et non modifiable         */}
        {/* disabled → l'utilisateur ne peut pas changer cette valeur      */}
        <InputMui
          label="À"
          value="ST ETIENNE DU ROUVRAY"
          disabled
          fullWidth
        />
      </Box>

      {/* ── BLOC 2 : Titres au-dessus des zones de signature ──────────── */}
      {/* Même grid "1fr 1fr" → les titres sont alignés avec les zones     */}
      {/* de signature du bloc juste en dessous                            */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
        }}
      >
        {/* Titre colonne gauche */}
        <Typo sx={{ textAlign: "left", fontWeight: 500 }}>
          Signature
        </Typo>

        {/* Titre colonne droite */}
        <Typo sx={{ textAlign: "left", fontWeight: 500 }}>
          Nom et signature de l'animateur
        </Typo>
      </Box>

      {/* ── BLOC 3 : Les deux zones de signature côte à côte ──────────── */}
      {/* Même grid "1fr 1fr" → chaque SignaturePad prend exactement       */}
      {/* la moitié de l'espace, bien alignés avec les titres au-dessus    */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
        }}
      >
        {/* Zone de signature gauche (ex : signature du participant)       */}
        {/* onSave → fonction appelée quand l'utilisateur valide sa signature */}
        <SignaturePad onSave={onSaveSignature} />

        {/* Zone de signature droite (ex : signature de l'animateur)       */}
        <SignaturePad onSave={onSaveNomSignature} />
      </Box>
    </Box>
  );
}

// ─── Export du composant ─────────────────────────────────────────────────────
export default SignatureBlock;