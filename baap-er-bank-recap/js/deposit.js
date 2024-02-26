/*
1. add event listener to the deposit button
2.get deposit  amount from the deposit input field
2.5.convert string deposit amount to a number type

3.clear deposit field

4.get the previous deposit total

5. calculate new deposit total and set the value to the deposit total

6. get current balance

7. calculate the new balance and set it to the balance total element
*/
document.getElementById('btn-deposit').addEventListener('click', function () {
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  console.log(newDepositAmount);
  // step:-3
  depositField.value = '';

  // step-4
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  console.log(previousDepositTotal);

  // step-5
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  // step-6
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

  // step-7
  const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
