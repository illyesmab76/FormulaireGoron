export const generateStrongPassword = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < 16; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

/**
 * ✅ CORRIGÉ : 1ère lettre PRÉNOM + 2 premières lettres NOM
 * Exemple: Pierre DUPONT → PDU
 */
export const generateTrigramme = (prenom, nom) => {
  if (!prenom || !nom) return "";
  const p = String(prenom).trim().charAt(0).toUpperCase();
  const n = String(nom).trim().slice(0, 2).toUpperCase();
  return `${p}${n}`;
};