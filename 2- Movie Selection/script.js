const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");


let ticketPrice = +movieSelect.value;
console.log(ticketPrice);

function updatedSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    // console.log(selectedSeats);
    const seatIndex = [...selectedSeats].map( seat => [...seats].indexOf(seat));
    const selectedSeatsCount = selectedSeats.length;
    count.innerHTML = selectedSeatsCount; 
    total.innerText = ticketPrice * selectedSeatsCount;
    localStorage.setItem("SelectedSeats",JSON.stringify(seatIndex));
}


container.addEventListener("click", e => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle("selected");
        
        updatedSelectedCount();
    }
});


movieSelect.addEventListener("change", e => {
    console.log(typeof(e.target.value));
    ticketPrice = e.target.value;
    getMovieData(e.target.selectedIndex, e.target.value);
    updatedSelectedCount();
});