const characterRange = document.querySelector(".character-range");
const characterNumber = document.querySelector(".character-number");
const generateButton = document.querySelector("#generate-button");
const includeUppercaseElement = document.querySelector("#uppercaseCheckbox");
const includeSymbolElement = document.querySelector("#symbolCheckbox");
const includeNumberElement = document.querySelector("#numberCheckbox");
const resultContainer = document.querySelector(".result-container");

const form = document.querySelector(".input-form");

const lowercaseArray = generateCharacterArray(97, 122);
const uppercaseArray = generateCharacterArray(65, 90);
const numberArray = generateCharacterArray(48, 57);
const symbolArray = generateCharacterArray(33, 47)
  .concat(generateCharacterArray(58, 64))
  .concat(generateCharacterArray(91, 96))
  .concat(generateCharacterArray(123, 126));

characterRange.addEventListener("input", characterLengthSync);
characterNumber.addEventListener("input", characterLengthSync);

function characterLengthSync(e) {
  const value = e.target.value;
  characterRange.value = value;
  characterNumber.value = value;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var characterLength = characterNumber.value;
  console.log(characterLength);
  var includeUppercase = includeUppercaseElement.checked;
  var includeSymbol = includeSymbolElement.checked;
  var includeNumber = includeNumberElement.checked;

  const result = generatePassword(
    includeUppercase,
    includeNumber,
    includeSymbol,
    characterLength
  );
  resultContainer.innerText = result;
});

function generatePassword(uppercase, number, symbol, characterLength) {
  var totalCharacterArray = lowercaseArray;
  if (uppercase) {
    totalCharacterArray = totalCharacterArray.concat(uppercaseArray);
  }
  if (number) {
    totalCharacterArray = totalCharacterArray.concat(numberArray);
  }
  if (symbol) {
    totalCharacterArray = totalCharacterArray.concat(symbolArray);
  }

  console.log(totalCharacterArray);
  var password = "";

  for (var i = 0; i < characterLength; i++) {
    const characterCode =
      totalCharacterArray[
        Math.floor(Math.random() * totalCharacterArray.length)
      ];
    password = password + String.fromCharCode(characterCode);
  }
  return password;
}

function generateCharacterArray(low, high) {
  const characterArray = [];
  for (var i = low; i <= high; i++) {
    characterArray.push(i);
  }
  return characterArray;
}
