const sign_up_link = document.querySelector("#sign-up-link");
const sign_in_link = document.querySelector("#sign-in-link");
const container = document.querySelector(".container");

sign_up_link.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_link.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

let signInForm = document.querySelector(".sign-in-form");
let signUpForm = document.querySelector(".sign-up-form");

signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.querySelector(".name").value;
    let password = document.querySelector(".password").value;

    let storedUser = localStorage.getItem(username);
    if (storedUser) {
        let userData = JSON.parse(storedUser);
        if (userData.password === password) {
            alert("Login successful");
            window.location.href = "quiz.html";
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("User not found. Please sign up first.");
    }
});

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.querySelector(".sign-up-name").value;
    let email = document.querySelector(".sign-up-email").value;
    let password = document.querySelector(".sign-up-password").value;

    if (localStorage.getItem(username)) {
        alert("User already exists. Please sign in.");
    } else {
        let userData = {
            email: email,
            password: password
        };
        localStorage.setItem(username, JSON.stringify(userData));
        alert("Sign up successful. Please sign in.");
        container.classList.remove("sign-up-mode");
    }
});