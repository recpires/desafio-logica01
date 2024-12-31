let nomeDoHeroi = "John Snow";
let xp = 9000;

function determinarNivel(xp) {
  if (xp <= 999) {
    return "Iniciante";
  } else if (xp <= 2000) {
    return "nível BRONZE";
  } else if (xp <= 5000) {
    return "nível PRATA";
  } else if (xp <= 7000) {
    return "nível OURO";
  } else if (xp <= 8000) {
    return "nível PLATINA";
  } else if (xp <= 9000) {
    return "nível ASCENDENTE";
  } else if (xp <= 9999) {
    return "nível IMORTAL";
  } else {
    return "Você se tornou RADIANTE!";
  }
}

let nivel = determinarNivel(xp);
console.log(`${nomeDoHeroi}, ${nivel}`);

if (xp > 9000 && xp <= 9999) {
  console.log("Parabéns, você está prestes a se tornar IMORTAL!");
} else if (xp >= 10001) {
  console.log("Parabéns, você é um dos melhores jogadores do mundo!");
}