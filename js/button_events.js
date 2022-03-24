(function (){
    const inputValue = document.querySelector('.input-consulta');
    const contentConsulta = document.querySelector('.btn-form-salvar');
    const divFormCunsulta = document.querySelector('div-form-consulta');

    function contentValue (elemento) {
        const p = document.createElement('p');
        p.classList.add('conteudo-consulta');
        p.textContent = 'Certo!';

        elemento.appendChild(p);

        divFormCunsulta.appendChild(elemento);
    }
    
    function criaDivContentConsulta() {
        const content = document.createElement('div');
        content.classList.add('.div-form-conteudo-consulta');

        contentValue(content);
    }
    
    document.addEventListener('click', function(evento) {
        
        const el = evento.target;
        if (el.classList.contains('salvar') || el.classList.contains('editar') ||
         el.classList.contains('cancelar') || el.classList.contains('excluir') || el.classList.contains('input-pesquisa')) {
            console.log(el);
        }
         
    })
})();
