const botoes = document.querySelectorAll(".comon")


botoes.forEach(botao => {
    botao.addEventListener("click",() =>{
        botao.classList.remove("active-button")
        if(botao.classList.contains(".active-button")){
            console.log("Tem a classe")
        }else{
            botao.classList.add("active-button")
        }
        
        
    })
})


