(function() {
    const containerMenu = document.querySelector('.container-menu');
    const btnCadastro = document.querySelector('.icon-cadastro');
    const btnConsulta = document.querySelector('.icon-consulta');
    const textCadastro = 'Cadastro';
    const textConsulta = 'Consulta';

    document.addEventListener('click', function(evento) {
        const elemento = evento.target;
        
        if (elemento.classList.contains('icon-cadastro') || elemento.classList.contains('icon-consulta') ||
            elemento.classList.contains('line-hmb2')) {             

            abrirMenu();
            addElementosMenu(elemento);
        }
        
        if (elemento.classList.contains('line')) {
            fecharMenu();
        }
    });

    function componenteFecharMenu() {
        const ul = document.createElement('ul');
        ul.classList.add('fechar-menu');

        for (i = 1; i < 3; i++) {
            const li = document.createElement('li');
            li.classList.add('line');
            li.classList.add(`line${i}`);
            ul.appendChild(li);
        }
        containerMenu.appendChild(ul);
    }

    function textoTituloMenu(elemento) {
        const titulo = document.querySelector('.titulo-menu');

        if (elemento.classList.contains('icon-cadastro') && titulo.classList.contains('consulta')) {
            titulo.classList.remove('consulta');
            titulo.classList.add('cadastro');
            titulo.textContent = textCadastro;        
        }
        if (elemento.classList.contains('icon-consulta') && titulo.classList.contains('cadastro')) {
            titulo.classList.remove('cadastro');
            titulo.classList.add('consulta');
            titulo.textContent = textConsulta;
        }
    }

    function criaTituloMenu(elemento) {
        if (!elemento.classList.contains('lista')) {
            const h1 = document.createElement('h1');
            h1.classList.add('titulo-menu');
            if (elemento.classList.contains('icon-cadastro')){
                h1.classList.add('cadastro');
                h1.textContent = textCadastro;
            }

            if (elemento.classList.contains('icon-consulta')){
                h1.classList.add('consulta');
                h1.textContent = textConsulta;
            }

            containerMenu.appendChild(h1);
            btnCadastro.classList.add('lista');
            btnConsulta.classList.add('lista');   
        }
    }

    function criaListaMenu(elemento) {
        const listaCadastro = ['Fornecedor', 'Cliente', 'Produto'];
        const listaCusulta = ['Fornecedor', 'Cliente', 'Produto'];
        const containerMenu = document.querySelector('.container-menu');

        const ul = document.createElement('ul');

        if (elemento.classList.contains('icon-cadastro')) {
            for (i = 0; i < listaCadastro.length; i++){
                const a = document.createElement('a');
                const li = document.createElement('li');
                
                li.textContent = listaCadastro[i];
                 
                ul.classList.add('lista-menu');
                li.classList.add('li-menu');
            
                a.setAttribute('href', '#');
                a.classList.add(listaCadastro[i].toLowerCase());

                a.appendChild(li);
                ul.appendChild(a);
            }

            containerMenu.appendChild(ul);
        }

        if (elemento.classList.contains('icon-consulta')) {
            for (i = 0; i < listaCadastro.length; i++){
                const a = document.createElement('a');
                const li = document.createElement('li');
                
                li.textContent = listaCusulta[i];
                 
                ul.classList.add('lista-menu');
                li.classList.add('li-menu');
            
                a.setAttribute('href', '#');
                a.classList.add(listaCusulta[i].toLowerCase());
                
                a.appendChild(li);
                ul.appendChild(a);            
            }   
            containerMenu.appendChild(ul);
        }
    }

    function addElementosMenu(elemento) {        
        if (elemento.classList.contains('lista')) {        
            textoTituloMenu(elemento);
        }else {
            componenteFecharMenu();
            criaTituloMenu(elemento);
            criaListaMenu(elemento);
        }
        
        console.log(elemento);
    }
    
    function abrirMenu() {
        const menuCadastro = document.querySelector('.menu');            
        menuCadastro.style.marginLeft = 0;   
    }

    function fecharMenu() {
        const menuCadastro = document.querySelector('.menu');

        menuCadastro.style.marginLeft = `-${1000}px`;
    }

})();