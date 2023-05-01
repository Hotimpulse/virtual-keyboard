document.body.onload = createKeys;

function createKeys() {

  // keys English
  const keysLowerCase = [
    ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "Enter"],
    ["Capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\"],
    ["Shift", "`", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift"],
    ["fn", "Control", "Alt", "Meta", "Space", "Meta", "Alt", "←", "↓", "→"]
  ];

  const keysUpperCase = [
    ["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "Enter"],
    ["Capslock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", `"`, "|"],
    ["Shift", "~", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "↑", "Shift"],
    ["fn", "Control", "Alt", "Meta", "Space", "Meta", "Alt", "←", "↓", "→"]
  ];

  // keys Russian
  const keysRuLowerCase = [
    ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "Enter"],
    ["Capslock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "ё"],
    ["Shift", "]", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/", "↑", "Shift"],
    ["fn", "Control", "Alt", "Meta", "Space", "Meta", "Alt", "←", "↓", "→"]
  ];

  const keysRuUpperCase = [
    ["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "Enter"],
    ["Capslock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Ё"],
    ["Shift", "[", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "/", "↑", "Shift"],
    ["fn", "Control", "Alt", "Meta", "Space", "Meta", "Alt", "←", "↓", "→"]
  ];

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

//key rows, lowercase

let row1 = keysLowerCase[0];
let row2 = keysLowerCase[1];
let row3 = keysLowerCase[2];
let row4 = keysLowerCase[3];
let row5 = keysLowerCase[4];

const allLowerRows = [...row1, ...row2, ...row3, ...row4, ...row5];

let ruRow1 = keysRuLowerCase[0];
let ruRow2 = keysRuLowerCase[1];
let ruRow3 = keysRuLowerCase[2];
let ruRow4 = keysRuLowerCase[3];
let ruRow5 = keysRuLowerCase[4];

const allLowerRuRows = [...ruRow1, ...ruRow2, ...ruRow3, ...ruRow4, ...ruRow5];

//key rows, uppercase

let rowUp1 = keysUpperCase[0];
let rowUp2 = keysUpperCase[1];
let rowUp3 = keysUpperCase[2];
let rowUp4 = keysUpperCase[3];
let rowUp5 = keysUpperCase[4];

const allUpperRows = [...rowUp1, ...rowUp2, ...rowUp3, ...rowUp4, ...rowUp5];

let rowUpRu1 = keysRuUpperCase[0];
let rowUpRu2 = keysRuUpperCase[1];
let rowUpRu3 = keysRuUpperCase[2];
let rowUpRu4 = keysRuUpperCase[3];
let rowUpRu5 = keysRuUpperCase[4];

const allUpperRuRows = [...rowUpRu1, ...rowUpRu2, ...rowUpRu3, ...rowUpRu4, ...rowUpRu5];

let allKeys = [...row1, ...row2, ...row3, ...row4, ...row5, 
                ...rowUp1, ...rowUp2, ...rowUp3, ...rowUp4, ...rowUp5];

let allRuKeys = [...ruRow1, ...ruRow2, ...ruRow3, ...ruRow4, ...ruRow5, 
                ...rowUpRu1, ...rowUpRu2, ...rowUpRu3, ...rowUpRu4, ...rowUpRu5];

let ultimateKeys = [...allKeys, ...allRuKeys];

function renderKeyboard(language, state) {
    
    if ((language === "en") && (state === "lowercase")) {
        keyboard.innerHTML = "";
        allLowerRows.forEach((el) => {
            const keyBtn = document.createElement("div");
            const key = el.toString();
            keyBtn.setAttribute("id", "key-btn");
            keyBtn.setAttribute("data-key", key);
            keyboard.appendChild(keyBtn);
            keyBtn.innerHTML = el;
            if(keyBtn.innerHTML === "Control") keyBtn.innerText = "Ctrl";
            if(keyBtn.innerHTML === "Meta") keyBtn.innerText = "Cmd";
        });
    }else if ((language === "ru") && (state === "lowercase")) {
        keyboard.innerHTML = "";
        allLowerRuRows.forEach((el) => {
            const keyBtn = document.createElement("div");
            const key = el.toString();
            keyBtn.setAttribute("id", "key-btn");
            keyBtn.setAttribute("data-key", key);
            keyboard.appendChild(keyBtn);
            keyBtn.innerHTML = el;
            if(keyBtn.innerHTML === "Control") keyBtn.innerText = "Ctrl";
            if(keyBtn.innerHTML === "Meta") keyBtn.innerText = "Cmd";
        }); 
    } else if ((language === "en") && (state === "uppercase")) {
        keyboard.innerHTML = "";
        allUpperRows.forEach((el) => {
            const keyBtn = document.createElement("div");
            const key = el.toString();
            keyBtn.setAttribute("id", "key-btn");
            keyBtn.setAttribute("data-key", key);
            keyboard.appendChild(keyBtn);
            keyBtn.innerHTML = el;
            if(keyBtn.innerHTML === "Control") keyBtn.innerText = "Ctrl";
            if(keyBtn.innerHTML === "Meta") keyBtn.innerText = "Cmd";
            });
    } else if ((language === "ru") && (state === "uppercase")) {
        keyboard.innerHTML = "";
        allUpperRuRows.forEach((el) => {
            const keyBtn = document.createElement("div");
            const key = el.toString();
            keyBtn.setAttribute("id", "key-btn");
            keyBtn.setAttribute("data-key", key);
            keyboard.appendChild(keyBtn);
            keyBtn.innerHTML = el;
            if(keyBtn.innerHTML === "Control") keyBtn.innerText = "Ctrl";
            if(keyBtn.innerHTML === "Meta") keyBtn.innerText = "Cmd";
            });
    }

}

// change language 

// let currentLanguage = "en";
let language = localStorage.getItem("language");
let state = localStorage.getItem("state");

function generateKeyboard() {

    if (!state) {
        state = "lowercase";
        localStorage.setItem("state", state);
    }

    if (!language) {
        language = "en";
        localStorage.setItem("language", language);
    }

    renderKeyboard(language, state);
    
    if (localStorage.getItem("language", language) === "ru") {
        renderKeyboard(language, state);
        language === "ru";
        state = "lowercase";
        localStorage.setItem("language", language);
        localStorage.setItem("state", state);
    }
    
    if (localStorage.getItem("language", language) === "en") {
        renderKeyboard(language, state);
        language === "en";
        state = "lowercase";
        localStorage.setItem("language", language);
        localStorage.setItem("state", state);
    }
}

generateKeyboard(); //generates keyboard via renderKeyboard() and saves the state to local storage

function toggleKeyboardLanguage() {

    if (localStorage.getItem("language") === "en") {
        language = "ru"; //localStorage variable
        generateKeyboard();
        localStorage.setItem("language", language);  
    } else if (localStorage.getItem("language") === "ru") {
        language = "en"; //localStorage variable
        generateKeyboard();
        localStorage.setItem("language", language); 
    }
}

function toggleKeyBoardCase() {
    language = localStorage.getItem("language");
    state = localStorage.getItem("state");
    if ((state === "lowercase") && (language === "ru")) {
        renderKeyboard("ru", "uppercase");
        state = localStorage.setItem("state", state);
        language = localStorage.setItem("language", language);

    }else if ((state === "uppercase") && (language === "ru")) {
        renderKeyboard("ru", "lowercase");
        state = localStorage.setItem("state", state);
        language = localStorage.setItem("language", language);

    }else if ((state === "lowercase") && (language === "en")) {
        renderKeyboard("en", "uppercase");
        state = localStorage.setItem("state", state);
        language = localStorage.setItem("language", language);

    }else if ((state === "uppercase") && (language === "en")) {
        renderKeyboard("en", "lowercase");
        state = localStorage.setItem("state", state);
        language = localStorage.setItem("language", language);

    }
}

// shift + caps behavior 
let capsOn = false;
let isCtrlKeyPressed = false;
let isAltKeyPressed = false;

document.addEventListener("keydown", (event) => {
    if (event.key === "Control") isCtrlKeyPressed = true;
    if (event.key === "Alt") isAltKeyPressed = true;
    if (event.key === "CapsLock" && (capsOn === false)) {
        toggleKeyBoardCase();
        capsOn = true;
    } else if (event.key === "Shift") {
        toggleKeyBoardCase();
    } else if (isCtrlKeyPressed && isAltKeyPressed) {
        toggleKeyboardLanguage();
    }
});

document.addEventListener("keyup", (event) => {
    if ((event.key === "Shift") && (localStorage.getItem("language") === "ru")) {
        renderKeyboard("ru", "lowercase");
    }else if ((event.key === "Shift") && (localStorage.getItem("language") === "en")){
        renderKeyboard("en", "lowercase");
    }
    
    
    else if ((event.key === "CapsLock") && (capsOn === true) && (localStorage.getItem("language") === "en")) {
        renderKeyboard("en", "lowercase");
        capsOn = false;
    }else if (event.key === "CapsLock" && (capsOn === true) && (localStorage.getItem("language") === "ru")) {
        renderKeyboard("ru", "lowercase");
        capsOn = false;
    }
    if (event.key === "Control") {
        isCtrlKeyPressed = false;
    }
    if (event.key === "Alt") {
        isAltKeyPressed = false;
    }
});

// highlights
 document.addEventListener("keydown", (event) => {
    const engkey = event.key;
    const pseudoRus = convertToRussian(engkey);
    const pseudoEng = convertRussianToEnglish(engkey);
    const keyElement = keyboard.querySelector(`[data-key="${engkey}"]`);
    const fakeEngElement = keyboard.querySelector(`[data-key="${pseudoRus}"]`);
    const fakeRuElement = keyboard.querySelector(`[data-key="${pseudoEng}"]`);
    const ruKeyElement = keyboard.querySelector(`[data-key="${convertToRussian(engkey)}"]`);
    if (keyElement) {
        keyElement.classList.add("loader");
        keyElement.classList.toggle("rgb");
    }
    if (ruKeyElement) {
        ruKeyElement.classList.add("loader");
        ruKeyElement.classList.toggle("rgb");
    }
    if (fakeEngElement) {
        fakeEngElement.classList.add("loader");
        fakeEngElement.classList.toggle("rgb");
    }
    if (fakeRuElement) {
        fakeRuElement.classList.add("loader");
        fakeRuElement.classList.toggle("rgb");
    }
 })
 document.addEventListener("keyup", (event) => {
    const engkey = event.key;
    const pseudoRus = convertToRussian(engkey);
    const pseudoEng = convertRussianToEnglish(engkey);
    const keyElement = keyboard.querySelector(`[data-key="${engkey}"]`);
    const fakeEngElement = keyboard.querySelector(`[data-key="${pseudoRus}"]`);
    const fakeRuElement = keyboard.querySelector(`[data-key="${pseudoEng}"]`);
    const ruKeyElement = keyboard.querySelector(`[data-key="${convertToRussian(engkey)}"]`);
    if (keyElement) {
        keyElement.classList.remove('loader');
    }
    if (ruKeyElement) {
        ruKeyElement.classList.remove('loader');
    }
    if (fakeEngElement) {
        fakeEngElement.classList.remove('loader');
    }
    if (fakeRuElement) {
        fakeRuElement.classList.remove('loader');
    }
 })

 // typing behavior - lowercase and uppercase, 2 languages
 const englishToRussianMap = {
    'a': 'ф',
    'b': 'и',
    'c': 'с',
    'd': 'в',
    'e': 'у',
    'f': 'а',
    'g': 'п',
    'h': 'р',
    'i': 'ш',
    'j': 'о',
    'k': 'л',
    'l': 'д',
    'm': 'ь',
    'n': 'т',
    'o': 'щ',
    'p': 'з',
    'q': 'й',
    'r': 'к',
    's': 'ы',
    't': 'е',
    'u': 'г',
    'v': 'м',
    'w': 'ц',
    'x': 'ч',
    'y': 'н',
    'z': 'я',
    '[': 'х',
    ']': 'ъ',
    ';': 'ж',
    "'": 'э',
    ',': 'б',
    '.': 'ю',
    '`': 'ё',
    '/': '.',
    '\\': '\\',
    "A": "Ф",
    "B": "И",
    "C": "С",
    "D": "В",
    "E": "У",
    "F": "А",
    "G": "П",
    "H": "Р",
    "I": "Ш",
    "J": "О",
    "K": "Л",
    "L": "Д",
    "M": "Ь",
    "N": "Т",
    "O": "Щ",
    "P": "З",
    "Q": "Й",
    "R": "К",
    "S": "Ы",
    "T": "Е",
    "U": "Г",
    "V": "М",
    "W": "Ц",
    "X": "Ч",
    "Y": "Н",
    "Z": "Я",
    '{': 'Х',
    '}': 'Ъ',
    ':': 'Ж',
    "\"": 'Э',
    '<': 'Б',
    '>': 'Ю',
    '|': 'Ё',
    '?': '?',
    '~': ']',
  };

// 
function convertToRussian(str) {
    return str
        .split('')
        .map(char => englishToRussianMap[char] || char)
        .join('');
}

function convertRussianToEnglish(str) {
    const russianToEnglish = {
      'й': 'q', 'ц': 'w', 'у': 'e', 'к': 'r', 'е': 't', 'н': 'y', 'г': 'u', 'ш': 'i', 'щ': 'o', 'з': 'p',
      'х': '[', 'ъ': ']', 'ф': 'a', 'ы': 's', 'в': 'd', 'а': 'f', 'п': 'g', 'р': 'h', 'о': 'j', 'л': 'k',
      'д': 'l', 'ж': ';', 'э': '\'', 'я': 'z', 'ч': 'x', 'с': 'c', 'м': 'v', 'и': 'b', 'т': 'n', 'ь': 'm',
      'б': ',', 'ю': '.', '.': '/', 'ё': '`',
      'Й': 'Q', 'Ц': 'W', 'У': 'E', 'К': 'R', 'Е': 'T', 'Н': 'Y', 'Г': 'U', 'Ш': 'I', 'Щ': 'O', 'З': 'P',
      'Х': '{', 'Ъ': '}', 'Ф': 'A', 'Ы': 'S', 'В': 'D', 'А': 'F', 'П': 'G', 'Р': 'H', 'О': 'J', 'Л': 'K',
      'Д': 'L', 'Ж': ':', 'Э': '"', 'Я': 'Z', 'Ч': 'X', 'С': 'C', 'М': 'V', 'И': 'B', 'Т': 'N', 'Ь': 'M',
      'Б': '<', 'Ю': '>', ',': '?', 'Ё': '~'
    };
  
    return str.split('').map(char => russianToEnglish[char] || char).join('');
  }
  
 document.addEventListener("keydown", (event) => {
    
    let key = event.key;
    // english letters
    if (ultimateKeys.includes(key)) {
        
        if (!input.matches(":focus") && localStorage.getItem("language") === "en") {
            if (allKeys.includes(convertRussianToEnglish(key)) && (key !== "Backspace" && 
                                                key !== "Tab" &&
                                                key !== "CapsLock" &&
                                                key !== "Shift" && 
                                                key !== "Alt" &&
                                                key !== "Control" &&
                                                key !== "Meta" &&
                                                key !== "Enter")) {
                // input.value += key;
                input.value += convertRussianToEnglish(key);
            } else if (key === "Backspace") {
                    event.preventDefault();
                    input.value = input.value.slice(0, -1);
                }else if(key === " ") {
                    event.preventDefault();
                    input.value += " ";
                }else if(key === "Enter") {
                    event.preventDefault();
                    input.value += "\n";
                }else if(key === "Tab") {
                    event.preventDefault();
                    input.value += "    ";
                }
        }
        
        if (!input.matches(":focus") && localStorage.getItem("language") === "ru") {
            if (allRuKeys.includes(convertToRussian(key)) && (key !== "Backspace" && 
                                        key !== "Tab" &&
                                        key !== "CapsLock" &&
                                        key !== "Shift" && 
                                        key !== "Alt" &&
                                        key !== "Control" &&
                                        key !== "Meta" &&
                                        key !== "Enter")) {
                input.value += convertToRussian(key);
            } else if (key === "Backspace") {
                event.preventDefault();
                input.value = input.value.slice(0, -1);
            }else if(key === " ") {
                event.preventDefault();
                input.value += " ";
            }else if(key === "Enter") {
                event.preventDefault();
                input.value += "\n";
            }else if(key === "Tab") {
                event.preventDefault();
                input.value += "    ";
            }
        }
    }
        
});

// clicking behavior

keyboard.addEventListener("mousedown", (event) => {
    event.preventDefault();
    let key = event.target.innerHTML;

    if (allKeys.includes(key) && (key !== "Backspace" && 
                                key !== "Tab" &&
                                key !== "Capslock" &&
                                key !== "Shift" && 
                                key !== "Alt" &&
                                key !== "Control" &&
                                key !== "Space" &&
                                key !== "Meta" &&
                                key !== "fn" &&
                                key !== "Enter")) {
        input.value += event.target.innerHTML;
    }else if(key === "Backspace") {
        event.preventDefault();
        input.value = input.value.slice(0, -1);
    }else if (key === "Space") {
        input.value += " ";
    }else if (key === "Enter") {
        event.preventDefault();
        input.value += "\n";
    }else if (key === "Tab") {
        event.preventDefault();
        input.value += "    ";
    }
})

document.addEventListener("mousedown", (event) => {
    let key = event.target.innerHTML;
    if (key === "Capslock" && capsOn === false) {
        toggleKeyBoardCase();
        capsOn = true;
    } else if (key === "Shift") {
        toggleKeyBoardCase();
    } else if (key === "Control") {
        toggleKeyboardLanguage();
    } else if (key === "Capslock" && capsOn === true) {
        toggleKeyBoardCase();
        capsOn = false;
    }
});

//user instructions

const manual = document.createElement("div");
manual.setAttribute("id", "manual");
manual.innerText = `The keyboard was created on a Mac by a Windows user.
                    To change the language, use Ctrl + Alt. 
                    Backspace = del key.`;

container.appendChild(manual);                    
alert(`The keyboard was created on a Mac by a Windows user. (I'm so sorry.)
One question remains... Does it RGB?`);
}