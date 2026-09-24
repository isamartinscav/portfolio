# Portfólio — Isabelle Martins Cavalcante (versão modular)

## Estrutura

- `index.html` — apenas a estrutura principal e os pontos onde cada módulo entra.
- `css/style.css` — todo o visual: cores, fontes, layout, responsividade, animações e componentes.
- `js/main.js` — carrega os módulos e controla interações.
- `components/header.html` — menu superior.
- `components/hero.html` — apresentação inicial + dashboard + café + eletrocardiograma.
- `components/marquee.html` — faixa DATA / HEALTH / TECHNOLOGY / AI.
- `components/sobre.html` — seção Sobre mim.
- `components/experiencia.html` — experiência.
- `components/projetos.html` — projetos + filtros.
- `components/habilidades.html` — habilidades.
- `components/contato.html` — contato.
- `components/footer.html` — rodapé.
- `assets/` — espaço para futuras imagens/ícones.

## Como abrir

Como os módulos são carregados com `fetch()`, abra usando o **Live Server do VS Code**, e não diretamente pelo duplo clique no `index.html`.

### No VS Code

1. Abra a pasta `portfolio_Isabelle_Martins_Cavalcante_MODULAR`.
2. Abra `index.html`.
3. Clique com o botão direito.
4. Escolha **Open with Live Server**.

## Onde editar cada coisa

### Nome e apresentação
`components/hero.html`

### Sobre mim
`components/sobre.html`

### Experiência
`components/experiencia.html`

### Projetos
`components/projetos.html`

### Habilidades
`components/habilidades.html`

### Contatos
`components/contato.html`

### Cores, fontes e aparência
`css/style.css`

### Animações e filtros
`js/main.js`

## Importante

Não apague os atributos `id` e `data-category` sem necessidade, porque o JavaScript usa esses atributos para navegação e filtros.
