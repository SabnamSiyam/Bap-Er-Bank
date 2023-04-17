// Withdraw section

// its only for the withdraw buttton
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // console.log('clicked the button');
  const withdrawField = document.getElementById("withdraw-amount");
  const WithdrawStringValue = withdrawField.value;
  const withdrawAmount = parseFloat(WithdrawStringValue);
  // console.log(typeof withdrawAmount);
  //now getting the total withdraw data...

  const Withdraw = document.getElementById("total-withdraw");

  const totalWithdrawString = Withdraw.innerText;
  const totalWithdraw = parseFloat(totalWithdrawString);
  // withdraw string to number convert done--->>>
  // console.log(typeof totalWithdraw);

  const TotalBalance = document.getElementById("total-balance");
  const balance = TotalBalance.innerText;
  // console.log(balance);
  //   console.log(totalAvailableBalance);

  // showing the current balance-->>>
  const totalAvailableBalance = balance - withdrawAmount;

  // making emty the input value field---->>>>>>
  withdrawField.value = "";

  // invalid number alert --------->>>>>>>>
  if (isNaN(withdrawAmount)) {
    alert("Are bolod Valid takar amount input de age!!!");
    return;
  }

  //  gives alert if the amout of Withdraw in more than the current Balance----->>>>>

  console.log(withdrawAmount, totalAvailableBalance);
  if (withdrawAmount > balance) {
    alert("Ore fokirer ghorer fokir re!!!! Tor Bap Er Bank a Ato taka nai!!");
    return;
  }
  // setting the total current balance by setting innertext ------>>>

  TotalBalance.innerText = totalAvailableBalance;

  const totalWithdrawBalance = totalWithdraw + withdrawAmount;
  Withdraw.innerText = totalWithdrawBalance;
  //   console.log(totalWithdrawBalance);
});

// Withdraw Sector done
