(function() {
    document.addEventListener('click', function(evento) {
        const elemento = evento.target;

        if (elemento.classList.contains('lista-cadastro')) {
            console.log(elemento);
            abrirMenu(elemento);
        }
        
        if (elemento.classList.contains('lista-consulta')) {
                console.log(elemento);
        }
        
        if (elemento.classList.contains('line')) {
            console.log(elemento);
            fecharMenu();
        }
        
    });

    function criaListaMenu() {
        const listaMenuCadastro = listaCadastro['Cadastro', 'Fornecedor', 'Cliente', 'Produto'];
        const listaMenuConsulta = listaCadastro['Consulta', 'Fornecedor', 'Cliente', 'Produto'];
        
        let 

    }
    
    function abrirMenu() {
        const menuCadastro = document.querySelector('.menu-cadastro');

        menuCadastro.style.marginLeft = 0;
    }

    function fecharMenu() {
        const menuCadastro = document.querySelector('.menu-cadastro');

        menuCadastro.style.marginLeft = `-${1000}px`;
        console.log('Fechar');
    }
})();