// ─── Importation de useState depuis React ───────────────────────────────────
// (Note : useState est importé mais pas utilisé dans ce fichier)
import { useState } from "react";
// ─── Importation du composant InputMui personnalisé ─────────────────────────
import InputMui from "./InputMui";

// ─── Fonction utilitaire : formate une date au format DD/MM/YYYY ─────────────
// Elle est déclarée en dehors du composant car elle ne dépend d'aucune prop
// ou state → ça évite de la recréer à chaque rendu.
// "value" = le texte brut tapé par l'utilisateur dans l'input
const formatDateInput = (value) => {
  // ─── Étape 1 : Nettoyer l'entrée ───────────────────────────────────────────
  // replace(/\D/g, "") supprime TOUT ce qui n'est pas un chiffre
  // Ex : "12/05" devient "1205"
  // /\D/g = expression régulière → \D = "pas un chiffre", g = partout dans le texte
  let v = value.replace(/\D/g, "");

  // ─── Étape 2 : Limiter à 8 chiffres max (DD MM YYYY) ────────────────────
  // slice(0, 8) garde uniquement les 8 premiers caractères
  if (v.length > 8) v = v.slice(0, 8);

  // ─── Étape 3 : Découper la chaîne en jour, mois, année ──────────────────
  // slice(start, end) extrait une partie de la chaîne
  let day = v.slice(0, 2);    // ← Les 2 premiers chiffres  → jour
  let month = v.slice(2, 4);  // ← Les 2 suivants           → mois
  let year = v.slice(4, 8);   // ← Les 4 suivants           → année

  // ─── Étape 4 : Valider les valeurs ───────────────────────────────────────
  // Si le jour dépasse 31, on le force à 31
  if (day.length === 2 && Number(day) > 31) day = "31";
  // Si le mois dépasse 12, on le force à 12
  if (month.length === 2 && Number(month) > 12) month = "12";
  // Si l'année est avant 2026, on la force à 2026
  if (year.length === 4 && Number(year) < 2026) year = "2026";

  // ─── Étape 5 : Reconstruire la date avec des "/" ────────────────────────
  // On vérifie combien de chiffres ont été tapés pour décider
  // où placer les séparateurs "/" :
  if (v.length >= 5) return `${day}/${month}/${year}`; // ← Ex : "12/05/2026"
  if (v.length >= 3) return `${day}/${month}`;         // ← Ex : "12/05"
  return day;                                          // ← Ex : "12"
};

// ─── Composant principal : DateInput ─────────────────────────────────────────
// Props reçues :
//   - label    → texte affiché au-dessus ou à l'intérieur de l'input
//   - name     → nom du champ (utilisé pour identifier l'input)
//   - value    → valeur actuelle de l'input (contrôlée par le parent)
//   - onChange → fonction appelée chaque fois que l'utilisateur tape
//   - required → si true, le champ sera obligatoire
function DateInput({ label, name, value, onChange, required }) {
  // ─── Fonction appelée à chaque keystroke dans l'input ───────────────────
  const handleChange = (e) => {
    // On passe la valeur brute tapée dans formatDateInput pour la formater
    const formatted = formatDateInput(e.target.value);

    // ─── On appelle onChange (fonction du composant parent) ──────────────
    // On crée un objet qui ressemble à un vrai événement DOM natif
    // avec "target.name" et "target.value", pour que le parent puisse
    // le gérer de la même façon qu'un input classique.
    onChange({
      target: {
        name,          // ← nom du champ (ex : "date_naissance")
        value: formatted, // ← la valeur formatée (ex : "12/05/2026")
      },
    });
  };

  // ─── Rendu du composant ──────────────────────────────────────────────────
  return (
    <InputMui
      label={label}         // ← Texte du label
      name={name}           // ← Nom du champ
      value={value}         // ← Valeur actuelle (contrôlée par le parent)
      onChange={handleChange} // ← Notre fonction qui formate avant de remonter
      // ─── inputProps : propriétés appliquées directement à l'input HTML ──
      inputProps={{
        maxLength: 10,                    // ← Limite à 10 caractères (DD/MM/YYYY)
        inputMode: "numeric",            // ← Sur mobile, affiche le clavier numérique
        pattern: "\\d{2}/\\d{2}/\\d{4}", // ← Format attendu : 2 chiffres/2 chiffres/4 chiffres
      }}
      required={required}   // ← Si true, le champ sera obligatoire en HTML
      fullWidth             // ← L'input prend toute la largeur disponible
    />
  );
}

// ─── Export du composant ─────────────────────────────────────────────────────
export default DateInput;