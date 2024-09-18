document.getElementById('login-btn').addEventListener('click', function(event){
  event.preventDefault();

  const mobileNum = document.getElementById('mobile-num').value;
  const pinNum = document.getElementById('pin').value;
  console.log(mobileNum, pinNum);
})