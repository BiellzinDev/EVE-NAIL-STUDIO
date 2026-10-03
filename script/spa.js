document.addEventListener('DOMContentLoaded', () => {

    const spaSections = document.querySelectorAll(".spa-section")
    const navegacao = document.querySelectorAll(".navegacao")

    /**
     * Função responsável por alternar a página visível na tela sem recarregar o navegador
     * @param {string} targetId - O ID da seção que deve ser mostrada (ex: 'home', 'servicos')
     */
    function switchPage(targetId) {
        if (!targetId) return;

        /* Percorre cada uma das 4 seções do site uma a uma */
        spaSections.forEach(section => {
            /* Verifica se o ID da seção atual é igual ao ID da página que o usuário quer ver */
            if (section.id === targetId) {
                /* Se for a página certa, adiciona a classe CSS que deixa a seção visível */
                section.classList.add('active-section');
                /* Remove o atributo 'hidden' para permitir que a seção apareça na tela */
                section.removeAttribute('hidden');
            } else {
                /* Se não for a página certa, remove a classe de exibição */
                section.classList.remove('active-section');
                /* Adiciona o atributo 'hidden' para esconder a seção de leitores de tela e do visual */
                section.setAttribute('hidden', '');
            }
        });

        /* Percorre todos os links de navegação para atualizar o destaque visual do menu ativo */
        navegacao.forEach(item => {
            if (item.classList.contains('navegacao')) {
                if (item.getAttribute('data-target') === targetId) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            }
        });

        /* Faz a tela rolar suavemente de volta para o topo da página ao trocar de seção */
       requestAnimationFrame(() => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		});
    }

    /* Adiciona o evento de clique em todos os links e botões de navegação */
    navegacao.forEach(element => {
        element.addEventListener('click', (e) => {
            /* Evita que o navegador tente recarregar a página ou navegar pela âncora padrão */
            e.preventDefault();
            /* Pega o ID da seção de destino gravada no atributo data-target */
            const target = element.getAttribute('data-target');
            /* Executa a troca de página */
            switchPage(target);
        });
    });

    
})