const form = document.getElementById("form");

const name = form.elements["name"];
const email = form.elements["email"];
const message = form.elements["message"];

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const thanks = document.getElementById("thanks");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  thanks.style.display = "none";

  let isvalid = true;

  if (name.value.trim() === "") {
    nameError.textContent = "Name IS Required";
    isvalid = false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.textContent = "A valid Email is Required";
    isvalid = false;
  }

  if (message.value.trim().length < 10) {
    messageError.textContent = "Message Must be at least 10 characters";
    isvalid = false;
  }

  if (isvalid) {
    thanks.style.display = "block";
    form.reset();
  }

  setTimeout(() => {
    thanks.style.display = "none";
  }, 5000); // 3000 milliseconds = 3 seconds
});
