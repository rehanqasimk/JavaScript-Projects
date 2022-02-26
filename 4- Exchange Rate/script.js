const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const inputOne = document.getElementById("input-one");
const inputTwo = document.getElementById("input-two");


// 1- Add event Listener to the input field
fetch("./package.json").then(
    data => data.json()
).then( obj => {
    console.log(obj[0]);
    document.write(`<h1>${obj[0].title}</h1>`);
    document.write(`<p>${obj[0].body}</p>`);
})

