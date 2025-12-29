const inputString = document.getElementById("inputString");
const submit = document.getElementById("submit");
const palindromeForm = document.getElementById("palindromeForm");
const resultDisplay = document.getElementById("result");

palindromeForm.addEventListener("submit", function (e){
  e.preventDefault();

  const normalizedInput = inputString.value.toLowerCase().trim();
  const reversedWord = normalizedInput.split("").reverse().join("");

  if (!normalizedInput){
    resultDisplay.textContent = "Please enter a valid word.";
  // } else{
  //   const reversedWord = normalizedInput.split("").reverse().join("");
  // }
  } else {
    if (normalizedInput === reversedWord) {
      resultDisplay.textContent = `${normalizedInput} is a palindrome!`;
    } else {
      resultDisplay.textContent = `${normalizedInput} is not a palindrome.`;
    }
  }});