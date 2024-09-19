// show layout for add money
document.getElementById('add-money-show-btn').addEventListener('click', function(){
  const addMoneyLayout = document.getElementById('add-money-layout');
  const cashOutLayout = document.getElementById('cashout-layout');

  // show and hide layout(add money and cashout)
  addMoneyLayout.classList.remove('hidden');
  cashOutLayout.classList.add('hidden');


  // show layout btn bg
  document.getElementById('add-money-show-btn').classList.add('btn-primary');
  document.getElementById('cashout-show-btn').classList.remove('btn-primary');
})

// show layout for cashout
document.getElementById('cashout-show-btn').addEventListener('click', function(){
  const addMoneyLayout = document.getElementById('add-money-layout');
  const cashOutLayout = document.getElementById('cashout-layout');

  // show and hide layout(add money and cashout)
  addMoneyLayout.classList.add('hidden');
  cashOutLayout.classList.remove('hidden');


  // show layout btn bg
  document.getElementById('add-money-show-btn').classList.remove('btn-primary');
  document.getElementById('cashout-show-btn').classList.add('btn-primary');
})



document.getElementById('add-money-btn').addEventListener('click', function(event){
  event.preventDefault();

  const addAmountStr = document.getElementById('add-amount').value;
  const addAmountNum = parseFloat(addAmountStr);
  const addAmountpin = document.getElementById('add-money-pin').value;
  const currentBalStr = document.getElementById('current-bal').innerText;
  const currentBalNum = parseFloat(currentBalStr);
  let newBalance = 0;

  
  if(addAmountpin === '1234'){
    newBalance = currentBalNum + addAmountNum;
  }else{
    alert("Invalid Input!");
  }
  document.getElementById('current-bal').innerText = newBalance;
})

document.getElementById('cashout-btn').addEventListener('click', function(event){
  event.preventDefault();


  const cashOutStr = document.getElementById('cashout-amount').value;
  const cashOutNum = parseFloat(cashOutStr);
  const cashOutpin = document.getElementById('cashout-pin').value;
  const currentBalStr = document.getElementById('current-bal').innerText;
  const currentBalNum = parseFloat(currentBalStr);
  let newBalance = 0;


  if(cashOutpin === '1234'){
    newBalance = currentBalNum - cashOutNum;
  }else{
    alert("Invalid Input!");
  }
  document.getElementById('current-bal').innerText = newBalance;
})