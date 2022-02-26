const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const inputOne = document.getElementById("input-one");
const inputTwo = document.getElementById("input-two");
const exchangeDisplay = document.getElementById("exchangeDisplay");


// Swapping function
const swapFunc = () => {
    let temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    exchangeRateCal();

}

//  Fetching Exhange Rate API
const exchangeRateCal = () => {
    fetch(`https://v6.exchangerate-api.com/v6/b9e62f2abda6e823b0c3a3cf/pair/${currencyOne.value}/${currencyTwo.value}`)
        .then(data => data.json())
        .then(json => {
            console.log(typeof(+currencyTwo.value),typeof(json.conversion_rate));
            const val =  Number(inputOne.value) * json.conversion_rate;
            const display = `1 ${currencyOne.value} = ${json.conversion_rate} ${currencyTwo.value}`
            inputTwo.value = val;
            console.log(val);
            exchangeDisplay.innerText = display;
        }
        )
}



currencyOne.addEventListener("change", exchangeRateCal);
currencyTwo.addEventListener("change", exchangeRateCal);
inputOne.addEventListener("change", exchangeRateCal);
inputTwo.addEventListener("change", exchangeRateCal);
swap.addEventListener("click", swapFunc);



exchangeRateCal();

