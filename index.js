document.body.onload = createKeys;

function createKeys() {

  // keys
  const keysLowerCase = [
    ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "Enter"],
    ["Capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\"],
    ["LShift", "`", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "RShift"],
  ];

  const keysShiftCase = [
    ["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "Enter"],
    ["Capslock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", `"`, "|"],
    ["LShift", "~", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "RShift"],
  ];

  //container-wrapper

  const container = document.createElement("div");
  container.setAttribute("id", "container");

  document.body.appendChild(container);

  //input

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "input-field");
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

  const allRows = [...row1, ...row2, ...row3, ...row4];

//   console.log(allRows)

  allRows.forEach((el) => {
    const keyBtn = document.createElement("div");
    keyBtn.setAttribute("id", "key-btn");
    keyboard.appendChild(keyBtn);
    keyBtn.innerHTML = el;
  })

  document.addEventListener("keypress", (event) => {
    console.log(event.key)
        if (event.key === "Shift") allRows.innerHTML = keysShiftCase;
        console.log(event.key);
      KeyboardEvent.shiftKey ? keysShiftCase : keysLowerCase;
  })

  


  //clicks and keypresses behaviour

//   keyboard.addEventListener("click", (event) => {
//     if(event.target.classList.contains("key-btn")) {
//         const key = event.target.dataset.key;
//         input.value += key;
//     }
//   });

    

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
