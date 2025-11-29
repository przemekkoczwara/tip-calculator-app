import './saas/main.scss';

/// javascript

const billInput = document.getElementById('amount');
const tipButtons = document.querySelectorAll('.btn:not(.custom-btn)'); // all buttons -> without custom buttom
const customButton = document.getElementById('custom-btn');
const customTipInput = document.getElementById('custom-tip-btn');
const peopleInput = document.getElementById('people');
const errorMessage = document.querySelector('.error');
const tipAmountDisplay = document.querySelector('.tip-amount');
const tipTotalDisplay = document.querySelector('.total-amount');
const resetButton = document.querySelector('.reset-btn');

let billValue = 0;
let tipPercentage = 0;
let numberOfPeople = 1;

// tips buttons -> (5%,10%,15%,25%,50%)

tipButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    tipButtons.forEach((btn) => btn.classList.remove('active'));
    customButton.classList.remove('active');

    // add new clas active when user click for button
    e.currentTarget.classList.add('active');
    tipPercentage = parseFloat(e.currentTarget.getAttribute('data-tip'));

    customTipInput.classList.add('hidden');
    customTipInput.value = '';

    console.log(`Selected tip: ${tipPercentage}%`);

    // calculateTip();
  });

  // custom button

  customButton.addEventListener('click', () => {
    tipButtons.forEach((btn) => btn.classList.remove('active'));
    customButton.classList.add('active');

    customTipInput.classList.remove('hidden');
    customTipInput.focus();

    console.log('Custom btn active');
  });

  // custom tip input

  customTipInput.addEventListener('input', (e) => {
    tipPercentage = parseFloat(e.target.value) || 0;

    console.log(`Selected tip: ${tipPercentage}%`);
  });
});
