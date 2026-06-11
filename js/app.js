let listaDeAmigos = [];
   let amigos = document.getElementById('nome-amigo');
   let amigosIncluidos = document.getElementById('lista-amigos');

function adicionar(){

   if(amigos.value == ''){
       alert('Adicione um nome.');
       return;
   } else if (listaDeAmigos.includes(amigos.value)) {
       alert('Nome já inserido! Caso seja uma outra pessoa, coloque o sobrenome.');
       return;
   } else {
       listaDeAmigos.push(amigos.value);
       atualizarLista();
       amigos.value = '';
       return;
   }
}


function sortear(){
  document.getElementById('lista-sorteio'). innerHTML = '';
  if(listaDeAmigos.length < 3){
    alert('Necessário ao menos 3 amigos para realizar o sorteio.');
  } else {
    embaralha(listaDeAmigos);
  let sorteio = document.getElementById('lista-sorteio');

  for (let i = 0; i < listaDeAmigos.length; i++) {

    if (i == listaDeAmigos.length - 1){
        sorteio.innerHTML += listaDeAmigos[i] + '-->' + listaDeAmigos[0]  +'<br>';
    }else {
        sorteio.innerHTML += listaDeAmigos[i] + '-->' + listaDeAmigos[i + 1]  +'<br>';
    }
    
   }
  }
  
}


function reiniciar(){
    listaDeAmigos = [];
    document.getElementById('lista-amigos'). textContent = '';
    document.getElementById('lista-sorteio'). innerHTML = '';
    document.getElementById('nome-amigo'). value = '';

}


//função de embaralhar uma array
function embaralha(lista) {

    //começa com o tamanho da array
    for (let indice = lista.length; indice; indice--) {
        
        //gera um indice aleatório
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


  function excluirAmigo(index) {
    let confirmacao = confirm(`Deseja remover ${listaDeAmigos[index]}?`);

    if(confirmacao == true){
    //remove apenas um elemento de dentro do array, neste caso o que foi clicado
    listaDeAmigos.splice(index, 1);

    //excluir os elemntos antigos e adicionar da nova maneira informada
    atualizarLista();
    atualizarSorteio();
    }
  
}


function atualizarLista(){
  amigosIncluidos.innerHTML = '';

  for(let i = 0; i < listaDeAmigos.length; i++){

    //cria um caixinha de texto vazio na memória do computador
    let item = document.createElement('span');

    //coloca o nome do amigo na caixa e verifica se o elemento não é o ultimo da lista, se for, coloca nada, se não, coloca virgula
    item.textContent = listaDeAmigos[i] + (i < listaDeAmigos.length - 1 ? ', ' : '');
    
    //cria um event listeners na caixa. quando é clicado, avisa à função qual é o (i) daquele nome
    item.onclick = function() {
      excluirAmigo(i);
    }

    //Pega a caixa criada e cola dentro da lista que aparece na tela
    amigosIncluidos.appendChild(item);

    //Troca o estilo do cursor quando passado em cima do elemento
    item.style.cursor = 'pointer';
  }
}


function atualizarSorteio(){
      document.getElementById('lista-sorteio'). innerHTML = '';
      for (let i = 0; i < listaDeAmigos.length; i++) {

    if (i == listaDeAmigos.length - 1){
        sorteio.innerHTML += listaDeAmigos[i] + '-->' + listaDeAmigos[0]  +'<br>';
    }else {
        sorteio.innerHTML += listaDeAmigos[i] + '-->' + listaDeAmigos[i + 1]  +'<br>';
    }

  }
} 