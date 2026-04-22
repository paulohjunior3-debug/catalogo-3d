const produtos = [
  {
    nome: "Carrinho Educativo",
    categoria: "infantil",
    imagem: "img/1.jpg"
  },
  {
    nome: "Chaveiro Personalizado",
    categoria: "chaveiro",
    imagem: "img/2.jpg"
  },
  {
    nome: "Quebra-cabeça Infantil",
    categoria: "infantil",
    imagem: "img/3.jpg"
  }
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const categoriasEl = document.getElementById("categorias");
const slides = document.getElementById("slides");

/* RENDER PRODUTOS */
function render(lista) {
  grid.innerHTML = "";
  lista.forEach(p => {
    grid.innerHTML += `
      <div class="produto">
        <img src="${p.imagem}">
        <h3>${p.nome}</h3>
        <a href="https://wa.me/5534996896636?text=Olá, tenho interesse no produto: ${p.nome}" target="_blank">
          Comprar
        </a>
      </div>
    `;
  });
}

render(produtos);

/* BUSCA */
search.addEventListener("input", () => {
  const termo = search.value.toLowerCase();
  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(termo) ||
    p.categoria.toLowerCase().includes(termo)
  );
  render(filtrados);
});

/* CATEGORIAS */
const categorias = [...new Set(produtos.map(p => p.categoria))];

categorias.forEach(cat => {
  categoriasEl.innerHTML += `<li onclick="filtrar('${cat}')">${cat}</li>`;
});

function filtrar(cat) {
  const filtrados = produtos.filter(p => p.categoria === cat);
  render(filtrados);
}

/* BANNER */
produtos.forEach(p => {
  slides.innerHTML += `<img src="${p.imagem}">`;
});
