window.onload = function () {
  const pw_show_hide = document.querySelector('.pw_show_hide');
  const input_id = document.querySelector('input[type=text]');
  const input_pw = document.querySelector('input[type=password]');
  const id_error = document.querySelector('.id_error');
  const pw_error = document.querySelector('.pw_error');

  // console.log(input_id, input_pw, id_error, pw_error);

  input_id.addEventListener('click', () => {
    id_error.style.display = 'block';
  });

  input_pw.addEventListener('click', () => {
    pw_error.style.display = 'block';
  });


  let i = true;
  pw_show_hide.addEventListener('click', () => {
    if (i == true) {
      i = false;
      pw_show_hide.style.backgroundPosition = '-126px 0'
    } else {
      i = true;
      pw_show_hide.style.backgroundPosition = '-105px 0'
    }
  });






}//onload end