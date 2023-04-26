document.body.onload = createKeys;

function createKeys() {

  // keys English
  const keysLowerCase = [
    ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "Enter"],
    ["Capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\"],
    ["LShift", "`", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "RShift"],
    ["fn", "Ctrl", "Alt", "Cmd", "Space", "Cmd", "Alt", "←", "↓", "→"]
  ];

  const keysUpperCase = [
    ["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "Enter"],
    ["Capslock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", `"`, "|"],
    ["LShift", "~", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "↑", "RShift"],
    ["fn", "Ctrl", "Alt", "Cmd", "Space", "Cmd", "Alt", "←", "↓", "→"]
  ];

  // keys Russian
  const keysRuLowerCase = [
    ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "Enter"],
    ["Capslock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "ё"],
    ["LShift", "]", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/", "↑", "RShift"],
    ["fn", "Ctrl", "Alt", "Cmd", "Space", "Cmd", "Alt", "←", "↓", "→"]
  ];

  const keysRuUpperCase = [
    ["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "Enter"],
    ["Capslock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Ё"],
    ["LShift", "[", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "/", "↑", "RShift"],
    ["fn", "Ctrl", "Alt", "Cmd", "Space", "Cmd", "Alt", "←", "↓", "→"]
  ];

  const languages = ['en', 'ru'];

  //container-wrapper

  const container = document.createElement("div");
  container.setAttribute("id", "container");

  document.body.appendChild(container);

  //input

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "input-field");
  input.setAttribute("placeholder", "Type anything here...")
  container.appendChild(input);

  //keyboard

  const keyboard = document.createElement("div");
  keyboard.setAttribute("id", "virtual-keyboard");
  container.appendChild(keyboard);

  //key rows

  const row1 = keysLowerCase[0];
  const row2 = keysLowerCase[1];
  const row3 = keysLowerCase[2];
  const row4 = keysLowerCase[3];
  const row5 = keysLowerCase[4];

  const allRows = [...row1, ...row2, ...row3, ...row4, ...row5];

//   console.log(allRows)

  allRows.forEach((el) => {
    const keyBtn = document.createElement("div");
    keyBtn.setAttribute("id", "key-btn");
    keyboard.appendChild(keyBtn);
    keyBtn.innerHTML = el;
  })

  // arrow-wrapper

  const arrowWrapper = document.querySelectorAll("#virtual-keyboard :nth-child(n+62)");
  console.log(arrowWrapper[0].innerHTML)
//   arrowWrapper[0].style.display = "flex";
//   arrowWrapper.style.width = "80px";


  //clicks and keypresses behaviour

  document.addEventListener("keydown", (event) => {
    // console.log(event.key, event.code) s, KeyS

    const isShiftPressed = event.shiftKey;
    const isCtrlAltPressed = event.ctrlKey && event.altKey;
    const key = event.key;

    // if(isShiftPressed) {
    //     if(keysLowerCase.includes(key)) {
    //         event.preventDefault;
    //         const uppercaseInd = keysLowerCase.indexOf(key);
    //         const uppercaseKey = keysUpperCase[uppercaseInd];

    //     }

    // }

    // if (isCtrlAltPressed) {
    //     if (languages.includes(key)) {
    //       // Change the language
    //       console.log(`Switched to ${key} language`);
    //     }
    //   }
    // if(event.target.innerHTML) {
    //     const key = event.target.innerHTML;
    //     input.value += key;
    // }
  });

    

  //Event keys

//   let lastTime = Date.now();

//   document.addEventListener("keypress", (event) => {
//     console.log(event.code); //ShiftLeft
//     console.log(event.key); //Shift
//     console.log(keyBtn);
//     if (keysLowerCase[0].includes(event.key)) keyBtn.classList.add("loader");
//     if (keysLowerCase[1].includes(event.key)) keyBtn.classList.add("loader");
//     if (keysLowerCase[2].includes(event.key)) keyBtn.classList.add("loader");
//     if (keysLowerCase[3].includes(event.key)) keyBtn.classList.add("loader");

    // if (KeyboardEvent.shiftKey) {
    //     return keysLowerCase;
    // }else{
    //     return keysShiftCase;
    // }

    
    
    //uppercase
    // if (event.key === "Shift") {
    //     keyboard.style.display.none;
    //     keysShiftCase.forEach((row) => {

    //         keyRow.classList.add("key-row");
    //         keyboard.appendChild(keyRow);
        
    //         row.forEach((key) => {
              
    //           keyBtn.classList.add("key-btn");
    //           keyBtn.textContent = key;
    //           keyBtn.dataset.key = key;
    //           keyRow.appendChild(keyBtn);
    //         });
    //     });
    // }

}
