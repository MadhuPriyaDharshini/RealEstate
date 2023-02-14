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

document.getElementById("date1").addEventListener("change", function () {
  var date = this.value;
  var enteredDate = new Date(date);
  console.log(enteredDate);
  var startDate = new Date("1992-01-01");
  var endDate = new Date("2002-03-04");
  if (enteredDate < startDate || enteredDate > endDate) {
    alert("Enter valid Date");
    this.value = "";
  }
});

document.getElementById("password").addEventListener("input", function () {});
const form1 = document.getElementById("formElement");
const submit = document.getElementById("submitButton");

form1.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submit.click();
  }
});

function validateForm() {
  alert("Submitted Successfully");
}
