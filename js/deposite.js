// Deposite Sector0---------->>>>>>>
// its for deposite  btn only---->>>>
// selecting the deposite button using id and added the addEventListener("click", function) ---->>>>>
let depositeBalance = 0;
document.getElementById("btn-deposite").addEventListener("click", function () {
  const depositeField = document.getElementById("deposite-amount");
  const depositeAmountString = depositeField.value;
  const depositeAmount = parseFloat(depositeAmountString);
  // console.log(depositeAmount);
  const depositeTotal = document.getElementById("deposite-total");
  const depositeBalanceString = depositeTotal.innerText;
  const depositeBalance = parseFloat(depositeBalanceString);
  // console.log(depositeBalance);
  const currentDeposite = depositeBalance + depositeAmount;

  // making emty the input field---->>>>>>>
  depositeField.value = "";

  // invalid number alert --------->>>>>>>>
  if (isNaN(depositeAmount)) {
    alert("Are bolod Valid takar amount input de age!!!");
    return;
  }
  // setting current total deposite balance by setting innerText
  depositeTotal.innerText = currentDeposite;

  // now need to add the deposit to the total balance---->>>>

  const balanceField = document.getElementById("total-balance");
  const balanceString = balanceField.innerText;
  const balance = parseFloat(balanceString);
  // console.log(balance);
  // console.log(typeof balance);

  const TotalBalance = balance + depositeAmount;
  balanceField.innerText = TotalBalance;
  console.log(currentDeposite, TotalBalance);

  // console.log(depositeAmount);
});

//Deposite Sector Done-------->>>>>
