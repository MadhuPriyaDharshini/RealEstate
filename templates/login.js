const signUpForm = document.getElementById("form1");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const UserName = document.getElementById("User").value;
  const Email = document.getElementById("Email").value;
  const Password = document.getElementById("Password").value;
  const payload = {
    UserName,
    Email,
    Password,
  };
  console.log(payload);
  fetch("http://localhost:4001/api/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status == "ok") {
        window.localStorage.setItem("token", data.AccessToken);
      }
    });
});

const loginForm = document.getElementById("form2");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let Email = document.getElementById("Email1").value;
      let Password = document.getElementById("Password1").value;
      let payload = {
        Email,
        Password,
      };
      console.log(payload);
      fetch("http://localhost:4001/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(payload),
      }).then(res => res.json()).then(data => { console.log(data);
           if(data.status == "ok"){
             window.localStorage.setItem("token",data.AccessToken);
           }
        });
    });


