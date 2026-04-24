/* script.js */

// BANCO DE DADOS DOS PRODUTOS
// Para adicionar novos produtos, basta duplicar um bloco {} e editar os dados.
const produtos = [
    // --- CATEGORIA: EDUCATIVO ---
    {
        id: 1,
        nome: "Quebra-Cabeça Alfabeto Dinossauro",
        categoria: "educativo",
        descricao: "Placa interativa para aprendizado de letras e cores.",
        imagem: "https://via.placeholder.com/300?text=Quebra-Cabeça+Dino", // Troque pela foto real
        linkWpp: "https://wa.me/5534996896636?text=Olá,+tenho+interesse+no+Quebra-Cabeça+Dino"
    },
    {
        id: 2,
        nome: "Torre de Empilhar Formas Geométricas",
        categoria: "educativo",
        descricao: "4 peças grandes, fáceis de segurar e seguras para crianças.",
        imagem: "https://via.placeholder.com/300?text=Torre+Formas",
        linkWpp: "https://wa.me/5534996896636?text=Olá,+tenho+interesse+na+Torre+Formas"
    },
    
    // --- CATEGORIA: ANIME ---
    {
        id: 3,
        nome: "Estatueta Goku Ultra Instinto (18cm)",
        categoria: "anime",
        descricao: "Impressão de alta resolução com pintura detalhada.",
        imagem: "https://via.placeholder.com/300?text=Goku+Ultra",
        linkWpp: "https://wa.me/5534996896636?text=Olá,+tenho+interesse+na+Estatueta+Goku"
    },
    {
        id: 4,
        nome: "Chaveiro Emblema Attack on Titan",
        categoria: "anime",
        descricao: "Resistente, cores vivas e ótimo acabamento.",
        imagem: "https://via.placeholder.com/300?text=Chaveiro+AoT",
        linkWpp: "https://wa.me/5534996896636?text=Olá,+tenho+interesse+no+Chaveiro+AoT"
    },

    // --- CATEGORIA: RELIGIOSO ---
    {
        id: 5,
        nome: "Imaculada Conceição Estilizada",
        categoria: "religioso",
        descricao: "Acabamento efeito gesso, design moderno e minimalista.",
        imagem: "https://via.placeholder.com/300?text=Nossa+Senhora",
        linkWpp: "https://wa.me/5534996896636?text=Olá,+tenho+interesse+na+Imaculada"
    },
    
    // --- CATEGORIA: PERSONALIZADO ---
    {
        id: 6,
        nome: "Lembrancinha de Aniversário (Nome + Tema)",
        categoria: "personalizado",
        descricao: "Orçamento para kits acima de 10 unidades.",
        imagem: "https://via.placeholder.com/300?text=Lembrancinha",
        linkWpp: "https://wa.me/5534996896636?text=Olá,+gostaria+de+um+orçamento+para+lembrancinhas"
    }
];

// FUNÇÃO PARA INSERIR OS PRODUTOS NA TELA
function renderizarProdutos(lista) {
    const grid = document.getElementById('grid-produtos');
    const heroTitle = document.querySelector('.section-title');
    
    // Limpa a vitrine atual
    grid.innerHTML = '';
    
    if (lista.length === 0) {
        grid.innerHTML = '<div class="no-products">Nenhum produto encontrado nesta categoria.</div>';
        return;
    }

    // Cria o HTML de cada card
    lista.forEach(p => {
        const cardHTML = `
            <div class="card">
                <div class="card-img-container">
                    <img src="${p.imagem}" alt="${p.nome}" class="card-img">
                </div>
                <div class="card-content">
                    <span class="card-cat">${p.categoria}</span>
                    <h3 class="card-title">${p.nome}</h3>
                    <p class="card-desc">${p.descricao}</p>
                    <a href="${p.linkWpp}" target="_blank" class="btn-wpp">
                        <i class="fab fa-whatsapp"></i> Tenho Interesse
                    </a>
                </div>
            </div>
        `;
        // Insere o card na grid
        grid.innerHTML += cardHTML;
    });
}

// FUNÇÃO DE FILTRO
function filtrar(cat) {
    const grid = document.getElementById('grid-produtos');
    const heroSection = document.querySelector('#vitrine');
    const links = document.querySelectorAll('.nav-links li');

    // Atualiza a classe active nos links
    links.forEach(link => {
        if (link.getAttribute('onclick').includes(`'${cat}'`)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Rola a tela suavemente para a vitrine
    heroSection.scrollIntoView({ behavior: 'smooth' });

    if(cat === 'todos') {
        renderizarProdutos(produtos);
    } else {
        const filtrados = produtos.filter(p => p.categoria === cat);
        renderizarProdutos(filtrados);
    }
}

// INICIALIZAÇÃO
// Quando a página carregar, renderiza todos os produtos
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos(produtos);
});