const botoes = document.querySelectorAll(".comon")


botoes.forEach(botao => {
    botao.addEventListener("click",() =>{
        botao.classList.toggle("active-button")
    })
})


