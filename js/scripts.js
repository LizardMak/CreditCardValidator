//Business

window.addEventListener("load", function () {
  document.getElementById("creditCard").addEventListener("submit", cardInitializer)
});

function checkCardType(cardNumber) {
  const cardNumberString = cardNumber.toString();
  if ((cardNumberString.charAt(0) === "3" && cardNumberString.charAt(1) === "4") || (cardNumberString.charAt(0) === "3" && cardNumberString.charAt(1) === "7")) {
    if (cardNumberString.length === 15) {
      return "American Express"
    } else {
      return "invalid card"
    }
  } else if (cardNumberString.charAt(0) === "4") {
    if (cardNumberString.length === 16) {
      return "Visa"
    } else {
      return "invalid card"
    }
  } else if (cardNumberString.charAt(0) === "5") {
    if (cardNumberString.length === 16) {
      return "Mastercard"
    } else {
      return "invalid card"
    }
  } else if (cardNumberString.charAt(0) === "6") {
    if (cardNumberString.length === 16) {
      return "Discover Card"
    } else {
      return "invalid card"
    }
  } else {
    return "invalid card"
  }
}

function checkCardDigits(cardNumber) {
  const cardNumberString = cardNumber.toString();
  let newArray = [];
  for (let index = 0; index <= cardNumberString.length - 1; index += 1) {
    let overDigits = ""
    if (index === 1 || index === 3 || index === 5 || index === 7 || index === 9 || index === 11 || index === 13 || index === 15) {
      if (parseInt(cardNumberString.charAt(index)) * 2 > 9) {
        let digitConvert = (parseInt(cardNumberString.charAt(index))) * 2;
        let digitConvert2 = digitConvert.toString();
        overDigits = digitConvert2;
        let overDigitNum1 = parseInt(overDigits.charAt(0));
        let overDigitNum2 = parseInt(overDigits.charAt(1));
        newArray.push(overDigitNum1 + overDigitNum2)

      } else {
        newArray.push(parseInt(cardNumberString.charAt(index)) * 2)
      }
    } else {
      newArray.push(parseInt(cardNumberString.charAt(index)))
    }
  }
  return newArray;
}

function checkCardMath(checkedCardDigits) {
  sum = 0;
  checkedCardDigits.forEach(function (digit) {
    let parsedNum = parseInt(digit);
    sum = sum + parsedNum;
  });
  const sumString = sum.toString();
  if (sumString.charAt(sumString.length - 1) === "0") {
    return "valid"
  } else {
    return "invalid card"
  }

}

//U

function cardInitializer(e) {
  e.preventDefault();
  let cardNumber = document.getElementById("insertCard").value;
  let checkedCardType = checkCardType(cardNumber);
  let checkedCardDigits = checkCardDigits(cardNumber);
  let checkedCardMath = checkCardMath(checkedCardDigits);
  if (checkedCardType != "invalid card" && checkedCardMath === "valid") {
    document.getElementById("results").className = "valid";
    document.getElementById("results").innerText = checkedCardType + " approved!";
  } else {
    document.getElementById("results").className = "invalid"
    document.getElementById("results").innerText = "Card invalid!"
  }
}