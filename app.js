const currencyEl_One = document.getElementById('currency-one');
const amountEl_One = document.getElementById('amount-one');

const currencyEl_Two = document.getElementById('currency-two');
const amountEl_Two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


//FETCH EXCHANGE RATE AND UPDATE THE DOM

function calculate() {
 const currency_One = currencyEl_One.value;
 const currency_Two = currencyEl_Two.value;

 

  fetch(`https://v6.exchangerate-api.com/v6/210c5bf34ef15079e8589ec3/latest/${currency_One}`)
  .then(res =>res.json())
  .then(data => {
    const rate = data.conversion_rates[currency_Two];

    rateEl.innerText =`1 ${currency_One} = ${rate} ${currency_Two}` //display the currency change


    amountEl_Two.value =(amountEl_One.value * rate).toFixed(2)
  });

}



//event listener
currencyEl_One.addEventListener('change',calculate);
amountEl_One.addEventListener('input',calculate);
currencyEl_Two.addEventListener('change',calculate);
amountEl_Two.addEventListener('input',calculate);

swap.addEventListener('click', ()=>{
  const temp = currencyEl_One.value;
  currencyEl_One.value = currencyEl_Two.value;
  currencyEl_Two.value=temp


  
  calculate()
})

calculate()