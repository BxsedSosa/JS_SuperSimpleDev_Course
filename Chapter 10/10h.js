function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

/*
 * Issue = the calculation is inaccurate.
 * Fix = calculate the number in cents and then
 *       convert back to dollars at the end.
 */
function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');

  // Convert the numbers to cents by * 100.
  let cost = Number(inputElement.value) * 100;

  if (cost < 0) {
    document.querySelector('.js-cost-error')
      .innerHTML = `Error: cost cannot be less than $0`;
  } else if (cost < 4000) {
    cost = cost + 1000;

    document.querySelector('.js-total-cost')
      .innerHTML = `$${cost/100}`
  }
}