// Menu click event listener
document.querySelector("#menu").addEventListener("click", function () {
    this.classList.toggle("fa-times");
    document.querySelector(".navbar").classList.toggle("nav-toggle")
});

// Window scroll event listener
window.addEventListener("scroll", function () {
    document.querySelector("#menu").classList.remove("fa-times")
    document.querySelector(".navbar").classList.remove("nav-toggle")
});

// Typed.js effect initialization
var typed = new Typed(".typing-text", {
    strings: ["Software Engineer", "Frontend Web Developer", "Web Designer", "Web Developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// Form validation and submission
const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const numberError = document.getElementById("numberError");
const overlay = document.getElementById("overlay");

function validateName() {
    let name = document.getElementById("name").value.trim();
    if (name.length == 0) {
        nameError.innerHTML = "Name is required. Please enter your full name.";
        nameError.classList.add("error");
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Please enter your first and last name.";
        nameError.classList.add("error");
        return false;
    }
    nameError.innerHTML = "";
    return true;
}

function validateEmail() {
    let email = document.getElementById("email").value.trim();
    if (email.length == 0) {
        emailError.innerHTML = "Email is required. Please enter your email address.";
        emailError.classList.add("error");
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "Please enter a valid email address.";
        emailError.classList.add("error");
        return false;
    }
    emailError.innerHTML = "";
    return true;
}

function validateNumber() {
    let phoneNumber = document.getElementById("number").value.trim();
    if (phoneNumber.length == 0) {
        numberError.innerHTML = "Number is required. Please enter your mobile number.";
        numberError.classList.add("error");
        return false;
    }
    if (!phoneNumber.match(/^[0-9]{10}$/)) {
        numberError.innerHTML = "Please enter a 10-digit phone number.";
        numberError.classList.add("error");
        return false;
    }
    numberError.innerHTML = "";
    return true;
}

function formSubmit(event) {
    event.preventDefault();
    if (validateName() && validateEmail() && validateNumber()) {
        overlay.classList.add("active");
        var name = document.getElementById("name").value;
    }
    document.getElementById("uservalue").innerHTML = "Hi, " + name + "!";
}

// Event listeners for form validation on keypress
window.addEventListener("keypress", () => {
    validateName();
    validateEmail();
    validateNumber();
});

// Close overlay popup
function closePopup() {
    overlay.classList.remove("active");
}
