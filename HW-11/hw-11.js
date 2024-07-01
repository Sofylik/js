
//1
const bankAccount = {
    ownerName: "soffix.qwz",
    accountNumber: 1298,
    balance: 80000,
    deposit(amount) {
        this.balance += amount;
        updateBalance();
        alert("Новий баланс: " + this.balance);
    },
    withdraw(amount) {
        if (amount > this.balance) {
            alert("Недостатньо коштів");
            return;
        } else {
            this.balance -= amount;
            updateBalance();
            alert("Новий баланс: " + this.balance);
        }
    },
    displayInfo() {
        document.getElementById("balance").innerText = `Баланс: ${this.balance}`;
    },
};
bankAccount.displayInfo();
function updateBalance() {
    document.getElementById("balance").textContent = bankAccount.balance;
}
function deposit() {
    let amount = prompt("Введіть суму:");
    if (!isNaN(amount) && amount > 0) {
        bankAccount.deposit(parseFloat(amount));
    } else {
        alert("Щось пішло не так");
    }
}
function withdraw() {
    let amount = prompt("Введіть суму:");
    if (!isNaN(amount) && amount > 0) {
        bankAccount.withdraw(parseFloat(amount));
    } else {
        alert("Щось пішло не так");
    }
}



function checkTemp() {
    const fieldTemp = document.getElementById("temperature").value;
    const weather = {
        temperature: fieldTemp,
        humidity: 0,
        windSpeed: 0,
    };
    const isCold = (temperature) => {
        return temperature < 0;
    };
    if (isCold(weather.temperature)) {
        console.log("Температура нижче нуля");
    } else {
        console.log("Температура вище нуля або 0");
    }
}


function checkInfo() {
    const fieldEmail = document.getElementById("email").value;
    const fieldPassword = document.getElementById("password").value;
    const user = {
        name: "user",
        email: fieldEmail,
        password: fieldPassword,
    };
    const check = function (email, password) {
        if (email.includes("@") && password.length >= 6) {
            console.log(true);
        } else {
            console.log(false);
        }
    };
    check(user.email, user.password);
}

function checkSimilarity() {
    const fieldEmail = document.getElementById("email").value;
    const fieldPassword = document.getElementById("password").value;
    const user = {
        name: "user",
        email: "@gmail.com",
        password: "12345",
    };
    if (user.email === fieldEmail && user.password === fieldPassword) {
        console.log(true);
    } else {
        console.log(false);
    }
}


const movie = {
    title: "Aватар",
    director: "Джеймс Кемерон",
    year: 2022,
    rating: 8,
    isRated() {
        return this.rating > 8;
    },
    displayInfo() {
        document.getElementById("title").innerText = `Title: ${this.title}`;
        document.getElementById(
            "director"
        ).innerText = `Director: ${this.director}`;
        document.getElementById("year").innerText = `Year: ${this.year}`;
        document.getElementById("rating").innerText = `Rating: ${this.rating}`;
    },
};
function updateMovie() {
    const newRating = parseFloat(document.getElementById("changeRating").value);
    if (!isNaN(newRating) && newRating > 8) {
        movie.rating = newRating;
        movie.displayInfo();
        const title = document.getElementById("title");
        title.style.color = "green";
    } else if (isNaN(newRating)) {
        alert('введіть число')
    } else {
        movie.rating = newRating;
        movie.displayInfo();
    }
}
movie.displayInfo();
