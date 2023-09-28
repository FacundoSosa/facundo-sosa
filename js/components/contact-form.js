const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	phone: /^\d{9,14}$/, // 9 a 14 numeros.
}

const data = {
    name: "",
    phone: "",
    email: "",
    message: "",
}

const required = {
    name: false,
    phone: false,
}

const form = document.getElementById("contact-form");
const inputs = document.querySelectorAll("#input");

const validateForm = (e) => {
    switch (e.target.name) {
        case "name":
            validateInput(expressions.name, e.target, "name")
        break;
        case "phone":
            validateInput(expressions.phone, e.target, "phone")
        break;
        case "email":
            data.email = e.target.value;
        break;
        case "message":
            data.message = e.target.value;
        break;
    }
}

const validateInput = (expression, input, field) => {
    if (expression.test(input.value)) {
        data[field] = input.value;
        required[field] = true;
    }
}

/* const submit = () => {
    if (required.name && required.phone) {
        required.name = false;
        required.phone = false;
        console.log(data);
        data.email = "";
        data.message = "";
    } else {
        console.log("error message");
    }
} */

form.addEventListener("submit", (e) => {
    const completeMessage = `Correo del remitente: ${data.email}\nTeléfono: ${data.phone}\n${data.message}`;
    form.reset();
    console.log(completeMessage);
})

inputs.forEach((input) => {
    input.addEventListener("keyup", validateForm);
    input.addEventListener("blur", validateForm);
})


