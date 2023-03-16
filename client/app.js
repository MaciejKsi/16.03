function checkLogin() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  const user = "admin";
  const adminPass = "admin";

  if (login == user && password == adminPass) {
    console.log("zalogowano");
    localStorage.setItem("login", "admin");
    window.location.href = "admin.html";
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
