document.getElementById('logout-btn').addEventListener('click', function(){
  window.location.href = './index.html';
})



// show layout for add money
document.getElementById('add-money-show-btn').addEventListener('click', function(){
  
  togleLayout('add-money-layout');


  // show layout btn bg
  document.getElementById('add-money-show-btn').classList.add('btn-primary');
  document.getElementById('cashout-show-btn').classList.remove('btn-primary');
  document.getElementById("transaction-btn").classList.remove('btn-primary');
})

// show layout for cashout
document.getElementById('cashout-show-btn').addEventListener('click', function(){
  togleLayout('cashout-layout');
  // show layout btn bg
  document.getElementById('add-money-show-btn').classList.remove('btn-primary');
  document.getElementById('cashout-show-btn').classList.add('btn-primary');
  document.getElementById("transaction-btn").classList.remove('btn-primary');
})


// transaction layout:
document.getElementById("transaction-btn").addEventListener('click', function(){
  togleLayout('transaction-layout');
  // show layout btn bg
  document.getElementById('add-money-show-btn').classList.remove('btn-primary');
  document.getElementById('cashout-show-btn').classList.remove('btn-primary');
  document.getElementById("transaction-btn").classList.add('btn-primary');
})



document.getElementById('add-money-btn').addEventListener('click', function(event){
  event.preventDefault();
  const addAmountNum = getInputValueById('add-amount');
  const addAmountpin = getInputValueById('add-money-pin');
  const currentBalNum = getTextInputValueById('current-bal');

  if(isNaN(addAmountNum)){
    alert("Invalid Input!");
    return;
  }

  if(addAmountpin === 1234){
    let newBalance = currentBalNum + addAmountNum;
    document.getElementById('current-bal').innerText = newBalance;

    const newSec = document.createElement('div');
    newSec.innerHTML = `<div class="stats bg-primary text-primary-content mb-2">
          <div class="stat ">
            <div id="transaction-bal-text" class="stat-title text-white">Added amount: </div>
            <div id="transaction-bal" class="stat-value">${addAmountNum}</div>
          </div>
        
          <div class="stat">
            <div id="new-bal-text" class="stat-title text-white">New Balance: </div>
            <div id="new-bal" class="stat-value">${newBalance}</div>
          </div>
        </div>`;
      
    document.getElementById('transaction-layout').appendChild(newSec);
  }else{
    alert("Invalid Input!");
  }
  
})

document.getElementById('cashout-btn').addEventListener('click', function(event){
  event.preventDefault();

  const cashOutNum = getInputValueById('cashout-amount');
  const cashOutpin = getInputValueById('cashout-pin');
  const currentBalNum = getTextInputValueById('current-bal');

  if(isNaN(cashOutNum)){
    alert("Invalid Input!");
    return;
  }
  if(cashOutpin === 1234){
    if(cashOutNum > currentBalNum){
      alert("Insufficient balance!");
      return;
    }
    
    let newBalance = currentBalNum - cashOutNum;
    document.getElementById('current-bal').innerText = newBalance;

    

    const newSec = document.createElement('div');
    newSec.innerHTML = `<div class="stats bg-primary text-primary-content mb-2">
          <div class="stat ">
            <div id="transaction-bal-text" class="stat-title text-white">Cash Out Amount: </div>
            <div id="transaction-bal" class="stat-value">${cashOutNum}</div>
          </div>
        
          <div class="stat">
            <div id="new-bal-text" class="stat-title text-white">New Balance: </div>
            <div id="new-bal" class="stat-value">${newBalance}</div>
          </div>
        </div>`;
      
    document.getElementById('transaction-layout').appendChild(newSec);
  }else{
    alert("Invalid Input!");
  }
  
})