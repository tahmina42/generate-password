const inputField = document.getElementById("password");
const passwordLength = 12;
const passUpperCase = "ABCDEFGHIJKLMNOPQRSTWVXYZ";
const passLowerCase = "abcdefghijklamnopqrstwvxyz";
const passNumber = "0123456789";
const passSymbol = "#$%^&()_+~|}{[]></=-";

const allChars = passUpperCase + passLowerCase + passNumber + passSymbol;
console.log(allChars);

function createPassword() {
    let password = "";
    password += passUpperCase[Math.floor(Math.random() * passUpperCase.length)];
    console.log(password);
    password += passLowerCase[Math.floor(Math.random() * passLowerCase.length)];
    console.log(password);
    password += passNumber[Math.floor(Math.random() * passNumber.length)];
    console.log(password);
    password += passSymbol[Math.floor(Math.random() * passNumber.length)];
    console.log(password.length);

    while (passwordLength > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
        console.log(password);
    }
    inputField.value = password;

}

function copyPassword() {
    inputField.select();
    document.execCommand("copy");
}