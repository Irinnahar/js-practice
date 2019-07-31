const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');
const form = document.getElementById('loan-form');
const loading = document.getElementById('loading');
const result = document.getElementById('results');

form.addEventListener('submit', calculate)
loading.style.display = 'none';
result.style.display = 'none';

function calculate(e){
  const principle = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/ 100 / 12;
  const calculatedYear = parseFloat(years.value)*12;

  const x = Math.pow(1+ calculatedInterest, calculatedYear);
  const monthly = (principle * x * calculatedInterest) /(x-1);

  if(isFinite(monthly)){
    loading.style.display = 'block';
    setTimeout(() => {
      loading.style.display = 'none';
      result.style.display = 'block';
    },2000)

    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedYear).toFixed(2);
    totalInterest.value = ((monthly * calculatedYear) - principle).toFixed(2);
  } else {
    showError()
  }
  e.preventDefault();
}

function showError(){
  const card = document.createElement('div');
  card.className = 'alert alert-danger';
  card.innerHTML = 'Please insert valid number';

  const heading = document.querySelector('.heading');
  const mainCard = document.querySelector('.card');

  mainCard.insertBefore(card, heading);

  setTimeout(() => {
    card.remove();
  }, 2000);
}

