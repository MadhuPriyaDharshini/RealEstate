const form = document.getElementById("formElement");
const submit = document.getElementById("submitButton");

form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submit.click();
  }
});

function validateForm() {
  alert("Submitted Successfully");
}
