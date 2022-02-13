document.getElementById("deposit-button").addEventListener("click", function (){
    const depoInput = document.getElementById("deposit-input");
    const valueDepo = depoInput.value;
    const newValueDepo = parseFloat(valueDepo);

    const totalDepo = document.getElementById("total-deposit");
    const currentDepoText = totalDepo.innerText;
    const newCurrentDepoText = parseFloat(currentDepoText);
    const totalCurrentDepo =  newCurrentDepoText + newValueDepo;
    totalDepo.innerText = totalCurrentDepo;
    // total balance
    const totalBalance = document.getElementById("total-balance");
    const totalBalanceText = totalBalance.innerText;
    const curentTotalBalance = parseFloat(totalBalanceText);
    const newCurrentTotalBalance = newValueDepo + curentTotalBalance;
    totalBalance.innerText = newCurrentTotalBalance;
    // empty input
    depoInput.value = "";

})

// withdrow 
document.getElementById("withdraw-button").addEventListener("click", function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputValueText = withdrawInput.value;
    const newWithdrawInputValue = parseFloat(withdrawInputValueText);

    // withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalCurrent = parseFloat(withdrawTotalText);
    const totalCurrentWithdraw = withdrawTotalCurrent + newWithdrawInputValue;
    withdrawTotal.innerText = totalCurrentWithdraw;
    // total balance
    const totalBalance = document.getElementById("total-balance");
    const totalBalanceText = totalBalance.innerText;
    const curentTotalBalance = parseFloat(totalBalanceText);
    const newCurrentTotalBalance =curentTotalBalance - newWithdrawInputValue;
    totalBalance.innerText = newCurrentTotalBalance;


    // empty input
    withdrawInput.value = ""
    
})