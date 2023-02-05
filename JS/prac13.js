// form

function check(form) {
  if (form.userid.value == "choi" && form.userpassword.value == "1234") {
    window.open('target.html');
  }
  else {
    alert("Error ID or PW");
  }
}