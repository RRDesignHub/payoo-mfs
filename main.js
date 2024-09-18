document.getElementById('login-btn').addEventListener('click', function(event){
  event.preventDefault();

  const mobileNum = document.getElementById('mobile-num').value;
  const pinNum = document.getElementById('pin').value;
  

  if(mobileNum === '12345' && pinNum === '1111'){
    window.location.href = './home_page.html';
  }else{
    alert("Wrong Inputs");
  }
})