//  step:1- add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
  // step:2- get the email address inside the email input field
  const emailField = document.getElementById('email-field');
  const email = emailField.value;
  // console.log(email);
  // step:3- get the password  inside the password input field
  // 3.a: set id on the html element
  // 3.b: get the element
  // 3.c: get the value from the element
  const passwordField = document.getElementById('password-field');
  const password = passwordField.value;
  // console.log(password);
  //DANGER::: DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE.
  if (email === 'sontan@bap.com' && password === 'secret') {
    window.location.href = 'bank.html';
  } else {
    // console.log('invalid user');
    alert('Invalid user');
  }
});
