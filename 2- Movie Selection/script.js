const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const select = document.getElementById("movie");


let totalprice = +total.innerText;
console.log(totalprice);

const selectedSeats = () => {
    count.innerText = totalprice;
}


container.addEventListener("click", e => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle("selected");
        selectedSeats();
        console.log(e.target.classList.length);
    }
});


select.addEventListener("change", e => console.log("Changed"));