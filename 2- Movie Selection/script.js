const container = document.querySelector(".container");
const total_seats = document.querySelectorAll(".row .seat");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");


let ticketPrice = +movieSelect.value;
// console.log(ticketPrice);

// updateUI();

function updatedSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    // console.log("selectedSeats", selectedSeats);
    
    // console.log("seatIndex", seatIndex);
    const selectedSeatsCount = selectedSeats.length;
    count.innerHTML = selectedSeatsCount;
    total.innerText = ticketPrice * selectedSeatsCount;
    
    //  Storing in the Local Storage
    const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem("SelectedSeats", JSON.stringify(seatIndex));
}

const updateUI = () => {
    const seatIndex = JSON.parse(localStorage.getItem("SelectedSeats"));
    const movieIndex = JSON.parse(localStorage.getItem("movieIndex"));
    const TicketPrice = JSON.parse(localStorage.getItem("ticketPrice"));
    // console.log(seatIndex);
    if (seatIndex !== null && seatIndex.length > 0) {
        seatIndex.forEach(i => {
            seats[i].classList.add("selected");
        })
    }
    if (movieIndex !== movieSelect[0] && seatIndex.length > -1) {
        movieSelect.selectedIndex = movieIndex;
        count.innerHTML = seatIndex.length;
        total.innerHTML = seatIndex.length * TicketPrice; 
    }
}

// console.log(JSON.parse(localStorage.getItem("SelectedSeats")));
// console.log(localStorage.getItem("MovieIndex"));
// console.log(localStorage.getItem("ticketPrice"));

const getMovieData = (index, value) => {
    localStorage.setItem("movieIndex", +index);
    localStorage.setItem("ticketPrice", +value);


}

// const updateUI = () => {
//     if ( seats )
// }


container.addEventListener("click", e => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle("selected");
        updatedSelectedCount();
    }
});


movieSelect.addEventListener("change", e => {
    // console.log(typeof(e.target.value));
    ticketPrice = e.target.value;
    getMovieData(e.target.selectedIndex, e.target.value);
    updatedSelectedCount();
});


updateUI();