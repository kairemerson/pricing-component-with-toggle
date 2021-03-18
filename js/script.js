let toggle = document.querySelector(".toggle")
let cards = document.querySelector(".cards")

toggle.addEventListener("change", ()=>{
    cards.classList.toggle("show-monthly")
})