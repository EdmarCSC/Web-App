import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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


function writeUserData(data, name, el) {
  const db = getDatabase();

  if (el === 'pedidos') {
    console.log(el);
    push(ref(db, `${el}/${name}`), {
      nome: data.nome,
      CNPJ: data.CNPJ,
      contato: data.contato,
      listaPedido: data.listaPedido
    });    
    console.log(el);
  }else {
    push(ref(db, `${el}/${name}`), {
      Razaosocial: data.Razaosocial, 
        Nomefantasia: data.Nomefantasia,
        CNPJ: data.CNPJ, 
        Rua: data.Rua, 
        numero: data.numero,
        cidade: data.cidade, 
        estado: data.estado, 
        telefone: data.telefone, 
        email: data.email, 
        inscricao: data.inscricao,
        tipo: data.tipo,
        produto: data.produto, 
        comprador: data.comprador, 
        vendedor: data.vendedor
    });
    console.log(el);
  }
}

function enviarData(data, el) {
  if (el === 'pedidos') {  
    console.log(el);
    const propPedido = {
      nome: data[0],
      CNPJ: data[1],
      contato: data[2],
      listaPedido: [{
        descricao: data[0],
        cod: data[1],
        data: data[0]
      }]
    }
    writeUserData(propPedido, propPedido.nome, el);
  }else{
    const obj = {
        Razaosocial: data[0], 
        Nomefantasia: data[1],
        CNPJ: data[2], 
        Rua: data[3], 
        numero: data[4],
        cidade: data[5], 
        estado: data[6], 
        telefone: data[7], 
        email: data[8], 
        inscricao: data[9],
        tipo: data[10],
        produto: data[11], 
        comprador: data[12], 
        vendedor: data[13]
    }
    writeUserData(obj, obj.Razaosocial, el);
}
  linparInputs();
}

function linparInputs() {
  let inputCad = document.querySelectorAll('.input-cadastro');
    for (i = 0; i < inputCad.length; i++) {
      let inputCadZerar = document.querySelector(`.input-cadastro${i}`);
      inputCadZerar.value = '';
    }
}

function alterarElemento() {
  const elTest = document.querySelector('.icon-div-element');

  if (elTest === null){
    const iconDivElement = document.createElement('div');
    iconDivElement.classList.add('icon-div-element');

    const elementoConsulta = document.querySelector('.div-elemento-consulta');
    const elDeletar = document.createElement('img');
    elDeletar.classList.add('icon-alter-element');
    elDeletar.classList.add('elemento-deletar');

    const elEditar = document.createElement('img');
    elEditar.classList.add('icon-alter-element');
    elEditar.classList.add('elemento-editar');

    iconDivElement.appendChild(elEditar);
    iconDivElement.appendChild(elDeletar);

    elementoConsulta.appendChild(iconDivElement);
  }
  
  return
}

function pesquisarDada(valoer, el) {
  let input = document.querySelector('.input-consulta');  
  let content = document.querySelector('.conteudo-consulta');
  const dbRef = ref(getDatabase());
    get(child(dbRef, `${el}/${input.value}`)).then((snapshot) => {
      console.log(el);
      if (snapshot.exists()) {
        const el = Object.values(snapshot.val());
        el.forEach(element => {
          content.textContent += element.Nomefantasia+' ';
          content.textContent += element.Razaosocial+' ';
          content.textContent += element.CNPJ+' ';
          content.textContent += element.numero+' ';
        });
        alterarElemento(content);  
        input.value = '';
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
        console.error(error);
        input.value = '';
  });
}

function etiqueta(valor) {
  const etqCadastro = document.querySelector('.titulo-form');
  const etqConsulta = document.querySelector('.div-form-consulta');
  let el = ''; 

  if (etqConsulta === null) {
    if (etqCadastro.classList.contains('fornecedor'))  el = 'fornecedores';
    if (etqCadastro.classList.contains('cliente'))  el = 'clientes';
    if (etqCadastro.classList.contains('produto'))  el = 'produtos';
    if (etqCadastro.classList.contains('pedido'))  el = 'pedidos';
    console.log(valor, etqCadastro);
    enviarData(valor, el);
  }else {
    if (etqCadastro.classList.contains('fornecedor'))  el = 'fornecedores';
    if (etqCadastro.classList.contains('cliente'))  el = 'clientes';
    if (etqCadastro.classList.contains('produto'))  el = 'produtos';
    if (etqCadastro.classList.contains('pedido'))  el = 'pedidos';
    pesquisarDada(valor, el);
  }
    
}

function criaPedido(pedido) {
  

  //etiqueta(propPedido);
}

document.addEventListener('click', function(evento) {
    
  const el = evento.target;
  if (el.classList.contains('salvar')) {
    const valor = [];
    const inputAll = document.querySelectorAll('.input-cadastro');
    for(i = 0; i < inputAll.length; i++) {
        let inpsValue = document.querySelector(`.input-cadastro${i}`).value;
        valor.push(inpsValue);
    }            
    etiqueta(valor);
  }

  if (el.classList.contains('btn-form-consulta')) {
    etiqueta();
  }

  if (el.classList.contains('btn-add-ped')) {
    const inputAllPed = document.querySelectorAll('.input-cadastro');
    const pedido = [];
    for(i = 0; i < inputAllPed.length -1; i++) {
      let valuePed = document.querySelector(`.input-cadastro${i}`).value;
      pedido.push(valuePed);
    }

    etiqueta(pedido);
    //criaPedido(pedido);
    linparInputs();
  }
});