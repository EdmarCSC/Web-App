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

const itensPedido = [];

function gravarPed(endPoint, cod, objValue) {
  const db = getDatabase();
    push(ref(db, `${endPoint}/${cod}`), {
      nome: objValue.nome,
      CNPJ: objValue.CNPJ,
      contato: objValue.contato,
      listaPedido: objValue.listaPedido
    }); 
  let cont = itensPedido.length    
    for (i = cont; i > 0; i--) {
      itensPedido.pop();
    }
    console.log(itensPedido);
}

function gravarCad(endPoint, cod, objValue) {
  const db = getDatabase();
    push(ref(db, `${endPoint}/${cod}`), {
      Razaosocial: objValue.Razaosocial, 
        Nomefantasia: objValue.Nomefantasia,
        CNPJ: objValue.CNPJ, 
        Rua: objValue.Rua, 
        numero: objValue.numero,
        cidade: objValue.cidade, 
        estado: objValue.estado, 
        telefone: objValue.telefone, 
        email: objValue.email, 
        inscricao: objValue.inscricao,
        tipo: objValue.tipo,
        produto: objValue.produto, 
        comprador: objValue.comprador, 
        vendedor: objValue.vendedor
    });
}

function gravarCadProd(endPoint, objValue) {
console.log(endPoint, objValue);
  const db = getDatabase();
    for (i = 0; i < dataProdutos.length; i++) {
      push(ref(db, `${endPoint}/${objValue[i].Codigo}`), {
        codigo: objValue[i].Codigo, 
        marca: objValue[i].Marca,
        descricao: objValue[i].Descricao,
        medida: objValue[i].Medida, 
        valor: objValue[i].Valor,   
      });
    }
}

function enviarDataPed(endPoint, cliente, lista) {
  const propPedido = {
    nome: cliente[0],
    CNPJ: cliente[1],
    contato: cliente[2],
    listaPedido: lista
  }
  gravarPed(endPoint, propPedido.nome, propPedido);
  linparInputs();
}

function enviarDataCad(endPoint, objValue) {
  const obj = {
    Razaosocial: objValue[0], 
    Nomefantasia: objValue[1],
    CNPJ: objValue[2], 
    Rua: objValue[3], 
    numero: objValue[4],
    cidade: objValue[5], 
    estado: objValue[6], 
    telefone: objValue[7], 
    email: objValue[8], 
    inscricao: objValue[9],
    tipo: objValue[10],
    produto: objValue[11], 
    comprador: objValue[12], 
    vendedor: objValue[13]
  }
  gravarCad(endPoint, obj.Razaosocial, obj);
  linparInputs();
}

function linparInputs() {
  let inputCadAll = document.querySelectorAll('.input-cadastro');
  inputCadAll.forEach(limpData => {
    limpData.value = '';
  })
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

function pesquisarDada(el, valor) {
  let input = document.querySelector('.input-consulta');  
  let content = document.querySelector('.conteudo-consulta');
  const dbRef = ref(getDatabase());
  get(child(dbRef, `${el}/${input.value}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const el = Object.values(snapshot.val());
      el.forEach(element => {
        content.textContent = element.Nomefantasia+' ';
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

function criaListaPedido(conteudo) {
  const telaItens = document.querySelector('.div-lista-ped');
  const content = document.createElement('p');
  content.classList.add('conteudo-pedido');

  content.textContent = conteudo;
  itensPedido.push(conteudo);
  telaItens.appendChild(content);

}

function listarIntensPed(pedido) {
  const inputPed = document.querySelector('.input-item-ped');
  const dbRef = ref(getDatabase());
  let valor;
  get(child(dbRef, `${pedido}/${inputPed.value}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const el = Object.values(snapshot.val());
      el.forEach(element => {
        valor = element.codigo+' ';
        valor += element.descricao+' ';
        valor += element.marca+' ';
        valor += element.medida+' ';
        valor += element.valor+' ';
      });
      criaListaPedido(valor);
      //alterarElemento(content);  
      inputPed.value = '';
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
      console.error(error);
      inputPed.value = '';
  });
}

function etiqueta(content) {
  const etqCadastro = document.querySelector('.titulo-form');
  const etqConsulta = document.querySelector('.div-form-consulta');
  let el = ''; 

  if (etqConsulta === null) {
    if (etqCadastro.classList.contains('fornecedor'))  el = 'fornecedores';
    if (etqCadastro.classList.contains('cliente'))  el = 'clientes';
    if (etqCadastro.classList.contains('produto'))  el = 'produtos';
    enviarDataCad(el, content);
  }else {
    if (etqCadastro.classList.contains('fornecedor'))  el = 'fornecedores';
    if (etqCadastro.classList.contains('cliente'))  el = 'clientes';
    if (etqCadastro.classList.contains('produto'))  el = 'produtos';
    pesquisarDada(el, content);
  }
    
}

function capturaDadosEntrada(prt) {
  const divPed = document.querySelector('.div-form-ped');
  const inputAll = document.querySelectorAll('.input-cadastro');
  const inputPed = document.querySelectorAll('.input-pedidos');
  const valorInputs = [];
  const clientePed = [];

        
  if (prt === 'imprimir') {
    inputPed.forEach(dadosCli => {
      clientePed.push(dadosCli.value);      
    });
    return clientePed;
  }



  if (divPed != null) {
    inputPed.forEach(dadosCli => {
      clientePed.push(dadosCli.value);      
    });
    enviarDataPed('pedidos', clientePed, itensPedido);
    return
  }
  
  inputAll.forEach(input => {
    valorInputs.push(input.value);
  });       
  etiqueta(valorInputs);
}

function printRelPed() {
  const cli = capturaDadosEntrada('imprimir');
  const bodyDocument = document.querySelector('.print');
  const headerPrint = document.createElement('div');
  const bodyPrint = document.createElement('div');
  const dadosClientePrint = document.createElement('div');
  const line = document.createElement('hr');
  const lineBody = document.createElement('hr');
  const titulo = document.createElement('h1');

  titulo.textContent = 'DASHBORD';

  headerPrint.appendChild(titulo);
  bodyPrint.appendChild(headerPrint);

  cli.forEach(d => {
    const dado = document.createElement('span');
    dado.innerHTML = d;
    dadosClientePrint.appendChild(dado);
    bodyPrint.appendChild(dadosClientePrint);
    console.log(dado);
  })

  for (i = 0; i < itensPedido.length; i++){
    const lineContent = document.createElement('hr');
    const textBody = document.createElement('p');
    textBody.textContent = itensPedido[i];
    textBody.classList.add('text-print');
    lineContent.classList.add('hi-line-print');
    bodyPrint.appendChild(textBody);
    bodyPrint.appendChild(lineContent);
  }


  headerPrint.classList.add('header-print');
  titulo.classList.add('titulo-print');
  line.classList.add('line-print');
  lineBody.classList.add('line-body');
  bodyPrint.classList.add('body-print');
  dadosClientePrint.classList.add('dados-cliente');
 
  bodyDocument.appendChild(bodyPrint);

  print();
}

document.addEventListener('click', function(evento) {
    
  const el = evento.target;
  if (el.classList.contains('salvar')) {
    capturaDadosEntrada();
  }

  if (el.classList.contains('btn-form-consulta')) {
    etiqueta();
  }

  if (el.classList.contains('adicionar')) {
    listarIntensPed('produtos');
  }

  if (el.classList.contains('imprimir')) {
    printRelPed();
  }
});

