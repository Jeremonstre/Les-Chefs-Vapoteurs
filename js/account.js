var date = document.getElementById('birthday');

    function checkValue(str, max) {
      if (str.charAt(0) !== '0' || str == '00') {
        var num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str = num > parseInt(max.toString().charAt(0)) 
               && num.toString().length == 1 ? '0' + num : num.toString();
      };
      return str;
    };

    date.addEventListener('input', function(e) {
      this.type = 'text';
      var input = this.value;
      if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
      var values = input.split('/').map(function(v) {
        return v.replace(/\D/g, '')
      });
      if (values[0]) values[0] = checkValue(values[0], 12);
      if (values[1]) values[1] = checkValue(values[1], 31);
      var output = values.map(function(v, i) {
        return v.length == 2 && i < 2 ? v + ' / ' : v;
      });
      this.value = output.join('').substr(0, 14);
    });

const register = document.querySelector("#register");
const nameInput = document.querySelector("#uname");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#psw");
const birthInput = document.querySelector("#birthday");
const msg = document.querySelector(".msg");
register.addEventListener("submit", onSubmit);
console.log(localStorage);

function onSubmit(e) {
  e.preventDefault();
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    passInput.value === "" ||
    birthInput.value === ""
  ) {
    msg.classList.add("error");
    msg.innerHTML = "Merci de compléter tous les champs";
    setTimeout(() => {
      msg.classList.remove("error");
      msg.innerHTML = "";
    }, 2000);
  } else {

    monStockage = localStorage;
    localStorage.setItem("username", nameInput.value);
    localStorage.setItem("password", passInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("birthday", birthInput.value);

    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(passInput.value);
    console.log(birthInput.value);
    console.log(monStockage);
  }
}

const Login = document.querySelector("#Login");
const LnameInput = document.querySelector("#Luname");
const LpassInput = document.querySelector("#Lpsw");
Login.addEventListener("submit", login);
console.log(localStorage);


function login(e) {
    e.preventDefault();
    user2 = document.querySelector("#Luname");
    pass2 = document.querySelector("#Lpsw");
    var checkuser = localStorage.getItem("username");
  var checkpass = localStorage.getItem("password");
  if (checkuser === user2.value && checkpass === pass2.value) {
    document.getElementById("demo").innerHTML = "You are now logged in.";
    isConnected =true
    window.location.assign('./index.html')
  } else {
    document.getElementById("demo").innerHTML =
      "Incorrect username and password";
    isConnected=false
  }
  console.log(isConnected.value)
}

