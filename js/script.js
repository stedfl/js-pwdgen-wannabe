const userFirstName = prompt('Qual è il tuo nome? Per favore scrivilo senza spazi.');
const userLastName = prompt('Qual è il tuo cognome? Per favore scrivilo senza spazi.');
const userBestColor = prompt('Qual è il tuo colore preferito? Per favore scrivilo senza spazi.');
const year = 22;
const passwordGenerator = userFirstName + userLastName + userBestColor + year;

const output = `
  La password che hai generato è "${passwordGenerator}"
`;

document.getElementById('password').innerHTML = output;

