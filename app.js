const inputs = document.querySelectorAll("input:not(#password-confirm)");

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
