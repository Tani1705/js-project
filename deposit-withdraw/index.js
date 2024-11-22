
 const deposit_btn = document.getElementById('deposit-btn');
 deposit_btn.addEventListener('click', function(){

     const depositStringToInt = getInputNumb("deposit-amount");

     updateBalance("current-deposit", depositStringToInt);
     updateBalance("current-balance", depositStringToInt);

     
     document.getElementById('deposit-amount').value = "";

 })


  const withdraw_btn = document.getElementById('withdraw-btn');
  withdraw_btn.addEventListener('click', function(){
     const withdrawNumb = getInputNumb("withdraw-amount");

     updateBalance("current-withdraw", withdrawNumb);
     updateBalance("current-balance", -1 * withdrawNumb);
     
     document.getElementById('withdraw-amount').value = "";
 })

 function getInputNumb(idName){
     const amount = document.getElementById(idName).value;
     const amountNumber = parseFloat(amount);
     return amountNumber;
 }

 function updateBalance(idName, addedNumber){
     
     const current = document.getElementById(idName).innerText;
     const currentStringToInt = parseFloat(current);

     const total = currentStringToInt + addedNumber;

     
     document.getElementById(idName).innerText = total;
 }