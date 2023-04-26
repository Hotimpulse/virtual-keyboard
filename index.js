document.body.onload = createKeys;

function createKeys() {

  // keys English
  const keysLowerCase = [
    ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "Enter"],
    ["Capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\"],
    ["Shift", "`", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift"],
    ["fn", "Ctrl", "Alt", "Cmd", "Space", "Cmd", "Alt", "←", "↓", "→"]
  ];

  const keysUpperCase = [
    ["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "Enter"],
    ["Capslock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", `"`, "|"],
    ["Shift", "~", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "↑", "Shift"],
    ["fn", "Ctrl", "Alt", "Cmd", "Space", "Cmd", "Alt", "←", "↓", "→"]
  ];

  // keys Russian
  const keysRuLowerCase = [
    ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "Enter"],
    ["Capslock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "ё"],
    ["Shift", "]", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/", "↑", "Shift"],
    ["fn", "Ctrl", "Alt", "Cmd", "Space", "Cmd", "Alt", "←", "↓", "→"]
  ];

  const keysRuUpperCase = [
    ["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "Enter"],
    ["Capslock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Ё"],
    ["Shift", "[", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "/", "↑", "Shift"],
    ["fn", "Ctrl", "Alt", "Cmd", "Space", "Cmd", "Alt", "←", "↓", "→"]
  ];

  let language = "en";

  //container-wrapper

  const container = document.createElement("div");
  container.setAttribute("id", "container");

  document.body.appendChild(container);

  //input

  const input = document.createElement("textarea");
  input.setAttribute("type", "text");
  input.setAttribute("id", "input-field");
  input.setAttribute("placeholder", "Type anything here...")
  input.setAttribute("size", "1");


  container.appendChild(input);


  //keyboard

  const keyboard = document.createElement("div");
  keyboard.setAttribute("id", "virtual-keyboard");
  container.appendChild(keyboard);

//Keyboard behavior 

//Shortcut combos behaviour => 
// Ctrl+Alt to change language, Hold Shift to change keyboard to uppercase
// Capslock to change keyboard to uppercase and Tab to add four spaces
// console.log(keysLowerCase.toString())

//key rows
let row1 = keysLowerCase[0];
let row2 = keysLowerCase[1];
let row3 = keysLowerCase[2];
let row4 = keysLowerCase[3];
let row5 = keysLowerCase[4];
let allRows = [...row1, ...row2, ...row3, ...row4, ...row5];

 function setLanguage(language) {

    if (language === "en") {
      keyboard.innerHTML = "";
      allRows.forEach((el) => {
        const keyBtn = document.createElement("div");
        keyBtn.setAttribute("id", "key-btn");
        keyboard.appendChild(keyBtn);
        keyBtn.innerHTML = el;
      }) 
    } else if (language === "ru") {
        keyboard.innerHTML = "";
        let row1 = keysRuLowerCase[0];
        let row2 = keysRuLowerCase[1];
        let row3 = keysRuLowerCase[2];
        let row4 = keysRuLowerCase[3];
        let row5 = keysRuLowerCase[4];

        allRows = [...row1, ...row2, ...row3, ...row4, ...row5];

        allRows.forEach((el) => {
            const keyBtnRu = document.createElement("div");
            keyBtnRu.setAttribute("id", "key-btn-ru");
            keyboard.appendChild(keyBtnRu);
            keyBtnRu.innerHTML = el;
        })
    }
 }

 setLanguage("en");

 // typing in English

 document.addEventListener("keydown", (event) => {
    let key = event.key;
    if (!input.matches(":focus")) {
        if (allRows.includes(event.key) && (event.key !== "Backspace" && 
                                            event.key !== "Tab" &&
                                            event.key !== "Capslock" &&
                                            event.key !== "Shift" && 
                                            event.key !== "Alt" &&
                                            event.key !== "Enter")) {
            input.value += key;
        }else if(event.key === "Backspace") {
            event.preventDefault();
            input.value = input.value.slice(0, -1);
        }else if(event.key === " ") {
            input.value += " ";
        }else if(event.key === "Enter") {
            event.preventDefault();
            input.value += "\n";
        }else if(event.key === "Tab") {
            event.preventDefault();
            input.value += "    ";
        }
    }

  });

// clicking

  keyboard.addEventListener("click", (event) => {
    console.log(event.key); //Shift
  })


  // changing languages

  document.addEventListener("keydown", (event) => {
    // console.log(event.key, event.code)

    // const isShiftPressed = event.shiftKey;
    const isCtrlAltPressed = event.ctrlKey && event.altKey; //language change
    isCtrlAltPressed ? setLanguage("ru") : setLanguage("en");

  });

}