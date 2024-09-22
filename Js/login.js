document.getElementById('login-btn').addEventListener('click', function(event){
  event.preventDefault();

  const mobileNum = getInputValueById('mobile-num');
  const pinNum = getInputValueById('pin');
  

  if(!isNaN(mobileNum) && !isNaN(pinNum)){
    window.location.href = './home_page.html';
  }else{
    alert("Wrong Inputs");
  }
})