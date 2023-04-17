document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("input-email");
  const email = emailField.value;
  // console.log(email);
  const passwordField = document.getElementById("input-password");
  const password = passwordField.value;
  // console.log(password);
  if (email === "sontan@bap.com" && password === "secret") {
    console.log("valid user");
    // window.location.href='./bank.html';
    window.location.href = "bank.html";
  } else {
    alert("Tui to Murkho!!! tui abar kemne amar Bank a dukte chas !!!!!");
    console.log("invalid user");
  }
});
