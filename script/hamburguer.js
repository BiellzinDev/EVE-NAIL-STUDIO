const btnHamburguer = document.querySelector(".btn-hamburguer")
const listaNav = document.querySelector(".lista")
const btnOpen = document.querySelector(".open")
const closeIcon = document.querySelector(".close")

btnHamburguer.addEventListener("click", () =>{
    listaNav.classList.add("active")
    btnOpen.style.display = 'none'
    closeIcon.style.display = 'block'
})

closeIcon.addEventListener("click", () =>{
    listaNav.classList.remove("active")
    btnOpen.style.display = 'block'
    closeIcon.style.display = 'none'
})