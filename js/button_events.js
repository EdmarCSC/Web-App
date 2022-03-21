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
        console.log(el);
        /* if (el.classList.contains('btn-form-salvar')) {
           
        } */
         
    })
})();
