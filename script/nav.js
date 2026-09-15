const botoes = document.querySelectorAll(".comon")
const todoElements = document.querySelectorAll(".todo")
const observer = new IntersectionObserver(
    (entries) =>{
        entries.forEach((entry) =>{
            if(entry.isIntersecting){
            botoes.forEach((link) => link.classList.remove("active-button"));
            console.log(entry.target.id)
            document.querySelector(`a[href="#${entry.target.id}"]`).classList.add("active-button");
        }
    });
},
{threshold: 0.5}
)
todoElements.forEach((sec) => observer.observe(sec))

 botoes.forEach(botao => {
     botao.addEventListener("click",() =>{
        //Remove a classe active em qualquer botão que esteja ativo
        botoes.forEach(classes =>{
            classes.classList.remove("active-button")
        })
        //Adiciona a classe ao botão clicado
         botao.classList.add("active-button");
     })
 })


