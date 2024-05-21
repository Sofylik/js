function showChoice() {
    const select = document.getElementById("drinks");
    const selected = select.options[select.selectedIndex].value;

    if (selected === "coffee") {
        alert("Ви вибрали каву");
    } else if (selected === "tea") {
        alert("Ви вибрали чай");
    } else if (selected === "juice") {
        alert("Ви вибрали сік");
    }
}



function checkDays() {
    const inputDay = document.getElementById("inputDay").value;

    if (
        inputDay === "понеділок" ||
        inputDay === "вівторок" ||
        inputDay === "середа" ||
        inputDay === "четвер" ||
        inputDay === "п'ятниця"
    ) {
        alert("Зараз будні дні");
    } else if (inputDay === "субота" || inputDay === "неділя") {
        alert("Зараз вихідні");
    } else {
        alert("Щось пішло не по плану");
    }
}



function checkMonth() {
    const inputMonth = document.getElementById("inputMonth").value;

    if (inputMonth == 1 || inputMonth == 2 || inputMonth == 12) {
        alert("Зараз зима!");
    } else if (inputMonth == 3 || inputMonth == 4 || inputMonth == 5) {
        alert("Зараз весна!");
    } else if (inputMonth == 6 || inputMonth == 7 || inputMonth == 8) {
        alert("Ура літо!");
    } else if (inputMonth == 9 || inputMonth == 10 || inputMonth == 11) {
        alert("Зараз осінь!");
    } else {
        alert("Щось пішло не по плану");
    }
}



function checkMonthDay() {
    const inputMonthDay = document.getElementById("inputMonthDay").value;

    if (
        inputMonthDay == 1 ||
        inputMonthDay == 3 ||
        inputMonthDay == 5 ||
        inputMonthDay == 7 ||
        inputMonthDay == 8 ||
        inputMonthDay == 10 ||
        inputMonthDay == 12
    ) {
        alert("У цьому місці 31 день");
    } else if (
        inputMonthDay == 4 ||
        inputMonthDay == 6 ||
        inputMonthDay == 9 ||
        inputMonthDay == 11
    ) {
        alert("У цьому місці 30 днів");
    } else if (inputMonthDay == 2) {
        alert("у місяці або 28 або 29 днів");
    } else {
        alert("Щось пішло не по плану");
    }
}



function checkColor() {
    const inputColor = document.getElementById("inputColor").value;

    if (inputColor === "червоний") {
        alert("стоп");
    } else if (inputColor === "жовтий") {
        alert("чекати");
    } else if (inputColor === "зелений") {
        alert("йти");
    } else {
        alert("Щось пішло не по плану");
    }
}



function calculation() {
  const inputFNumber = document.getElementById("firstNumber").value;
  const inputSNumber = document.getElementById("secondNumber").value;
  const selectTwo = document.getElementById("chooseOperation").value;
  const selectedTwo = selectTwo.options[selectTwo.selectedTwoIndex].value;

  if (selectedTwo === "+") {
    alert(inputFNumber + inputSNumber);
  } else if (selectedTwo === "-") {
    alert(inputFNumber - inputSNumber);
  } else if (selectedTwo === "*") {
    alert(inputFNumber * inputSNumber);
  } else if (selectedTwo === "/") {
    alert(inputFNumber / inputSNumber);
  }
}
function calculate() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const chooseOperation = document.getElementById('chooseOperation').value;
    let result;

    if (chooseOperation === '/' && secondNumber === 0) {
        alert('На нуль ділити не можна!');
        return;
    }

    switch (chooseOperation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            result = 'Щось пішло не по плану';
    }
    alert(result)
}