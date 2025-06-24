document.addEventListener('DOMContentLoaded', function () {
  const ativosDisponiveisSelect = document.getElementById('ativosDisponiveis');
  const carteiraInvestimentosSelect = document.getElementById('carteiraInvestimentos');
  const moverParaDireitaBtn = document.getElementById('moverParaDireitaBtn');
  const moverParaEsquerdaBtn = document.getElementById('moverParaEsquerdaBtn');
  // const messageBox = document.getElementById('messageBox'); // Para futuras mensagens de validação

  // Função para mover opções de um select para outro
  function moverOpcoes(origemSelect, destinoSelect) {
    const selectedOptions = Array.from(origemSelect.selectedOptions);

    // a) Validação: Garante que pelo menos um item esteja selecionado
    if (selectedOptions.length === 0) {
      alert('Por favor, selecione pelo menos um item para mover.'); // Alerta simples
      // ou pode usar a messageBox:
      // showMessage('Por favor, selecione pelo menos um item para mover.', 'error');
      return;
    }

    selectedOptions.forEach(option => {
      destinoSelect.appendChild(option); // Move a opção
      option.selected = false; // Desseleciona a opção após mover
    });

    // Atualiza o estado dos botões após a movimentação
    atualizarEstadoBotoes();
  }

  // b) Função para habilitar/desabilitar botões de forma lógica
  function atualizarEstadoBotoes() {
    // Botão para Direita: Habilita se houver itens selecionados em 'ativosDisponiveis'
    moverParaDireitaBtn.disabled = ativosDisponiveisSelect.selectedOptions.length === 0;
    // Botão para Esquerda: Habilita se houver itens selecionados em 'carteiraInvestimentos'
    moverParaEsquerdaBtn.disabled = carteiraInvestimentosSelect.selectedOptions.length === 0;

    // Desabilita "Mover para Direita" se 'ativosDisponiveis' estiver completamente vazio
    if (ativosDisponiveisSelect.options.length === 0) {
      moverParaDireitaBtn.disabled = true;
    }
    // Desabilita "Mover para Esquerda" se 'carteiraInvestimentos' estiver completamente vazio
    if (carteiraInvestimentosSelect.options.length === 0) {
      moverParaEsquerdaBtn.disabled = true;
    }
  }

  // Adiciona o evento de clique para o botão "Mover para Direita" ( > )
  moverParaDireitaBtn.addEventListener('click', function () {
    moverOpcoes(ativosDisponiveisSelect, carteiraInvestimentosSelect);
  });

  // Adiciona o evento de clique para o botão "Mover para Esquerda" ( < )
  moverParaEsquerdaBtn.addEventListener('click', function () {
    moverOpcoes(carteiraInvestimentosSelect, ativosDisponiveisSelect);
  });

  // Adiciona listeners para atualizar o estado dos botões sempre que a seleção mudar
  ativosDisponiveisSelect.addEventListener('change', atualizarEstadoBotoes);
  carteiraInvestimentosSelect.addEventListener('change', atualizarEstadoBotoes);

  // Inicializa o estado dos botões ao carregar a página
  atualizarEstadoBotoes();
});
