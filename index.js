document.body.onload = createKeys;

function createKeys() {
  // keys
  const keysLowerCase = [
    ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
    ["  ", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", `\n`],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
  ];

  const keysShiftCase = [
    ["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ""],
    ["  ", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", ":", `"`, "|"],
    ["z", "x", "c", "v", "b", "n", "m", "<", ">", "?"],
  ];

  //input

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "input-field");
  document.body.appendChild(input);

  input.style.display = "flex";

  //keyboard

  const keyboard = document.createElement("div");
  keyboard.setAttribute("id", "virtual-keyboard");
  document.body.appendChild(keyboard);

  
}
