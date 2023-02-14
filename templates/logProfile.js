    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      e.returnValue = '';
    });

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

    const form = document.getElementById('formElement');

    form.addEventListener('mouseover', function handlemouseover() {
      form.style.backgroundColor = '#9582c5'
    });

    form.addEventListener('mouseout', function handlemouseout() {
      form.style.backgroundColor = 'white'
    })
    //for Address
    const Address = document.getElementById('Address');
    form.addEventListener('mouseover', function handlemouseover() {
      form.style.backgroundColor = '#9582c5'
    });

    form.addEventListener('mouseout', function handlemouseout() {
      // form.style.backgroundColor='white'
    })

    form.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        submit.click();
      }
    });

    function validateForm() {
      alert("Submitted Successfully");
    }



    document.getElementById("date1").addEventListener("change", function () {
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



    /*const submit = document.getElementById("submit");
    submit.addEventListener("click",validateForm());*/
    const nameErr = document.getElementById('name-error');
    const emailErr = document.getElementById('email-error');
    const phoneErr = document.getElementById('phone-error');
    const submitErr = document.getElementById('submit-error');
    function validateName() {

      const name1 = document.getElementById("Name").value;
      let valid = true;

      if (!name1.value) {
        const err = document.getEle
      }
    }