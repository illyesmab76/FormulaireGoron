export const generateStrongPassword = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let passwordArray = [];

  // 11 caractères aléatoires
  for (let i = 0; i < 11; i++) {
    passwordArray.push(chars.charAt(Math.floor(Math.random() * chars.length)));
  }

  // On insère le @ à un index aléatoire entre 0 et 11
  const randomIndex = Math.floor(Math.random() * 12);
  passwordArray.splice(randomIndex, 0, "@");

  return passwordArray.join("");
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