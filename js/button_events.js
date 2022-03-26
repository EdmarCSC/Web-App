(function (){
    const contentConsulta = document.querySelector('.btn-form-consulta');
    
    document.addEventListener('click', function(evento) {
        
        const el = evento.target;
        if (el.classList.contains('btn-form-consulta')) {
           
            console.log('Certo!');
        }
         
    })
})();
