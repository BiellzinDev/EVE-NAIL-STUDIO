const menuOff = document.querySelector(".menu-off")
        const hamburguerMenu = document.querySelector(".hamburguer-menu")

        hamburguerMenu.addEventListener("click",() =>{
            hamburguerMenu.classList.toggle('active');
            menuOff.classList.toggle('active');
        })
        let x = 2+3
        console.log(x)