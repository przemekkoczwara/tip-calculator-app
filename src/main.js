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

    // console.log(`Selected tip: ${tipPercentage}%`);

    calcuateTip();
  });
});

// custom button

customButton.addEventListener('click', () => {
  tipButtons.forEach((btn) => btn.classList.remove('active'));
  customButton.classList.add('active');

  customTipInput.classList.remove('hidden');
  customTipInput.focus();

  // console.log('Custom btn active');
});

// custom tip input

customTipInput.addEventListener('input', (e) => {
  tipPercentage = parseFloat(e.target.value) || 0;
  calcuateTip();
  // console.log(`Selected tip: ${tipPercentage}%`);
});

// bill input

billInput.addEventListener('input', (e) => {
  billValue = parseFloat(e.target.value) || 0;
  calcuateTip();
  //   console.log(`Introduce bill: ${billValue}`);
});

// people input

peopleInput.addEventListener('input', (e) => {
  numberOfPeople = parseFloat(e.target.value) || 0;

  //   console.log(`Number: ${numberOfPeople}`);

  if (numberOfPeople === 0) {
    errorMessage.classList.remove('hidden');
    peopleInput.classList.add('error-msg');
  } else {
    errorMessage.classList.add('hidden');
    peopleInput.classList.remove('error-msg');
  }
  calcuateTip();
});

resetButton.addEventListener('click', (e) => {
  billValue = 0;
  tipPercentage = 0;
  numberOfPeople = 1;
  billInput.value = '0';
  customTipInput.value = '';
  peopleInput.value = '0';

  tipButtons.forEach((btn) => btn.classList.remove('active'));
  customButton.classList.remove('active');
  customTipInput.classList.add('hidden');
  errorMessage.classList.add('hidden');
  peopleInput.classList.remove('error-msg');
  tipAmountDisplay.textContent = '$0.00';
  tipTotalDisplay.textContent = '$0.00';
});

function calcuateTip() {
  if (billValue > 0 && tipPercentage > 0 && numberOfPeople > 0) {
    const tipAmount = (billValue * tipPercentage) / 100;

    const tipPerPerson = tipAmount / numberOfPeople;
    const totalPerson = (billValue + tipAmount) / numberOfPeople;

    tipAmountDisplay.textContent = tipPerPerson.toFixed(2);
    tipTotalDisplay.textContent = totalPerson.toFixed(2);
    // console.log(`
    // Tip per person: ${tipPerPerson},
    // Total per person ${totalPerson}`);
  }
}
