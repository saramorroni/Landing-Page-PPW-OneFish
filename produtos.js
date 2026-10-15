/* Textos dos cartões: edite aqui para atualizar os detalhes. */
(() => {
  'use strict';
  const products = {
    corais: {
      category: 'Corais', title: 'Coral Torch Gold Tip', image: 'imagens/coral 2.jpeg',
      description: 'Cor, textura e movimento em um dos destaques do seu aquário marinho. Conheça o exemplar disponível e converse com a One Fish para avaliar como ele se encaixa no seu projeto.',
      points: ['Observe com a equipe a coloração, o tamanho e as características do exemplar disponível.', 'Considere o espaço do aquário e a compatibilidade com os animais que você já possui.', 'Peça orientação sobre posicionamento e cuidados antes da aquisição.'],
      note: 'A imagem é uma referência de apresentação. Confirme a identificação, as características do exemplar, o preço e a disponibilidade com a loja.'
    },
    peixes: {
      category: 'Peixes marinhos', title: 'Paracanthurus hepatus (Dory)', image: 'imagens/peixe 1.jpeg',
      description: 'Conhecido pelo azul intenso e pelo contraste com a cauda amarela, o hepatus é uma presença marcante no aquário marinho. A escolha deve considerar as necessidades da espécie e a estrutura do seu aquário.',
      points: ['Informe à equipe as dimensões do seu aquário e os animais que já vivem nele.', 'Converse sobre espaço, alimentação e convivência antes de decidir.', 'Consulte o tamanho do exemplar disponível e as orientações para sua chegada.'],
      note: 'A aparência não é o único critério de escolha. Confirme a adequação da espécie ao seu aquário, além do preço e da disponibilidade.'
    },
    racoes: {
      category: 'Rações', title: 'OceanTech Color Flakes', image: 'imagens/racao.png',
      description: 'Uma opção em flocos para compor a alimentação dos seus peixes. Na hora de escolher, confira se a formulação é indicada para as espécies que você mantém e para a rotina do seu aquário.',
      points: ['Confira no rótulo a indicação de uso, a composição e as instruções do fabricante.', 'Consulte as apresentações disponíveis e a validade do produto.', 'Ajuste a quantidade oferecida conforme a orientação do rótulo e as necessidades dos animais.'],
      note: 'Confirme a embalagem e as especificações com a loja. A apresentação da imagem pode diferir do item em estoque.'
    },
    projetos: {
      category: 'Projetos', title: 'Aquários sob medida', image: 'imagens/projeto.png',
      description: 'Um aquário pensado para o seu espaço e para a experiência que você deseja criar. Converse com a One Fish sobre suas ideias para definir as possibilidades do projeto e solicitar um orçamento.',
      points: ['Compartilhe as medidas do local e referências do estilo que você procura.', 'Converse sobre equipamentos, acesso para manutenção e organização do espaço.', 'Combine o escopo, os materiais, os prazos e as condições antes de contratar.'],
      note: 'Cada projeto é avaliado individualmente. A imagem é ilustrativa; itens incluídos, instalação, entrega e valores dependem do orçamento aprovado.'
    }
  };
  const dialog = document.getElementById('product-dialog');
  let opener;
  const fill = (id, text) => { document.getElementById(id).textContent = text; };
  document.querySelectorAll('[data-product]').forEach(button => {
    button.addEventListener('click', () => {
      const p = products[button.dataset.product];
      if (!p) return;
      opener = button;
      fill('product-title', p.title); fill('product-description', p.description);
      fill('product-category', p.category); fill('product-note', p.note);
      const image = document.getElementById('product-image');
      image.src = p.image; image.alt = p.title;
      const list = document.getElementById('product-points');
      list.replaceChildren(...p.points.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
      document.getElementById('product-contact').href = 'https://wa.me/5511979636052?text=' + encodeURIComponent('Olá, One Fish! Gostaria de mais informações sobre ' + p.title + '.');
      dialog.showModal(); dialog.scrollTop = 0;
      document.body.classList.add('dialog-open');
      document.getElementById('close-product').focus();
    });
  });
  document.getElementById('close-product').addEventListener('click', () => dialog.close());
  let backdropDown = false;
  const outside = event => { const r = dialog.getBoundingClientRect(); return event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom; };
  dialog.addEventListener('pointerdown', event => { backdropDown = event.target === dialog && outside(event); });
  dialog.addEventListener('click', event => { if (backdropDown && event.target === dialog && outside(event)) dialog.close(); backdropDown = false; });
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); if (opener) opener.focus(); });
  document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `Olá, One Fish!\nNome: ${data.get('nome')}\nE-mail: ${data.get('email')}\nTelefone: ${data.get('telefone')}\n\n${data.get('mensagem')}`;
    window.open('https://wa.me/5511979636052?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer');
  });
})();
