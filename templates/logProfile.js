function phonenumber(inputtxt) {
  console.log(inputDate);
  var phoneno = /^\d{10}$/;

  if (inputtxt.value.match(phoneno)) {
    return true;
  } else {
    alert("Not a valid Phone Number");
    return false;
  }
}

const validDate = document.getElementById("dateElement").value;

console.log(validDate)

validDate.addEventListener("change", function () {
  var date = this.value;
  var enteredDate = new Date(date);
  console.log(enteredDate);
  var startDate = new Date("1992-01-01");
  var endDate = new Date("2022-03-04");
  if (enteredDate < startDate || enteredDate > endDate) {
    alert("Enter valid Date");
    this.value = "";
  }
});

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
