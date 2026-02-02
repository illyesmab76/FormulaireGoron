export const isValidDateFR = (date) =>
  /^\d{2}\/\d{2}\/\d{4}$/.test(date);

export const isFilled = (value) =>
  value !== undefined &&
  value !== null &&
  value.toString().trim() !== "";

export default function useFormValidation(form) {
  const isValid =
    isFilled(form.nom) &&
    isFilled(form.prenom) &&
    isValidDateFR(form.date) &&

    isFilled(form.IdMail) &&
    isFilled(form.MDPmail) &&

    isFilled(form.IdGoogleAgenda) &&
    isFilled(form.MDPGoogle) &&

    isFilled(form.IdTSE) &&
    isFilled(form.MDPTSE) &&

    isFilled(form.IdEBP) &&
    isFilled(form.MDPEBP) &&

    isFilled(form.IdVPN) &&
    isFilled(form.MDPVPN) &&

    isFilled(form.IdPC) &&
    isFilled(form.MDPPC) &&

    isFilled(form.IdBios) &&
    isFilled(form.MDPBios) &&

    isFilled(form.IdWindows) &&
    isFilled(form.MDPWindows) &&

    isFilled(form.Monsieur) &&
    isValidDateFR(form.DateSignature) &&

    isFilled(form.signatureImage) &&
    isFilled(form.NomSignature);

  return { isValid };
}
