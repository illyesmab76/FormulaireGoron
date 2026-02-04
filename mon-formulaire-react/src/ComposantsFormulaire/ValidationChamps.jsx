const isFilled = (v) => v && v.toString().trim() !== "";
const isValidDateFR = (d) => /^\d{2}\/\d{2}\/\d{4}$/.test(d);

export default function ValidationChamps(form) {
  // Validation pour la première étape
  const isValid = 
    isFilled(form.nom) && 
    isFilled(form.prenom) && 
    isValidDateFR(form.date) && 
    isFilled(form.modele);

  // Validation pour l'étape Info PC
  const isValidPC = 
    isFilled(form.nomMachine) && 
    isFilled(form.marque) && 
    isFilled(form.numeroSerie) && 
    isFilled(form.garantie);

  return { isValid, isValidPC };
}