function checkFields() {
    const firstInput = document.getElementById("text-one").value;
    const secondInput = document.getElementById("text-two").value;

    if (firstInput !== '' && secondInput !== '') {
        alert('Обидва поля заповнені')
    }
    else {
        alert('Не всі поля заповнені')
    }
}


function checkNumbers() {
    const firstN = parseFloat(document.getElementById("number-one").value);
    const secondN = parseFloat(document.getElementById("number-two").value);
    if (firstN + secondN > 10) {
        alert('Сума більша за 10');
    }
    else {
        alert('Сума менша або дорівнює 10');
    }
}


function jsAnswer() {
    const answer = document.getElementById("js").value;

    if (answer.includes('JavaScript')) {
        alert('Текст містить слово JavaScript')
    }
    else {
        alert('Текст не містить слово JavaScript')
    }
}


function checkNumber() {
    const checkN = parseFloat(document.getElementById("numberInput").value);

    if (!isNaN(checkN) && checkN > 10 && checkN < 20) {
        alert('Число входить в діапазон від 10 до 20')
    }
    else {
        alert('Число не входить в діапазон від 10 до 20')
    }
}


function checkData() {
    const name = document.getElementById("checkName").value;
    const mail = document.getElementById("checkMail").value;
    const password = document.getElementById("checkPass").value;

    if (name.length > 3 && mail.includes('@') && password.length > 6) {
        window.location.href = "hw-4-2.html";
        alert('hahahahaahah');
    }
    else {
        alert('Поля неправильно заповнені');
    }
}