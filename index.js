const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

pswEl1 = document.getElementById("psw-el-1");
pswEl2 = document.getElementById("psw-el-2");
function generateRand() {
  rand = Math.floor(Math.random() * characters.length);
  return rand;
}

function generatePsw() {
  psw1 = [];
  psw2 = [];
  for (let i = 1; i < 16; i++) {
    randomIndex1 = generateRand();
    randomIndex2 = generateRand();
    psw1.push(characters[randomIndex1]);
    psw2.push(characters[randomIndex2]);
  }
  concatedPsw1 = psw1.join().replace(/[, ]/g, "");
  concatedPsw2 = psw2.join().replace(/[, ]/g, "");
  pswEl1.textContent = concatedPsw1;
  pswEl2.textContent = concatedPsw2;
}
