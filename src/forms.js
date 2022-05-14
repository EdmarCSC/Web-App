(function(){
    const menuCadastro = document.querySelector('.menu');
    const form = document.querySelector('form');
    
    const fornecedor = ['Razão-social', 'Nome-fantasia', 'CNPJ', 'Rua', 
                        'numero', 'cidade', 'estado', 'telefone', 'e-mail', 'inscricao',
                         'tipo', 'produto', 'comprador', 'vendedor'
    ];
    
    const pedidos = ['Nome', 'CNPJ', 'Contato', 'Codigo', 

    ];

    const cliente = ['Nome', 'CPF', 'E-MAIL', 'Telefone', 'Telefone', 'Telefone', 'Telefone', 'Telefone',
                    'Telefone', 'Telefone', 'Telefone', 'Telefone', 'Telefone', 'Telefone', 'Telefone'
    ];

    const Produto = ['Descrição', 'Marca', 'Modelo', 'Validade', 'Validade', 'Validade'
                    , 'Validade', 'Validade', 'Validade', 'Validade', 'Validade', 'Validade'
                    , 'Validade', 'Validade', 'Validade', 'Validade'
    ];

    const btn = ['Pesquisar', 'Salvar', 'Cancelar'];

    function formCadastro(elemento) {
        const divForm = document.createElement('div');
        divForm.classList.add('div-form-cadastro');
        divForm.classList.add('div-componente');
        
        if (elemento.classList.contains('fornecedor')) {
            for (i = 0; i < fornecedor.length; i++) {
                const contForm = document.createElement('input');                
                contForm.setAttribute('type', 'text');
                contForm.setAttribute('placeholder',''+fornecedor[i]);
                contForm.classList.add('input-cadastro');
                divForm.appendChild(contForm);
            }
            form.appendChild(divForm);
        }

        if (elemento.classList.contains('cliente')) {            
            for (i = 0; i < cliente.length; i++) {
                const contForm = document.createElement('input');
                contForm.setAttribute('type', 'text');
                contForm.setAttribute('placeholder',''+cliente[i]);
                contForm.classList.add(`input-cadastro${i}`);
                contForm.classList.add('input-cadastro');
                divForm.appendChild(contForm);
            }
            form.appendChild(divForm);
        }

        if (elemento.classList.contains('produto')) {
            for (i = 0; i < Produto.length; i++) {
                const contForm = document.createElement('input');
                contForm.setAttribute('type', 'text');
                contForm.setAttribute('placeholder',''+Produto[i]);
                contForm.classList.add(`input-cadastro${i}`);
                contForm.classList.add('input-cadastro');
                divForm.appendChild(contForm);
            }
            form.appendChild(divForm);
        }

        if (elemento.classList.contains('pedido')) {            
            for (i = 0; i < cliente.length; i++) {
                const contForm = document.createElement('input');
                contForm.setAttribute('type', 'text');
                contForm.setAttribute('placeholder',''+pedidos[i]);
                contForm.classList.add(`input-pedido${i}`);
                contForm.classList.add('input-cadastro');
                divForm.appendChild(contForm);
            }
            form.appendChild(divForm);
        }
    }
    

    function formPedidos() {
        const divFormPed = document.createElement('div');
        const divHeaderPed = document.createElement('div');
        const divInputCodPed = document.createElement('div');
        const divListPed = document.createElement('div');
        const btnAddPed = document.createElement('button');
        const btnPrint = document.createElement('button');
        const line = document.createElement('hr');
        
        divFormPed.classList.add('div-componente');
        divFormPed.classList.add('div-form-ped');
        divHeaderPed.classList.add('div-input-header-cad');
        divInputCodPed.classList.add('div-input-cod-cad');
        divListPed.classList.add('div-lista-ped');
        btnAddPed.classList.add('btn-add-ped');
        btnPrint.classList.add('btn-print');
        line.classList.add('div-line-ped');

        for (i = 0; i < pedidos.length -1; i++) {
            const contForm = document.createElement('input');                
            contForm.setAttribute('type', 'text');
            contForm.setAttribute('placeholder',''+pedidos[i]);
            contForm.classList.add('input-pedidos');
            divHeaderPed.appendChild(contForm);
        }
        divFormPed.appendChild(divHeaderPed);
        btnAddPed.innerHTML = 'Adicionar item';
        btnPrint.innerHTML = 'Imprimir'
        
        divFormPed.appendChild(line);

        const contForm = document.createElement('input');                
        contForm.setAttribute('type', 'text');
        contForm.setAttribute('placeholder',''+pedidos[i]);
        contForm.classList.add('input-item-ped');
        divInputCodPed.appendChild(contForm);
        divInputCodPed.appendChild(btnPrint);
        divInputCodPed.appendChild(btnAddPed);


        divFormPed.appendChild(divInputCodPed);
        
        divFormPed.appendChild(divListPed);

        form.appendChild(divFormPed);
    }

    function contentValue () {
        const inputValue = document.querySelector('.input-consulta');
        const p = document.createElement('p');
        p.classList.add('conteudo-consulta');
        p.textContent = 'Conteúdo da consulta...';

        criaDivContentConsulta(p);
    }
    
    function criaDivContentConsulta(elemento) {
        const divFormCunsulta = document.querySelector('.div-form-consulta');
        const content = document.createElement('div');
        const divElementoConsulta = document.createElement('div');
        
        content.classList.add('div-form-conteudo-consulta');
        divElementoConsulta.classList.add('div-elemento-consulta');
        
        divElementoConsulta.appendChild(elemento);
        content.appendChild(divElementoConsulta);

        divFormCunsulta.appendChild(content);
    }

    function criaDivFormConsulta(elemento) {
        const divFormConsulta = document.createElement('div');
        divFormConsulta.classList.add('div-form-consulta');
        divFormConsulta.classList.add('div-componente');
        divFormConsulta.appendChild(elemento);

        form.appendChild(divFormConsulta);
        contentValue();
    }

    function criaDivInputConsulta(elemento) {
        const divInputConsulta = document.createElement('div');
        divInputConsulta.classList.add('div-input-consulta');
        divInputConsulta.appendChild(elemento);

        criaDivFormConsulta(divInputConsulta);
    }


    function inputsConsulta(elemento) {
        if (elemento.classList.contains('fornecedor')) {
            const contForm = document.createElement('input');                
            contForm.setAttribute('type', 'text');
            contForm.setAttribute('placeholder', 'Fornecedor');
            contForm.classList.add('input-consulta');
            
            criaDivInputConsulta(contForm);
        }
        
        if (elemento.classList.contains('cliente')) {
            const contForm = document.createElement('input');                
            contForm.setAttribute('type', 'text');
            contForm.setAttribute('placeholder', 'Cliente');
            contForm.classList.add('input-consulta');
            
            criaDivInputConsulta(contForm);
        }

        if (elemento.classList.contains('produto')) {
            const contForm = document.createElement('input');                
            contForm.setAttribute('type', 'text');
            contForm.setAttribute('placeholder', 'Produto');
            contForm.classList.add('input-consulta');
            
            criaDivInputConsulta(contForm);
        }   
    }

    function tituloForm(titulo, elemento) {
        const text = document.querySelector('.titulo-form');

        if (titulo.classList.contains('cadastro'))  {
            text.classList.add(elemento.textContent.toLocaleLowerCase());
            text.textContent = `Cadastro de ${elemento.textContent.toLocaleLowerCase()}` ;
        }

        if (titulo.classList.contains('consulta'))  {
            text.classList.add(elemento.textContent.toLocaleLowerCase());
            text.textContent = `Consulta de ${elemento.textContent.toLocaleLowerCase()}`;
        }

        if (titulo.classList.contains('cad-ped'))  {
            // Linha comentada por motivo de o elemento estar vazio...
            text.classList.add('pedido');
            text.textContent = `Cadastro de pedido`;
        }
    }

    function criaBtnConsulta() {
            const inpuConsultaForm = document.querySelector('.div-input-consulta')
            const btnForm = document.createElement('button');
            btnForm.classList.add('btn-form');
            btnForm.classList.add('btn-form-consulta');
            btnForm.classList.add(btn[0].toLocaleLowerCase());
            btnForm.textContent = 'Pesquisar';
            inpuConsultaForm.appendChild(btnForm);
    }

    function criaBotton(elemento) {
        const footerForm = document.querySelector('.container-footer-form');
     
        for (i = 1; i < btn.length; i++) {
            const btnForm = document.createElement('button');
            btnForm.classList.add('btn-form');
            btnForm.classList.add(btn[i].toLocaleLowerCase());
            btnForm.textContent = btn[i];
            footerForm.appendChild(btnForm);
        }
    }

    function abrirPedido(elemento) {
        const tituloCad = document.querySelector('.icon-pedido');
        const divComponente = document.querySelector('.div-componente');

        if (tituloCad.classList.contains('cad-ped')) {       
            if (divComponente != null) {
                divComponente.remove();
                formPedidos(elemento);
                tituloForm(tituloCad, elemento); 
            }else{
                tituloForm(tituloCad, elemento); 
                formPedidos(elemento);
                criaBotton(tituloCad);
            }
        }
    }

    function abrirFormulario(elemento) {
        const titulo = document.querySelector('.titulo-menu');

        if (titulo.classList.contains('cadastro')) {       
            formCadastro(elemento);
            tituloForm(titulo, elemento); 
            criaBotton(titulo);
            return
        }

        if (titulo.classList.contains('consulta')) {
            tituloForm(titulo, elemento);
            inputsConsulta(elemento);
            criaBtnConsulta();
            return
        }

    }

    function limparInput() {
        const inputs = document.querySelectorAll('.input-cadastro');
        inputs.forEach(input =>{
            input.value = '';
        });
    }

    function limparPagina() {
        const tituloForm = document.querySelector('.titulo-form');
        const divCenter = document.querySelector('.div-componente');
        const btns = document.querySelectorAll('.btn-form');

        if (divCenter != null){
            tituloForm.textContent = '';
            divCenter.remove();
            btns.forEach(el => {
                el.remove();
            });
        }
    }

    document.addEventListener('click', function(evento) {
        const elemento = evento.target;

        if (elemento.classList.contains('fornecedor') || elemento.classList.contains('cliente') 
        || elemento.classList.contains('produto')) {        
            limparPagina();
            abrirFormulario(elemento);
            menuCadastro.style.marginLeft = `-${1000}px`;
        } 

        if (elemento.classList.contains('pedido')) {             
            limparPagina();
            abrirPedido(elemento);
            menuCadastro.style.marginLeft = `-${1000}px`;

        }

        if (elemento.classList.contains('icon-casa')) {             
            limparPagina();
        }

        if (elemento.classList.contains('cancelar')) {             
            limparInput();
        }

        if (elemento.classList.contains('btn-add-ped')) {             
            limparInput();
        }
    });

})();