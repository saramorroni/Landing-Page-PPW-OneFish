# Documentação da Landing Page - ONE FISH Aquarismo

Projeto acadêmico de landing page para a loja de aquarismo marinho ONE FISH.

## 1. Origem da ideia

Sou estudante da 1ª fase do curso de Análise e Desenvolvimento de Sistemas da Faculdade Municipal de Palhoça. Este projeto nasceu como um exercício prático de programação web, e escolhi desenvolver a landing page da ONE FISH Aquarismo por ser a loja de aquários do meu cônjuge. Assim, pude aplicar o que estou aprendendo em um caso real, criando uma página que apresenta a marca e facilita o contato com os clientes.

## 2. Visão geral

A landing page apresenta a ONE FISH Aquarismo, uma loja especializada em aquarismo marinho. O objetivo do site é apresentar a marca, mostrar alguns dos animais selecionados pela loja, produtos e projetos desenvolvidos, destacar os diferenciais do atendimento e facilitar o contato dos clientes por formulário, WhatsApp e Instagram.

- **Nome do projeto:** ONE FISH - Aquarismo Marinho
- **Slogan:** "Transforme seu aquário em um verdadeiro oceano"
- **Frase da marca:** "Se o mar não está para peixe, cultive um aquário."
- **Idioma:** Português do Brasil (pt-BR)
- **Tipo de página:** página única (one page), com rolagem vertical

## 3. Tecnologias utilizadas

- **HTML5:** estrutura semântica da página (header, section, footer, form).
- **CSS3:** estilização completa dentro da tag style, com variáveis CSS, Flexbox, CSS Grid, transições e media queries.
- **JavaScript (puro):** controle do carrossel automático de imagens.
- **Font Awesome 6.4.0:** ícones dos diferenciais e dos botões flutuantes de WhatsApp e Instagram.
- **Google Fonts:** fontes Montserrat e Playfair Display carregadas no cabeçalho do arquivo.

## 4. Estrutura da página

A página é organizada na seguinte ordem, de cima para baixo:

1. **Barra superior:** logo da loja no canto esquerdo e slogan centralizado.
2. **Carrossel de imagens (hero):** duas imagens de fundo em tela cheia, com troca automática.
3. **Nossa Vida Marinha:** galeria com quatro cartões de corais e peixes.
4. **Conheça a One Fish:** seção institucional com imagem e texto sobre a loja.
5. **Barra de diferenciais:** três destaques do atendimento.
6. **Entre em Contato:** formulário de contato.
7. **Rodapé:** direitos e frase da marca.
8. **Botões flutuantes:** atalhos fixos para Instagram e WhatsApp.

## 5. Identidade visual

A identidade visual segue um tema escuro, que valoriza as cores vibrantes dos peixes e corais, com azul como cor de destaque, remetendo ao oceano.

### 5.1 Cores principais (variáveis CSS)

| Cor | Nome | Código | Uso |
|---|---|---|---|
| ![#050505](https://placehold.co/70x24/050505/050505.png) | Preto principal | `#050505` | Fundo geral da página e do rodapé |
| ![#0d0d0d](https://placehold.co/70x24/0d0d0d/0d0d0d.png) | Preto dos cartões | `#0d0d0d` | Fundo dos cartões, da seção Sobre e do formulário |
| ![#0B2A5A](https://placehold.co/70x24/0B2A5A/0B2A5A.png) | Azul marinho profundo | `#0B2A5A` | Linha de destaque abaixo do título da seção Sobre |
| ![#2563eb](https://placehold.co/70x24/2563eb/2563eb.png) | Azul vibrante | `#2563eb` | Ícones, etiquetas da galeria, botão de enviar, pontos do carrossel e bordas em foco |
| ![#1d4ed8](https://placehold.co/70x24/1d4ed8/1d4ed8.png) | Azul hover | `#1d4ed8` | Cor do botão de enviar ao passar o mouse |
| ![#ffffff](https://placehold.co/70x24/ffffff/cccccc.png?text=%E2%80%8B) | Branco | `#ffffff` | Texto principal e títulos |
| ![#a0a0a0](https://placehold.co/70x24/a0a0a0/a0a0a0.png) | Cinza | `#a0a0a0` | Texto secundário, subtítulos e rodapé |

### 5.2 Cores de apoio

| Cor | Código | Uso |
|---|---|---|
| ![#000000](https://placehold.co/70x24/000000/000000.png) | `#000000` | Fundo da barra superior, da barra de diferenciais e dos campos do formulário |
| ![#e2e8f0](https://placehold.co/70x24/e2e8f0/e2e8f0.png) | `#e2e8f0` | Texto do slogan no cabeçalho |
| ![#d1d5db](https://placehold.co/70x24/d1d5db/d1d5db.png) | `#d1d5db` | Parágrafos da seção Sobre |
| ![#60a5fa](https://placehold.co/70x24/60a5fa/60a5fa.png) | `#60a5fa` | Frase de destaque da seção Sobre |
| ![#e5e7eb](https://placehold.co/70x24/e5e7eb/e5e7eb.png) | `#e5e7eb` | Rótulos (labels) do formulário |
| | `rgba(255, 255, 255, 0.05 a 0.15)` | Bordas sutis de cartões, seções e campos |

### 5.3 Cores dos botões flutuantes

| Cor | Botão | Código |
|---|---|---|
| ![#25d366](https://placehold.co/70x24/25d366/25d366.png) | WhatsApp | `#25d366` (verde) |
| ![#fdf497](https://placehold.co/70x24/fdf497/fdf497.png) | Instagram | `#fdf497` (degradê radial) |
| ![#fd5949](https://placehold.co/70x24/fd5949/fd5949.png) | Instagram | `#fd5949` (degradê radial) |
| ![#d6249f](https://placehold.co/70x24/d6249f/d6249f.png) | Instagram | `#d6249f` (degradê radial) |
| ![#285AEB](https://placehold.co/70x24/285AEB/285AEB.png) | Instagram | `#285AEB` (degradê radial) |

### 5.4 Tipografia

- **Fonte principal:** Georgia, usada tanto nos títulos quanto no texto corrido, por meio das variáveis `font-serif` e `font-sans`.
- **Título do slogan:** itálico, tamanho 1.5rem.
- **Títulos de seção:** tamanho entre 2rem e 2.2rem.
- **Etiquetas da galeria:** maiúsculas, negrito e espaçamento entre letras.
- **Observação:** as fontes Montserrat e Playfair Display estão importadas, mas atualmente não são aplicadas no CSS.

## 6. Organização de arquivos

O projeto é composto por um arquivo HTML principal e uma pasta de imagens:

- **index.html:** estrutura, estilos e script da página.
- **imagens/logo.png:** logo da loja.
- **imagens/aquario.jpeg** e **imagens/fundo.png:** imagens do carrossel.
- **imagens/sobre nós.png:** imagem da seção Sobre.
- **imagens/coral 1.jpeg**, **coral 2.jpeg**, **peixe 1.jpeg** e **peixe 2.jpeg:** imagens da galeria.
