const inputEmail = document.getElementById("email");
const inputPass = document.getElementById("password");
const form = document.getElementById("form");
const submitButton = document.getElementById("submit");

const verifyEmail = (email) => {
  let matches = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,20}$/g);
  return matches != null;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  emailError = document.getElementById("errorEmail");
  emailError.innerHTML = "";
  emailOk = verifyEmail(inputEmail.value);
  !emailOk ? (emailError.innerHTML = "Merci d'entrer un email valide") : false;

  passwordError = document.getElementById("errorPassword");
  passwordError.innerHTML = "";
  passOk = inputPass.value.length > 0;
  !passOk ? (passwordError.innerHTML = "Merci d'entrer un password") : false;

  passOk && emailOk
    ? HTMLFormElement.prototype.submit.call(form)
    : console.log("erreur");
});
