//
// 1: add event listener to the withdraw button
// 2: get the withdraw amount from the deposit input field
// 2.5: also make sure to convert the input into a number by using parsFloat
// 3.get previous withdraw total
// 4. calculate total withdraw amount
// 4.5. set total withdraw amount
// 5.get the previous balance total
// 6. calculate new balance total
// 6-5: set the new balance total

// 7. clear the input field

// step - 1
document.getElementById('btn-withdraw').addEventListener('click', function () {
  // step-2
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  console.log(newWithdrawAmount);
  if (isNaN(newWithdrawAmount)) {
    alert('please provide a valid number');
    return;
  }

  // step-3
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  console.log(previousWithdrawTotal);

  // step-5
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //   step-7
  withdrawField.value = '';

  if (newWithdrawAmount > previousBalanceTotal) {
    alert('Baap er bank a eto taka nai');
    return;
  }

  // step-4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step-6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
