export const isValidDateFR = (date) =>
  /^\d{2}\/\d{2}\/\d{4}$/.test(date);

export const isFilled = (value) =>
  value !== undefined &&
  value !== null &&
  value.toString().trim() !== "";

const ValidationRemise = (form) => {
  const isValid =
    isFilled(form.nom) &&
    isFilled(form.prenom) &&
    isValidDateFR(form.date) &&
    isFilled(form.Monsieur) &&
    isValidDateFR(form.DateSignature) &&
    isFilled(form.signatureImage) &&
    isFilled(form.NomSignature);

  return { isValid };
};

export default ValidationRemise;
