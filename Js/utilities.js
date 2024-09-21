function getInputValueById(id){
  const strValue = document.getElementById(id).value;

  const numValue = parseFloat(strValue);
  return numValue;
}

function getTextInputValueById(id){
  const strValue = document.getElementById(id).innerText;
  const numValue = parseFloat(strValue);
  return numValue;
}

function togleLayout(id){
  document.getElementById('add-money-layout').classList.add('hidden');
  document.getElementById('cashout-layout').classList.add('hidden');
  document.getElementById('transaction-layout').classList.add('hidden');

  
  document.getElementById(id).classList.remove('hidden');
}