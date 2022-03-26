(function(){
    const menuCadastro = document.querySelector('.menu');
    const form = document.querySelector('form');
    
    const fornecedor = ['Razão social', 'Nome fantasia', 'CNPJ', 'Contato', 
                        'Contato', 'Contato', 'Contato', 'Contato', 'Contato', 'Contato',
                         'Contato', 'Contato', 'Contato', 'Contato', 'Contato', 'Contato'];
    
    const cliente = ['Nome', 'CPF', 'E-MAIL', 'Telefone', 'Telefone', 'Telefone', 'Telefone', 'Telefone'
                    , 'Telefone', 'Telefone', 'Telefone', 'Telefone', 'Telefone', 'Telefone', 'Telefone'];
    
    const Produto = ['Descrição', 'Marca', 'Modelo', 'Validade', 'Validade', 'Validade'
                    , 'Validade', 'Validade', 'Validade', 'Validade', 'Validade', 'Validade'
                    , 'Validade', 'Validade', 'Validade', 'Validade'];

    const btn = ['Pesquisar', 'Salvar', 'Editar', 'Cancelar', 'Excluir'];
 
    document.addEventListener('click', function(evento) {
        const elemento = evento.target;

        if (elemento.classList.contains('fornecedor') || elemento.classList.contains('cliente') 
        || elemento.classList.contains('produto')) { 
            
            menuCadastro.style.marginLeft = `-${1000}px`;            
            abrirFormulario(elemento);
            

        } 
    });

    function formsCadastro(elemento) {
        const divForm = document.createElement('div');
        divForm.classList.add('div-form-cadastro');
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
                contForm.classList.add('input-cadastro');
                divForm.appendChild(contForm);
            }
            form.appendChild(divForm);
        }
    }

    function contentValue () {
        const inputValue = document.querySelector('.input-consulta');
        const p = document.createElement('p');
        p.classList.add('conteudo-consulta');
        p.textContent = 'Conteúdo da consulta.';

        criaDivContentConsulta(p);
    }
    
    function criaDivContentConsulta(elemento) {
        const divFormCunsulta = document.querySelector('.div-form-consulta');
        const content = document.createElement('div');
        content.classList.add('div-form-conteudo-consulta');

        content.appendChild(elemento);

        divFormCunsulta.appendChild(content);
    }

    function criaDivFormConsulta(elemento) {
        const divFormConsulta = document.createElement('div');
        divFormConsulta.classList.add('div-form-consulta');
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

    function tituloForm(titulo) {
        const text = document.querySelector('.titulo-form');

        if (titulo.classList.contains('cadastro'))  {
            text.textContent = `Cadastro`;
        }

        if (titulo.classList.contains('consulta'))  {
            text.textContent = 'Consulta';
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
        const footerForm = document.querySelector('.container-footer-form')
        const inpuConsultaForm = document.querySelector('.div-input-consulta')
     
        for (i = 1; i < btn.length; i++) {
            const btnForm = document.createElement('button');
            btnForm.classList.add('btn-form');
            btnForm.classList.add(btn[i].toLocaleLowerCase());
            btnForm.textContent = btn[i];
            footerForm.appendChild(btnForm);
        }
    } 

    function abrirFormulario(elemento) {
        const titulo = document.querySelector('.titulo-menu');
        const divCa = document.querySelector('.div-form-cadastro');
        const divCo = document.querySelector('.div-form-consulta');

        if (titulo.classList.contains('cadastro')) {       
            if (divCa != null || divCo != null) {
                if (divCo != null){
                    divCo.remove();
                    if (divCa != null){
                        divCa.remove();
                    }
                    tituloForm(titulo); 
                    formsCadastro(elemento);
                }
            }else{
                tituloForm(titulo); 
                formsCadastro(elemento);
                criaBotton(titulo);
            }
        }

        if (titulo.classList.contains('consulta')) {
            if (divCa != null || divCo != null) {
                if (divCa != null){
                    divCa.remove();
                    if (divCo != null){
                        divCo.remove();
                    }
                    tituloForm(titulo);
                    inputsConsulta(elemento);
                    criaBtnConsulta();
                } 
            }else{
                inputsConsulta(elemento);
                tituloForm(titulo);
                criaBotton(titulo);
                criaBtnConsulta();    
            }
        }
    }

})();