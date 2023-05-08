const cardFront = document.querySelector(".container-itens");
const cardBack = document.querySelector(".nota");
const btnFront = document.querySelector(".btn-concluir");
const quantidade = document.querySelector(".qtd");
const descricao = document.querySelector(".descri");
const valorItem = document.querySelector(".valor");
const total = document.querySelector(".total");

let itens = [];
let botoes = document.querySelectorAll('button');

//adicionar os itens no carrinho
function carrinho(){
  botoes.forEach(function(botao){
    botao.addEventListener("click", function(){
      itens.push(botao.value);
    });
  });
}

//contar o numero de itens
function numeroDeItens(){
  let valoresUnicos = [...new Set(itens)];
  valoresUnicos.forEach(function(valor){
    let numClicks = itens.filter(function(v){return v === valor;}).length;
    //quantidade de itens
    let spanQtd = document.createElement("span");
    spanQtd.textContent = numClicks;
    quantidade.appendChild(spanQtd);
    //descrição dos itens
    let spanDesc = document.createElement("span");
    spanDesc.textContent = valor;
    descricao.appendChild(spanDesc);
    //verificando o valor
    let prod = valor;
    let spanValor = document.createElement("span");

    let tot = 0;
    let valorH = 0;
    let valorF = 0;
    let valorR = 0;
    let valorS = 0;

    switch(prod){
      case "Hambuguer":
        valorH = numClicks * 12;
        spanValor.textContent = `R$${valorH},00`;
        valorItem.appendChild(spanValor);
        tot += valorH + valorF + valorR + valorS;
        break;
      case "Batata-Frita":
        valorF = numClicks * 10;
        spanValor.textContent = `R$${valorF},00`;
        valorItem.appendChild(spanValor);
        tot += valorH + valorF + valorR + valorS;
        break;
      case "Refrigerante":
        valorR = numClicks * 14;
        spanValor.textContent = `R$${valorR},00`;
        valorItem.appendChild(spanValor);
        tot += valorH + valorF + valorR + valorS;
        break;
      case "Soverte":
        valorS = numClicks * 5;
        spanValor.textContent = `R$${valorS},00`;
        valorItem.appendChild(spanValor);
        tot += valorH + valorF + valorR + valorS;
        break;
      default:
        alert("Não existe no cadarpio!");
        break;
    }
    console.log(`O resultado da: ${tot}`);
  });
}


function finalizando(){
  //invertendo cards
  btnFront.addEventListener("click", function(){
    cardFront.style.display = "none";
    cardBack.style.display = "flex";
  //listando itens
  numeroDeItens();
  });
}
let body = document.querySelector("body");
let wid = body.clientWidth();
alert(`a tela tem ${wid}px`);
carrinho();
finalizando();