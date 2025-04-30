function aumentarFont(){
    document.querySelectorAll("*").forEach(function (el) {
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = tamanhoAtual + 5 + "px"
        
    });
}

function diminuirFont(){
    document.querySelectorAll("*").forEach(function (el) {
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = tamanhoAtual - 5 + "px"
    });
}

function ativarContraste() {
    document.body.classList.toggle("contraste-alto");
    
    const botao = document.getElementById("modo-contraste");
    if (document.body.classList.contains("contraste-alto")) {
      botao.innerHTML = "Desativar Alto Contraste";
    } else {
      botao.innerHTML = "Ativar Alto Contraste";
    }
  }
  
  function aumentarFont() {
    document.querySelectorAll("*").forEach(function (el) {
      const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
      const novoTamanho = tamanhoAtual * 1.1; 
 
      const tamanhoMin = 0.8 * 16; 
      const tamanhoMax = 1.5 * 16; 
 
      const tamanhoFinal = Math.min(novoTamanho, tamanhoMax);
      el.style.fontSize = Math.max(tamanhoFinal, tamanhoMin) + "px";
    });
  }
 
  function diminuirFont() {
    document.querySelectorAll("*").forEach(function (el) {
      const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
      const novoTamanho = tamanhoAtual * 0.9; 
 
      const tamanhoMin = 0.8 * 16; 
      const tamanhoMax = 1.5 * 16; 
 
      const tamanhoFinal = Math.max(novoTamanho, tamanhoMin);
      el.style.fontSize = Math.min(tamanhoFinal, tamanhoMax) + "px";
    });
  }

