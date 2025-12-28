const inputString = document.getElementById("inputString");
const submit = document.getElementById("submit");
const palindromeForm = document.getElementById("palindromeForm");
const resultDisplay = document.getElementById("result");

palindromeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const reversedWord = inputString.value.toLowerCase().split("").reverse().join("");

  if (inputString.value === null) {
    // alert("Insert a valid word");
    // console.log("Insert a valid word");
    resultDisplay.textContent = "Insert a valid word";
  } else {
    if (inputString.value === reversedWord) {
      //   alert(`${inputString.value} is a palindrome!`);
      //   console.log("Palindrome confirmed");
      resultDisplay.textContent = `${inputString.value} is a palindrome!`;
    } else {
      //   alert(`${inputString.value} is not a palindrome.`);
      //   console.log("Not a palindrome");
      resultDisplay.textContent = `${inputString.value} is not a palindrome.`;
    }
  }
});

console.log("Node is running");
