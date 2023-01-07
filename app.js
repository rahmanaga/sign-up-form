const inputs = document.querySelectorAll("input:not(#password-confirm)");
const confirmPassword = document.querySelector("#password-confirm");
const passwordField = document.querySelector("#password");
const phoneField = document.querySelector("#phone");

confirmPassword.addEventListener("blur", (e) => {
  const targetField = document.querySelector(`#${e.target.id} + span`);
  if (e.target.value.trim() === "") {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
    targetField.textContent = "Please re-enter yout password";
  } else if (e.target.value !== passwordField.value) {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
    targetField.textContent = "Passwords don't match";
  } else {
    targetField.textContent = "";
    e.target.classList.remove("invalid");
    e.target.classList.add("valid");
  }
});

confirmPassword.addEventListener("input", (e) => {
  const targetField = document.querySelector(`#${e.target.id} + span`);
  if (e.target.classList.contains("invalid")) {
    if (
      e.target.value.trim() !== "" &&
      e.target.value === passwordField.value
    ) {
      targetField.textContent = "";
      e.target.classList.remove("invalid");
      e.target.classList.add("valid");
    }
  } else if (e.target.classList.contains("valid")) {
    if (
      e.target.value.trim() === "" ||
      e.target.value !== passwordField.value
    ) {
      e.target.classList.remove("valid");
      e.target.classList.add("invalid");
      targetField.textContent = "Passwords don't match";
    }
  } else {
    if (
      e.target.value.trim() !== "" &&
      e.target.value === passwordField.value
    ) {
      targetField.textContent = "";
      e.target.classList.remove("invalid");
      e.target.classList.add("valid");
    }
  }
});

passwordField.addEventListener("input", (e) => {
  const targetField = document.querySelector("#password-confirm + span");
  if (confirmPassword.classList.contains("valid")) {
    if (e.target.value !== confirmPassword.value) {
      confirmPassword.classList.remove("valid");
      confirmPassword.classList.add("invalid");
      targetField.textContent = "Passwords don't match";
    }
  } else if (confirmPassword.classList.contains("invalid")) {
    if (e.target.value === confirmPassword.value) {
      confirmPassword.classList.remove("invalid");
      confirmPassword.classList.add("valid");
      targetField.textContent = "";
    }
  }
});

inputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    if (e.target.validity.valid) {
      e.target.classList.remove("invalid");
      e.target.classList.add("valid");
    } else {
      if (e.target.value.trim() === "") {
        const targetField = document.querySelector(`#${e.target.id} + span`);
        if (e.target.id === "fname") {
          targetField.textContent = "First name cannot be empty";
        } else if (e.target.id === "lname") {
          targetField.textContent = "Last name cannot be empty";
        } else if (e.target.id === "email") {
          targetField.textContent = "Email cannot be empty";
        } else if (e.target.id === "password-confirm") {
          targetField.textContent = "Please re-enter your password";
        } else if (e.target.id === "password") {
          e.target.setAttribute("aria-describedby", "password-validation");
          targetField.textContent = "Password cannot be empty";
          targetField.classList.add("error-message");
        }
      } else {
        const targetField = document.querySelector(`#${e.target.id} + span`);
        if (e.target.id === "email") {
          targetField.textContent =
            "Please enter a valid email address(e.g. yourname@example.com)";
        }
      }
      e.target.classList.remove("valid");
      e.target.classList.add("invalid");
    }
  });
});

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (e.target.classList.contains("invalid")) {
      if (e.target.validity.valid) {
        const targetField = document.querySelector(`#${e.target.id} + span`);
        targetField.textContent = "";
        e.target.classList.remove("invalid");
        e.target.classList.add("valid");
      }
    } else if (e.target.classList.contains("valid")) {
      if (!e.target.validity.valid) {
        e.target.classList.remove("valid");
        e.target.classList.add("invalid");
      }
    } else {
      if ((e.target.name = "password")) {
        if (e.target.validity.valid) {
          e.target.classList.add("valid");
        }
      }
    }
  });
});

phoneField.addEventListener("input", (e) => {
  const targetField = document.querySelector(`#${e.target.id} + span`);
  const regex = /\+?([0-9]){8,15}/;
  if (regex.test(e.target.value.replaceAll("-", ""))) {
    e.target.classList.remove("invalid");
    e.target.classList.add("valid");
  } else {
    if (e.target.classList.contains("valid") && e.target.value !== "") {
      e.target.classList.remove("valid");
      e.target.classList.add("invalid");
      targetField.textContent = "Please enter a valid phone number";
    }
  }
});
