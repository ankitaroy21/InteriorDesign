const form = document.getElementById("form2");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password_2");

function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value)) {
        successMessage(email);
    } else {
        errorMessage(email, "Email is not valid");
    }
}

function myFunction() {
    alert("The form was submitted.");
}

function errorMessage(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function successMessage(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//check required
function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === "") {
            errorMessage(input, `${getFieldName(input)} is reqired`);
        } else {
            successMessage(input);
        }
    });
}

function getFieldName(input) {
    return input.id.substr(0, 1).toUpperCase() + input.id.substr(1);
}

//check length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        errorMessage(
            input,
            `${getFieldName(input)} cannot be less than ${min} characters`
        );
    } else if (input.value.length > max) {
        errorMessage(
            input,
            `${getFieldName(input)} cannot be greater than ${max} characters`
        );
    } else {
        successMessage(input);
    }
}

//check passwords
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        errorMessage(input2, "Passwords do not match");
    } else if (input1.value !== input2.value && input1.value !== "") {
        successMessage(input2);
    }
}


//event listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
    myFunction();
    checkRequired([username, email, password, password_2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    isValidEmail(email);
    checkPasswordMatch(password, password_2);
});