const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

//Event listners
let isValid = false;
let passwordsMatch = false;

function validateForm() {
  //Using Constraint Api
  isValid = form.checkValidity();
  // Style main message for an eror
  if (!isValid) {
    message.textContent = "Please fill out all the fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  //Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    message.textContent = "Make sure Password Match";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }

  // If form is valid and password match
  if (isValid && passwordsMatch) {
    message.textContent = "Succesfully register";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}
const storeFormData = () => {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  //Do something with user data
  console.log(user);
};

const processFormData = (e) => {
  e.preventDefault();
  //Validate form
  validateForm();
  //submit form data if valid

  if (isValid && passwordsMatch) {
    storeFormData();
  }
};

form.addEventListener("submit", processFormData);
