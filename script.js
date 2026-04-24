/* script.js */

// 1. BANCO DE DADOS DOS PRODUTOS
const produtos = [
    {
        id: 1,
        nome: "Jinx & Vi - League of Legends Arcane",
        categoria: "anime",
        preco: "119,90",
        descricao: "Peça exclusiva desenvolvida por meio de impressão 3D em filamento PLA...\n\nO modelo retrata as personagens Jinx e Vi...\n\nPor se tratar de um produto artesanal...\n\nObservações:\n\nProduto entregue conforme exibido nas imagens\nNão acompanha pintura (acabamento lixado e envernizado)\nIndicado para decoração e coleção",
        imagem: "C:\Users\PH\Documents\catalogo-3d\img\Animes\VieJinx\vi.png", // Quando tiver a foto real, mude aqui (ex: "dino.png")
        fotosExtras: [C:\Users\PH\Documents\catalogo-3d\img\Animes\VieJinx\vi1.png], // Se tiver mais fotos, coloque os nomes aqui (ex: ["dino2.png", "dino3.png"])
        linkWpp: "https://wa.me/5534996896636?text=Olá!+Quero+saber+mais+sobre+o+Quebra-Cabeça+Dino"
    },
    {
        id: 2,
        nome: "Goku Ultra Instinto",
        categoria: "anime",
        preco: "89,90",
        descricao: "Action figure com alto nível de detalhamento impresso na Bambu Lab A1 Mini. Material PLA Premium.",
        imagem: "logo_r3d.png", 
        fotosExtras: [],
        linkWpp: "https://wa.me/5534996896636?text=Olá!+Tenho+interesse+no+Goku+3D"
    }
];

// 2. FUNÇÃO PARA RENDERIZAR OS CARDS NA VITRINE
function renderizarProdutos(lista) {
    const grid = document.getElementById('grid-produtos');
    grid.innerHTML = '';
    
    if (lista.length === 0) {
        grid.innerHTML = '<div class="no-products">Nenhum produto encontrado nesta categoria.</div>';
        return;
    }

    lista.forEach(p => {
        grid.innerHTML += `
            <div class="card" onclick="verDetalhes(${p.id})">
                <div class="card-img-container">
                    <img src="${p.imagem}" alt="${p.nome}" class="card-img">
                </div>
                <div class="card-content">
                    <span class="card-cat">${p.categoria}</span>
                    <h3 class="card-title">${p.nome}</h3>
                    <p class="card-desc">R$ ${p.preco}</p>
                    <small style="color: #814DF6; font-weight: bold;">Ver detalhes</small>
                </div>
            </div>
        `;
    });
}

// 3. FUNÇÃO PARA MOSTRAR A PÁGINA DE DETALHES
function verDetalhes(id) {
    const produto = produtos.find(p => p.id === id);
    
    // Preenche os textos
    document.getElementById('detalhe-nome').innerText = produto.nome;
    document.getElementById('detalhe-cat').innerText = produto.categoria;
    document.getElementById('detalhe-preco').innerText = produto.preco;
    document.getElementById('detalhe-desc').innerText = produto.descricao;
    document.getElementById('foto-principal').src = produto.imagem;
    document.getElementById('detalhe-link-wpp').href = produto.linkWpp;

    // Miniaturas
    const minis = document.getElementById('miniaturas');
    minis.innerHTML = `<img src="${produto.imagem}" onclick="trocarFoto('${produto.imagem}')" style="width:80px; height:80px; object-fit:cover; border-radius:10px; cursor:pointer;">`;
    
    if (produto.fotosExtras && produto.fotosExtras.length > 0) {
        produto.fotosExtras.forEach(f => {
            minis.innerHTML += `<img src="${f}" onclick="trocarFoto('${f}')" style="width:80px; height:80px; object-fit:cover; border-radius:10px; cursor:pointer;">`;
        });
    }

    // Troca as telas (Esconde vitrine e mostra detalhe)
    document.getElementById('vitrine').style.display = 'none';
    document.querySelector('.hero-section').style.display = 'none';
    document.getElementById('detalhes-produto').style.display = 'block';
    window.scrollTo(0, 0);
}

// 4. FUNÇÃO PARA VOLTAR PARA A VITRINE
function voltarParaVitrine() {
    document.getElementById('vitrine').style.display = 'block';
    document.querySelector('.hero-section').style.display = 'block';
    document.getElementById('detalhes-produto').style.display = 'none';
}

// 5. FUNÇÃO PARA TROCAR A FOTO PRINCIPAL NA GALERIA
function trocarFoto(src) {
    document.getElementById('foto-principal').src = src;
}

// 6. FUNÇÃO DE FILTRO DE CATEGORIAS
function filtrar(cat) {
    // Se estiver na tela de detalhes, volta para a vitrine primeiro
    voltarParaVitrine();

    const links = document.querySelectorAll('.nav-links li');
    links.forEach(link => {
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(`'${cat}'`)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    if(cat === 'todos') {
        renderizarProdutos(produtos);
    } else {
        const filtrados = produtos.filter(p => p.categoria === cat);
        renderizarProdutos(filtrados);
    }
}

// 7. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos(produtos);
});