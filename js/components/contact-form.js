const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const phone = document.getElementById("phone-number");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submited");
})

name.addEventListener("change", (e) => {
    const value = e.target.value;
    console.log(value);
})

phone.addEventListener("change", (e) => {
    const value = e.target.value;
    console.log(value);
})

email.addEventListener("change", (e) => {
    const value = e.target.value;
    console.log(value);
})

message.addEventListener("change", (e) => {
    const value = e.target.value;
    console.log(value);
})
