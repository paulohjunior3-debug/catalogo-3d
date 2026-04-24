const produtos = [
    {
        nome: "Alfabeto Móvel 3D",
        categoria: "educativo",
        preco: "45,00",
        imagem: "https://via.placeholder.com/250", // Troque pelas suas fotos
        linkWpp: "https://wa.me/5534996896636?text=Tenho+interesse+no+Alfabeto+3D"
    },
    {
        nome: "Action Figure Goku",
        categoria: "anime",
        preco: "89,00",
        imagem: "https://via.placeholder.com/250",
        linkWpp: "https://wa.me/5534996896636?text=Tenho+interesse+no+Goku"
    },
    {
        nome: "Anjinho da Guarda",
        categoria: "religioso",
        preco: "60,00",
        imagem: "https://via.placeholder.com/250",
        linkWpp: "https://wa.me/5534996896636?text=Tenho+interesse+no+Anjinho"
    }
];

function renderizarProdutos(lista) {
    const grid = document.getElementById('grid-produtos');
    grid.innerHTML = lista.map(p => `
        <div class="card">
            <img src="${p.imagem}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p>R$ ${p.preco}</p><br>
            <a href="${p.linkWpp}" target="_blank" class="btn-wpp">
                <i class="fab fa-whatsapp"></i> Tenho Interesse
            </a>
        </div>
    `).join('');
}

function filtrar(cat) {
    if(cat === 'todos') {
        renderizarProdutos(produtos);
    } else {
        const filtrados = produtos.filter(p => p.categoria === cat);
        renderizarProdutos(filtrados);
    }
}

// Inicializa o site com todos os produtos
renderizarProdutos(produtos);