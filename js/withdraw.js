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

  withdrawField.value = "";

  console.log(totalWithdraw, totalAvailableBalance);
  if (totalWithdraw > totalAvailableBalance) {
    alert("Ore fokirer ghorer fokir re!!!! Tor Bap Er Bank a Ato taka nai!!");
    return;
  }

  TotalBalance.innerText = totalAvailableBalance;

  const totalWithdrawBalance = totalWithdraw + withdrawAmount;
  Withdraw.innerText = totalWithdrawBalance;
  //   console.log(totalWithdrawBalance);
});

// Withdraw Sector done
