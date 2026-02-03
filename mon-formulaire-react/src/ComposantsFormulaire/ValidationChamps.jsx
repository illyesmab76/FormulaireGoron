// src/Composants/ValidationChamps.jsx
const isFilled = (v) => v && v.toString().trim() !== "";
const isValidDateFR = (d) => /^\d{2}\/\d{2}\/\d{4}$/.test(d);

export default function ValidationChamps(form) {
  const isValid = 
    isFilled(form.nom) && 
    isFilled(form.prenom) && 
    isValidDateFR(form.date) && 
    isFilled(form.modele);

  return { isValid };
}