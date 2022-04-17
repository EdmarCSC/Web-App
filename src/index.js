import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, push, get } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCusO0lsWLF5JhJ93-ZUrtgI8-E4iQY84E",
  authDomain: "webtest-e7f27.firebaseapp.com",
  databaseURL: "https://webtest-e7f27-default-rtdb.firebaseio.com",
  projectId: "webtest-e7f27",
  storageBucket: "webtest-e7f27.appspot.com",
  messagingSenderId: "493414250342",
  appId: "1:493414250342:web:7a07d955f622bbb645faa7"
};

const app = initializeApp(firebaseConfig); 

const propObjet = ['Razão-social', 'Nome-fantasia', 'CNPJ', 'Rua', 
                  'numero', 'cidade', 'estado', 'telefone', 'e-mail', 'inscricao',
                  'tipo', 'produto', 'comprador', 'vendedor'];

function writeUserData(obj, name, el) {
    const db = getDatabase();
    push(ref(db, `${el}/${name}`), {
      Razaosocial: obj.Razaosocial, 
        Nomefantasia: obj.Nomefantasia,
        CNPJ: obj.CNPJ, 
        Rua: obj.Rua, 
        numero: obj.numero,
        cidade: obj.cidade, 
        estado: obj.estado, 
        telefone: obj.telefone, 
        email: obj.email, 
        inscricao: obj.inscricao,
        tipo: obj.tipo,
        produto: obj.produto, 
        comprador: obj.comprador, 
        vendedor: obj.vendedor
    });
  }

function enviarData(elemento, el) {
    const obj = {
        Razaosocial: elemento[0], 
        Nomefantasia: elemento[1],
        CNPJ: elemento[2], 
        Rua: elemento[3], 
        numero: elemento[4],
        cidade: elemento[5], 
        estado: elemento[6], 
        telefone: elemento[7], 
        email: elemento[8], 
        inscricao: elemento[9],
        tipo: elemento[10],
        produto: elemento[11], 
        comprador: elemento[12], 
        vendedor: elemento[13]
    }
    writeUserData(obj, obj.Razaosocial, el);
    linparInputs();
}

function linparInputs() {
  let inputCad = document.querySelectorAll('.input-cadastro');
    for (i = 0; i < inputCad.length; i++) {
      let inputCadZerar = document.querySelector(`.input-cadastro${i}`);
      inputCadZerar.value = '';
    }
}

function pesquisarDada() {
  let dado = document.querySelector('.input-consulta').value;  
  let content = document.querySelector('.conteudo-consulta');
  const dbRef = ref(getDatabase());
    get(dbRef, `fornecedores/${dado}`).then((snapshot) => {
      if (snapshot.exists()) {
        const el = snapshot.val();
        content.innerHTML = JSON.stringify(el);
        dado.value = '';
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
    console.error(error);
    dado.value = '';
  });
}

function etiqueta(valor) {
  const etqCadastro = document.querySelector('.titulo-form');
  const etqConsulta = document.querySelector('.div-form-consulta');
  if (etqConsulta === null) {
    let el = '';
    if (etqCadastro.classList.contains('fornecedor'))  el = 'fornecedores';
    if (etqCadastro.classList.contains('cliente'))  el = 'clientes';
    if (etqCadastro.classList.contains('produto'))  el = 'produtos';
    if (etqCadastro.classList.contains('pedido'))  el = 'pedidos';
    enviarData(valor, el);
  }else {
    pesquisarDada();
  }
    
}

document.addEventListener('click', function(evento) {
    
  const el = evento.target;
  if (el.classList.contains('salvar')) {
    const valor = [];
    for(i = 0; i < 14; i++) {
        let inpsValue = document.querySelector(`.input-cadastro${i}`).value;
        valor.push(inpsValue);
    }            
    etiqueta(valor);
  }

  if (el.classList.contains('btn-form-consulta')) {
    etiqueta();
  }
});