function checkLogin() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  const admin = "admin";
  const adminPass = "admin";

  if (login == admin && password == adminPass) {
    console.log("zalogowano");
    localStorage.setItem("login", "admin");
    window.location.href = "admin.html";
  } else {
    console.log("błędny login lub hasło");
    alert("błędny login lub hasło");
    localStorage.setItem("login", "false");
  }
}

function checkLogin2() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  const user = "user";
  const userPass = "user";

  if (login == user && password == userPass) {
    console.log("zalogowano");
    localStorage.setItem("login", "user");
    window.location.href = "user.html";
  } else {
    console.log("błędny login lub hasło");
    alert("błędny login lub hasło");
    localStorage.setItem("login", "false");
  }
}

function checkAdmin() {
  const admin = localStorage.getItem("login");

  if (admin != "admin") {
    window.location.href = "login.html";
  }
}

function checkUser() {
  const user = localStorage.getItem("login");

  if (user != "user") {
    window.location.href = "login.html";
  }
}

function logOut() {
  localStorage.setItem("login", "false");
  window.location.href = "login.html";
}
