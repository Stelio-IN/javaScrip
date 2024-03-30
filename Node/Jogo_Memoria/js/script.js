var container = document.createElement("div");
container.classList.add("grid");
document.body.appendChild(container);

/* array de imagens */
const imagens = ["c", "f", "j", "p", "d"];

const createElement = (tagHtml, nomeClasse) => {
  const element = document.createElement(tagHtml);
  element.className = nomeClasse;
  return element;
};

const creatCard = (imagem) => {
  const card = createElement("div", "card");
  const front = createElement("div", "front");
  const back = createElement("div", "back");

  front.style.backgroundImage = `url('../img/${imagem}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", mostrar_carta);

  card.setAttribute("data-imagem", imagem);

  return card;
};

const carregar = () => {
  const duplicarImagens = [...imagens, ...imagens];

  duplicarImagens
    .sort(() => Math.random() - 0.5)
    .forEach((img) => {
      container.appendChild(creatCard(img));
      console.log(img);
    });
};

let primeiraImagem = "";
let segundaImagem = "";

const verificarImagens = () => {
  const img_1 = primeiraImagem.getAttribute("data-imagem");
  const img_2 = segundaImagem.getAttribute("data-imagem");

  if (img_1 === img_2) {
    primeiraImagem.firstChild.classList.add("desabilitar_carta");
    segundaImagem.firstChild.classList.add("desabilitar_carta");

    primeiraImagem = "";
    segundaImagem = "";

    fimDoJogo();
  } else {
    setTimeout(() => {
      primeiraImagem.classList.remove("virar_carta");
      segundaImagem.classList.remove("virar_carta");
      primeiraImagem = "";
      segundaImagem = "";
    }, 500);
  }
};

const fimDoJogo = () => {
  const cartaDesabilitadas = document.querySelectorAll(".desabilitar_carta");

  if (cartaDesabilitadas.length === 10) {
    setTimeout(() => {
      alert("Ganhaste essas batatas free");
      window.location.reload(); 
    }, 500);
  }
};
const mostrar_carta = ({ target }) => {
  if (target.parentNode.className.includes("virar_carta")) {
    return;
  }
  if (primeiraImagem === "") {
    target.parentNode.classList.add("virar_carta");
    primeiraImagem = target.parentNode;
  } else if (segundaImagem === "") {
    target.parentNode.classList.add("virar_carta");
    segundaImagem = target.parentNode;

    verificarImagens();
  }
};

carregar();
