const toggle = document.getElementById("toggle");
const openBtn = document.getElementById("open");
const modal = document.getElementById("modal");
const closeBtn  = document.getElementById("close");
const submitbtn = document.getElementById("submit-btn");


toggle.addEventListener("click", () =>{
    document.body.classList.toggle("show-nav");
});


openBtn.addEventListener('click', () =>
    modal.classList.add('show-modal')
);

closeBtn.addEventListener('click', () => 
    modal.classList.remove('show-modal')
);

window.addEventListener("click", (e)=> {
    console.log(e.target);
    e.target === modal ? modal.classList.remove('show-modal') : false;
})

