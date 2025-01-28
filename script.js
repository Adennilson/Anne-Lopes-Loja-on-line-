function adicionarProduto(imagem, nome, descricao, preco) {
    const produtos = document.querySelector('.caixa');
    const novoProduto = document.createElement('div');
    novoProduto.classList.add('produto');
  
    novoProduto.innerHTML = `
      <img src="${imagem}" alt="${nome}">
      <h3>${nome}</h3>
      <p>${descricao}</p>
      <p class="preco">R$${preco.toFixed(2)}</p>
      <button><a href="https://wa.me/5562996563279">WHATSAPP</a></button>
    `;
  
    produtos.appendChild(novoProduto);
  }
  
  // Exemplos de uso:
  adicionarProduto("batom.jpg", "Batom Matte Vermelho", "Batom de longa duração com acabamento matte.", 29.99);
  adicionarProduto("gloss.jpg", "Base Líquida", "Base leve e com alta cobertura muito o produto de vexlente qualidade.", 49.90);
  adicionarProduto("gloss.jpg", "Corretivo", "Corretivo cremoso para disfarçar olheiras e imperfeições.", 19.99);
  adicionarProduto("batom.jpg", "Batom Matte Vermelho", "Batom de longa duração com acabamento jfhfhf dhfjjfjjfjf jfhhdhfjfj durjrhhrhf matte.", 29.99);
  adicionarProduto("gloss.jpg", "Base Líquida", "Base leve e com alta cobertura.", 49.90);
  adicionarProduto("gloss.jpg", "Corretivo", "Corretivo cremoso para disfarçar olheiras e imperfeições.", 19.99);