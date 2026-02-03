// ─── Fonction utilitaire 1 : valider le format d'une date française ─────────
// Elle vérifie que la date respecte exactement le format JJ/MM/AAAA
// "export const" → elle est exportée pour pouvoir être utilisée
// dans d'autres fichiers si nécessaire
//
// Explication de la regex /^\d{2}\/\d{2}\/\d{4}$/ :
//   ^          → début de la chaîne
//   \d{2}      → exactement 2 chiffres (le jour)
//   \/         → un "/" littéral (on l'échappe avec "\" car "/" a un sens spécial en regex)
//   \d{2}      → exactement 2 chiffres (le mois)
//   \/         → un autre "/"
//   \d{4}      → exactement 4 chiffres (l'année)
//   $          → fin de la chaîne
// .test(date)  → retourne true si la date correspond au pattern, false sinon
export const isValidDateFR = (date) =>
  /^\d{2}\/\d{2}\/\d{4}$/.test(date);

// ─── Fonction utilitaire 2 : vérifier qu'une valeur n'est pas vide ──────────
// Elle vérifie trois cas :
//   - la valeur n'est pas undefined (inexistante)
//   - la valeur n'est pas null (volontairement vide)
//   - la valeur, une fois convertie en texte et nettoyée des espaces,
//     n'est pas une chaîne vide ""
// .toString() → convertit la valeur en texte (utile si c'est un nombre, par ex)
// .trim()     → supprime les espaces avant et après
export const isFilled = (value) =>
  value !== undefined &&
  value !== null &&
  value.toString().trim() !== "";

// ─── Hook personnalisé : useFormValidation ───────────────────────────────────
// En React, un "hook" est une fonction qui commence par "use".
// Elle permet de réutiliser une logique dans plusieurs composants.
//
// Ce hook prend l'objet "form" en entrée (celui qui contient toutes les
// valeurs du formulaire) et retourne { isValid } : un booléen qui dit
// si le formulaire est valide ou non.
//
// Props reçues :
//   - form → objet contenant toutes les valeurs du formulaire
//            (ex : { nom: "Dupont", prenom: "Jean", date: "03/02/2026", ... })
export default function useFormValidation(form) {
  // ─── Validation de tous les champs ─────────────────────────────────────
  // Le "&&" (ET logique) signifie que TOUS les conditions doivent être
  // vraies pour que isValid soit true.
  // Si UNE SEULE condition est fausse, isValid sera false
  // et React s'arrêtera même de vérifier les suivantes
  // (comportement appelé "short-circuit evaluation" ou évaluation paresseuse)
  const isValid =
    // ── Informations personnelles ──────────────────────────────────────
    isFilled(form.nom) &&                // ← Le nom est rempli ?
    isFilled(form.prenom) &&             // ← Le prénom est rempli ?
    isValidDateFR(form.date) &&          // ← La date est au bon format JJ/MM/AAAA ?

    // ── Identifiants Mail ──────────────────────────────────────────────
    isFilled(form.IdMail) &&             // ← L'ID mail est rempli ?
    isFilled(form.MDPmail) &&            // ← Le mot de passe mail est rempli ?

    // ── Identifiants Google Agenda ─────────────────────────────────────
    isFilled(form.IdGoogleAgenda) &&     // ← L'ID Google Agenda est rempli ?
    isFilled(form.MDPGoogle) &&          // ← Le mot de passe Google est rempli ?

    // ── Identifiants TSE ───────────────────────────────────────────────
    isFilled(form.IdTSE) &&              // ← L'ID TSE est rempli ?
    isFilled(form.MDPTSE) &&             // ← Le mot de passe TSE est rempli ?

    // ── Identifiants EBP ───────────────────────────────────────────────
    isFilled(form.IdEBP) &&              // ← L'ID EBP est rempli ?
    isFilled(form.MDPEBP) &&             // ← Le mot de passe EBP est rempli ?

    // ── Identifiants VPN ───────────────────────────────────────────────
    isFilled(form.IdVPN) &&              // ← L'ID VPN est rempli ?
    isFilled(form.MDPVPN) &&             // ← Le mot de passe VPN est rempli ?

    // ── Identifiants PC ────────────────────────────────────────────────
    isFilled(form.IdPC) &&               // ← L'ID PC est rempli ?
    isFilled(form.MDPPC) &&              // ← Le mot de passe PC est rempli ?

    // ── Identifiants Bios ──────────────────────────────────────────────
    isFilled(form.IdBios) &&             // ← L'ID Bios est rempli ?
    isFilled(form.MDPBios) &&            // ← Le mot de passe Bios est rempli ?

    // ── Identifiants Windows ───────────────────────────────────────────
    isFilled(form.IdWindows) &&          // ← L'ID Windows est rempli ?
    isFilled(form.MDPWindows) &&         // ← Le mot de passe Windows est rempli ?

    // ── Informations de signature ──────────────────────────────────────
    isFilled(form.Monsieur) &&           // ← Le nom du signataire est rempli ?
    isValidDateFR(form.DateSignature) && // ← La date de signature est valide ?
    isFilled(form.signatureImage) &&     // ← La signature a été dessinée ?
    isFilled(form.NomSignature);         // ← La signature du nom est présente ?

  // ─── Retour du résultat ──────────────────────────────────────────────────
  // On retourne un objet { isValid } pour pouvoir le destructurer
  // facilement dans le composant qui utilise ce hook :
  //   const { isValid } = useFormValidation(form);
  return { isValid };
}