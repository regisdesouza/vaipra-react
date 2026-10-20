# VAIPRA — Especificação completa para desenvolvimento com IA

> Cole este arquivo no início da conversa com a IA (ou coloque na raiz do projeto como `SPEC.md` / `AGENTS.md`) e peça para ela seguir **tudo** que está aqui.

---

## 0. Como você (IA) deve trabalhar

Você vai me ajudar a desenvolver uma landing page para uma atividade acadêmica avaliada. Siga estas regras:

1. **Leia este documento inteiro antes de escrever código.**
2. **Trabalhe em etapas** (ver seção 12). Ao final de cada etapa, pare e me diga o que foi feito. Não gere o projeto inteiro de uma vez.
3. **Respeite a arquitetura FSD** e a regra de importação entre camadas (seção 5). Se algo não couber, me pergunte em vez de quebrar a regra.
4. **Use apenas o básico de React**: componentes de função, props, `useState`, `useEffect` (só se necessário), renderização condicional e listas com `.map()`. Não use bibliotecas, padrões ou recursos avançados que eu possa não ter visto em aula.
5. **Explique decisões importantes em 1–3 linhas** (por que fez assim, qual alternativa existia). Preciso dessas explicações para o README da jornada de construção.
6. **Se tiver dúvida ou faltar informação, pergunte** antes de assumir.
7. **Não invente requisitos novos** nem adicione funcionalidades fora deste documento sem eu pedir.
8. Código limpo, comentários curtos apenas onde ajudam, nomes de arquivos e pastas em inglês (kebab-case para pastas, PascalCase para componentes), textos da interface em **português do Brasil**.

---

## 1. Contexto da atividade

**Atividade 01 — Landing Page de Produto** (vale nota, individual ou em dupla).

Devo inventar um produto fictício e criar, em **React**, um protótipo navegável de landing page para apresentar e vender essa ideia.

### Restrições obrigatórias
- Aplicação **100% client-side**. Sem backend, banco de dados ou APIs. Todos os dados são **mockados**.
- **React + CSS Modules** (CSS modularizado, arquivos `*.module.css`).
- Arquitetura **FSD (Feature-Sliced Design)**.
- **Não** usar padrões, bibliotecas, técnicas ou recursos que não foram apresentados em aula.
- Repositório **público no GitHub**, entregue no Moodle pelo link.
- O repositório precisa ter um `README.md` com a **jornada de construção** (decisões, tentativas, erros, uso de IA, mudanças de rota).
- Tema adequado ao ambiente acadêmico: nada de conteúdo adulto, violência, drogas, política, discriminação ou atividades ilegais.
- Não há layout de referência: as decisões visuais são minhas.

### Conteúdo obrigatório da página
1. Identidade visual
2. Nome e proposta do produto
3. Hero section
4. Benefícios e diferenciais
5. Imagens ou representações do produto
6. Explicação de como funciona
7. Prova social (avaliações fictícias)
8. Oferta ou preço
9. FAQ
10. Pelo menos um CTA funcional ou simulado

---

## 2. O produto

**Nome:** Vaipra
**Slogan:** "Você escolhe o clima. A gente escolhe o destino." *(pode ser trocado)*

**Ideia:** empresa fictícia de **viagens-surpresa**. O cliente escolhe o **orçamento** e o **clima**, e o destino só é revelado no aeroporto. Sem pesquisa, sem indecisão, com roteiro pronto.

**Público:** jovens e adultos que gostam de novidade, querem sair da rotina e topam um pouco de imprevisto.

**Tom de voz:** divertido, leve, aventureiro, com humor. Frases curtas. Pode usar emojis com moderação (✈️ 🧳 🌴 ❄️).

**CTA principal:** **"Sortear meu destino"**, que abre um modal com o sorteio simulado (seção 8).

---

## 3. Identidade visual

### Cores (definir como variáveis CSS em `app/styles/global.css`)
```css
:root {
  --color-bg: #0B1B3A;          /* azul-noite: fundo principal */
  --color-bg-alt: #102650;      /* azul um pouco mais claro: seções alternadas */
  --color-primary: #FF7A3D;     /* laranja pôr do sol: CTAs e destaques */
  --color-primary-hover: #E8652B;
  --color-accent: #FFD166;      /* amarelo areia: selos, estrelas, detalhes */
  --color-text: #F6F8FC;        /* branco-gelo: texto principal */
  --color-text-muted: #B8C2D9;  /* texto secundário */
  --color-card: #15305F;        /* fundo de cards */
  --color-border: rgba(246, 248, 252, 0.12);
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --shadow-card: 0 8px 24px rgba(0, 0, 0, 0.25);
}
```

### Tipografia
- Títulos: **Poppins** (700) ou **Baloo 2**.
- Texto: **Inter** (400/500/600).
- Carregar pelo Google Fonts no `index.html`, com fallback `system-ui, sans-serif`.
- Escala sugerida: h1 `clamp(2.2rem, 6vw, 4rem)`, h2 `clamp(1.6rem, 4vw, 2.5rem)`, texto `1rem`.

### Estilo
- Tema escuro, com laranja como cor de ação.
- Cantos arredondados, cards com sombra suave.
- Elementos de viagem como decoração: bússola, mapa, avião, mala, cartão de embarque (*boarding pass*).
- Animações simples apenas com CSS (`transition`, `hover`, `@keyframes`). Sem bibliotecas de animação.

### Imagens e representações do produto
**Não usar imagens externas nem de terceiros.** Representar o produto com:
- **SVG inline** (bússola, avião, mapa estilizado) e **emojis**;
- **Cartão de embarque** feito em HTML/CSS como principal "imagem do produto" (origem: "Sua casa", destino: "???", portão e assento fictícios);
- Gradientes e formas em CSS.

---

## 4. Estrutura de pastas (FSD)

```
vaipra/
├── index.html
├── package.json
├── README.md
├── SPEC.md
└── src/
    ├── app/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── styles/
    │       └── global.css
    │
    ├── pages/
    │   └── home/
    │       ├── ui/
    │       │   ├── HomePage.jsx
    │       │   └── HomePage.module.css
    │       └── index.js
    │
    ├── widgets/
    │   ├── header/
    │   ├── hero/
    │   ├── benefits/
    │   ├── how-it-works/
    │   ├── pricing/
    │   ├── testimonials/
    │   ├── faq/
    │   ├── final-cta/
    │   └── footer/
    │   # cada widget: ui/Nome.jsx + ui/Nome.module.css + index.js
    │
    ├── features/
    │   ├── draw-destination/
    │   │   ├── model/useDrawDestination.js
    │   │   ├── ui/DrawModal.jsx
    │   │   ├── ui/DrawModal.module.css
    │   │   └── index.js
    │   ├── toggle-faq/
    │   │   ├── model/useFaqToggle.js
    │   │   └── index.js
    │   └── open-draw-modal/        # estado do modal compartilhado entre os CTAs
    │       ├── model/ModalContext.jsx
    │       └── index.js
    │
    ├── entities/
    │   ├── destination/
    │   │   ├── model/destinations.js
    │   │   └── index.js
    │   ├── plan/
    │   │   ├── model/plans.js
    │   │   ├── ui/PlanCard.jsx + PlanCard.module.css
    │   │   └── index.js
    │   ├── testimonial/
    │   │   ├── model/testimonials.js
    │   │   ├── ui/TestimonialCard.jsx + TestimonialCard.module.css
    │   │   └── index.js
    │   └── faq-item/
    │       ├── model/faqItems.js
    │       └── index.js
    │
    └── shared/
        ├── ui/
        │   ├── Button/
        │   ├── Modal/
        │   ├── SectionTitle/
        │   ├── Container/
        │   └── BoardingPass/
        ├── assets/                # SVGs (logo, bússola, avião)
        └── lib/                   # funções utilitárias (ex.: formatPrice)
```

> **Sobre o estado do modal:** como vários CTAs (header, hero, pricing, final-cta) precisam abrir o mesmo modal, o estado `isOpen` fica em `features/open-draw-modal` usando **Context API** simples (`createContext` + `useContext`). Se Context ainda não foi visto em aula, **avise-me** e use a alternativa: elevar o estado para `app/App.jsx` e passar `onOpenModal` por props até os widgets.

---

## 5. Regras do FSD (obrigatório)

1. **Camadas, de cima para baixo:** `app` → `pages` → `widgets` → `features` → `entities` → `shared`.
2. Uma camada **só importa de camadas abaixo** dela. Exemplos:
   - `widgets` pode importar `features`, `entities` e `shared`.
   - `features` pode importar `entities` e `shared`, **nunca** `widgets`.
   - `entities` pode importar apenas `shared`.
   - `shared` não importa de nenhuma outra camada.
3. **Slices da mesma camada não se importam entre si** (um widget não importa outro widget; uma feature não importa outra feature).
4. Cada slice expõe sua **API pública** pelo `index.js`. Outras camadas importam **só pelo `index.js`**, nunca por caminhos internos.
5. Estrutura interna de cada slice: `ui/` (componentes e CSS Modules), `model/` (estado, hooks, dados), e opcionalmente `lib/`.
6. `app` e `shared` são divididos em *segments* (sem slices).
7. Cada componente tem seu próprio **`.module.css`** ao lado. Estilos globais ficam só em `app/styles/global.css` (variáveis, reset, fontes).

---

## 6. Seções da página (ordem e conteúdo)

A página é uma única rota (`pages/home`) que monta os widgets nesta ordem. O header tem links de âncora para as seções (`#como-funciona`, `#planos`, `#avaliacoes`, `#faq`) com rolagem suave (`scroll-behavior: smooth`).

### 6.1 Header (`widgets/header`)
- Logo "Vaipra" (SVG de avião + texto), links de navegação e botão **"Sortear meu destino"**.
- Fixo no topo (`position: sticky`).
- Em telas pequenas, menu simplificado (pode esconder os links e manter só logo + botão).

### 6.2 Hero (`widgets/hero`)
- **Título (h1):** "Você escolhe o clima. A gente escolhe o destino."
- **Subtítulo:** "Defina seu orçamento, diga o clima que você quer e descubra para onde vai só no aeroporto. Roteiro, hospedagem e passagens já inclusos."
- **CTA primário:** "Sortear meu destino" (abre o modal).
- **CTA secundário:** "Ver como funciona" (rola até `#como-funciona`).
- **Imagem do produto:** componente `BoardingPass` com destino "???".
- Selos de confiança: "+12 mil viajantes surpreendidos", "Nota 4,9", "Cancelamento grátis em 48h" *(dados fictícios)*.

### 6.3 Benefícios e diferenciais (`widgets/benefits`)
Grid de 4 a 6 cards com ícone/emoji, título e descrição curta:
1. 🎲 **Surpresa de verdade:** nem você sabe para onde vai até o embarque.
2. 🧳 **Tudo pronto:** passagem, hospedagem e roteiro já incluídos.
3. 💸 **Cabe no seu bolso:** você define o orçamento, a gente respeita.
4. 🌤️ **Clima sob medida:** calor, frio, ameno ou aventura: você escolhe.
5. 🛡️ **Plano B garantido:** se o destino não rolar, trocamos sem custo.
6. 📸 **Memórias que contam história:** viagens que viram a melhor história do ano.

### 6.4 Como funciona (`widgets/how-it-works`) — id `#como-funciona`
Passo a passo numerado em 4 etapas:
1. **Escolha o orçamento e o clima.**
2. **Escolha o seu pacote** (fim de semana, semana ou sem limites).
3. **Receba as pistas:** dicas do que levar na mala, sem entregar o destino.
4. **Descubra no aeroporto:** o destino é revelado no check-in.

### 6.5 Planos e preços (`widgets/pricing`) — id `#planos`
Três `PlanCard`, o do meio destacado como "Mais popular" (dados em `entities/plan/model/plans.js`). Cada card tem nome, preço, lista de itens inclusos e botão que abre o modal.

### 6.6 Avaliações (`widgets/testimonials`) — id `#avaliacoes`
Grid de 3 a 6 `TestimonialCard` com avatar (iniciais ou emoji), nome, cidade, nota (estrelas ⭐) e texto. Dados em `entities/testimonial/model/testimonials.js`. Opcional: média geral "4,9 de 5".

### 6.7 FAQ (`widgets/faq`) — id `#faq`
Lista de perguntas em formato sanfona (accordion): clicar abre/fecha a resposta. Apenas **uma aberta por vez**. Lógica em `features/toggle-faq`. Dados em `entities/faq-item`. Botão da pergunta com `aria-expanded`.

### 6.8 CTA final (`widgets/final-cta`)
Bloco de destaque: "Pronto para descobrir para onde vai?" + botão **"Sortear meu destino"**.

### 6.9 Footer (`widgets/footer`)
Logo, slogan, links de âncora e aviso: "Projeto acadêmico fictício. Nenhuma viagem é vendida de verdade."

---

## 7. Dados mockados

### 7.1 Planos (`plans.js`)
```js
export const plans = [
  {
    id: 'weekend',
    name: 'Fim de Semana',
    price: 899,
    period: 'por pessoa',
    highlight: false,
    features: [
      '2 noites de hospedagem',
      'Passagens de ida e volta',
      'Destino nacional',
      'Roteiro básico com 3 dicas',
    ],
  },
  {
    id: 'week',
    name: 'Semana',
    price: 2490,
    period: 'por pessoa',
    highlight: true, // "Mais popular"
    features: [
      '6 noites de hospedagem',
      'Passagens de ida e volta',
      'Nacional ou internacional próximo',
      'Roteiro completo dia a dia',
      'Plano B grátis',
    ],
  },
  {
    id: 'unlimited',
    name: 'Sem Limites',
    price: 5990,
    period: 'por pessoa',
    highlight: false,
    features: [
      '10 noites de hospedagem',
      'Passagens de ida e volta',
      'Qualquer lugar do mundo',
      'Roteiro premium + passeios inclusos',
      'Plano B grátis',
      'Atendimento prioritário',
    ],
  },
];
```

### 7.2 Destinos (`destinations.js`)
Cada destino tem: `id`, `name`, `country`, `emoji`, `climate` (`'calor' | 'frio' | 'ameno' | 'aventura'`), `budget` (`'economico' | 'medio' | 'sem-limites'`), `teaser` (dica misteriosa) e `packTip` (o que levar na mala). Criar **no mínimo 12 destinos**, 3 por clima, distribuídos entre os 3 níveis de orçamento. Exemplo:

```js
export const destinations = [
  {
    id: 'jericoacoara',
    name: 'Jericoacoara',
    country: 'Brasil',
    emoji: '🏖️',
    climate: 'calor',
    budget: 'economico',
    teaser: 'Dunas, vento e um pôr do sol que para a cidade inteira.',
    packTip: 'Protetor solar, chinelo e disposição para andar na areia.',
  },
  {
    id: 'gramado',
    name: 'Gramado',
    country: 'Brasil',
    emoji: '❄️',
    climate: 'frio',
    budget: 'economico',
    teaser: 'Chocolate quente, lareira e casinhas de contos de fadas.',
    packTip: 'Casaco grosso, gorro e luvas.',
  },
  // ... completar até 12 destinos ou mais (ex.: Lisboa, Santiago, Bariloche,
  //     Cancún, Reykjavik, Machu Picchu, Fernando de Noronha, Curitiba etc.)
];
```

### 7.3 Opções do formulário de sorteio
```js
export const budgetOptions = [
  { value: 'economico', label: 'Econômico', hint: 'até R$ 1.500' },
  { value: 'medio', label: 'Médio', hint: 'R$ 1.500 a R$ 3.500' },
  { value: 'sem-limites', label: 'Sem limites', hint: 'acima de R$ 3.500' },
];

export const climateOptions = [
  { value: 'calor', label: 'Calor', emoji: '🌴' },
  { value: 'frio', label: 'Frio', emoji: '❄️' },
  { value: 'ameno', label: 'Ameno', emoji: '🌤️' },
  { value: 'aventura', label: 'Aventura', emoji: '⛰️' },
];
```

### 7.4 Avaliações (`testimonials.js`)
Mínimo de 6, com tom bem-humorado, por exemplo:
- **Marina S., São Paulo — ⭐⭐⭐⭐⭐:** "Pedi calor e fui parar numa ilha deserta. Melhor surpresa da minha vida."
- **Carlos E., Belo Horizonte — ⭐⭐⭐⭐⭐:** "Fui para o Sul achando que era praia, era neve. Nota 10."
- **Juliana P., Recife — ⭐⭐⭐⭐:** "Minha mãe quase chorou no aeroporto quando viu o destino."
- **Rafael T., Curitiba — ⭐⭐⭐⭐⭐:** "A dica de mala foi tão boa que acertei tudo sem saber para onde ia."
- **Bianca M., Porto Alegre — ⭐⭐⭐⭐⭐:** "Fui com meu namorado e foi o fim de semana mais divertido do ano."
- **Diego L., Salvador — ⭐⭐⭐⭐:** "Quase estraguei a surpresa olhando o portão. Valeu cada segundo."

Campos: `id`, `name`, `city`, `rating`, `text`, `avatar` (emoji ou iniciais).

### 7.5 FAQ (`faqItems.js`)
Mínimo de 6 perguntas:
1. **Como funciona a surpresa?** Você escolhe orçamento e clima. Nós escolhemos o destino e só revelamos no aeroporto.
2. **Posso vetar lugares onde já estive?** Sim, na hora da compra você marca até 3 destinos que não quer.
3. **E se eu não gostar do destino?** O Plano B permite trocar sem custo adicional (nos pacotes Semana e Sem Limites).
4. **Passagens e hospedagem estão inclusas?** Sim, todos os pacotes incluem passagens e hospedagem. O que muda é a duração e o tipo de destino.
5. **Preciso de passaporte?** Só se o destino for internacional. Avisamos com antecedência.
6. **Posso viajar em grupo?** Pode, cada pessoa escolhe o pacote e todos recebem o mesmo destino.
7. **Posso cancelar?** Cancelamento grátis em até 48 horas após a compra.

*(Conteúdo fictício. Pode ajustar o texto mantendo o tom.)*

---

## 8. CTA principal — "Sortear meu destino"

### 8.1 Onde aparece
Header, Hero, botões dos planos e CTA final. Todos abrem o **mesmo modal** (`DrawModal`).

### 8.2 Fluxo do modal (máquina de estados simples)
O hook `useDrawDestination` controla o estado `step`:

| step | O que aparece |
|---|---|
| `form` | Escolha de **orçamento** (3 opções) e **clima** (4 opções). Botão "Sortear" fica desabilitado até os dois estarem escolhidos. |
| `loading` | Mensagem animada por ~2,5 s: "Preparando as malas...", "Consultando o mapa...", "Chamando o piloto..." (troca a cada ~800 ms). |
| `result` | **Cartão de embarque** com destino **oculto** ("??????"), a `teaser` e a `packTip`. Botão **"Revelar destino"** mostra o nome, país e emoji. |
| `reserved` | Após clicar em **"Quero essa viagem"** (disponível depois de revelar): mensagem de sucesso simulado ("Reserva simulada! Em um projeto real, você receberia um e-mail."). |

### 8.3 Regras do sorteio
- Filtrar `destinations` por `climate` **e** `budget` escolhidos.
- Se houver mais de um, sortear com `Math.random()`.
- Se não houver nenhum, sortear entre os do mesmo `climate` (ignorando o orçamento).
- Botões extras: **"Sortear de novo"** (volta ao sorteio com as mesmas escolhas) e **"Mudar escolhas"** (volta ao `form`).
- Fechar o modal: botão X, clique no fundo escuro e tecla **Esc**. Ao fechar, resetar o estado.

### 8.4 Requisitos do `Modal` (shared)
- Renderiza por cima da página com fundo escurecido.
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.
- Travar a rolagem da página enquanto estiver aberto.
- Receber `isOpen`, `onClose`, `title` e `children` por props.

---

## 9. Componentes compartilhados (`shared/ui`)

| Componente | Props principais | Observação |
|---|---|---|
| `Button` | `variant` (`primary` / `secondary` / `ghost`), `size`, `onClick`, `disabled`, `children` | Estilos de hover e foco visíveis |
| `Modal` | `isOpen`, `onClose`, `title`, `children` | Ver seção 8.4 |
| `SectionTitle` | `eyebrow`, `title`, `subtitle` | Padroniza o título das seções |
| `Container` | `children` | Largura máxima de 1100px, centralizado, com padding lateral |
| `BoardingPass` | `destination` (texto), `revealed` (boolean) | Cartão de embarque em CSS: origem, destino, portão, assento, código de barras desenhado com CSS |

---

## 10. Requisitos de qualidade

### Responsividade
- Mobile first. Breakpoints sugeridos: `640px`, `900px`, `1200px`.
- Grids que viram coluna única no celular.
- Testar em 360px, 768px e 1280px.

### Acessibilidade (o básico)
- HTML semântico: `header`, `main`, `section`, `footer`, `nav`.
- Um único `h1`; `h2` para cada seção.
- Botões com texto claro ou `aria-label`.
- Foco visível em links e botões.
- Contraste adequado entre texto e fundo.
- `alt` ou `aria-hidden="true"` nos SVGs decorativos.
- Respeitar `prefers-reduced-motion` nas animações.

### Código
- Sem `console.log` esquecido e sem código comentado.
- Sem CSS inline, exceto casos muito pontuais.
- Sem estilos globais além de `global.css`.
- Listas renderizadas com `key` única.
- Sem avisos ou erros no console do navegador.

---

## 11. Checklist de aceitação

### Atividade
- [ ] React + CSS Modules
- [ ] Arquitetura FSD respeitando a regra de importação
- [ ] 100% client-side, dados mockados
- [ ] Identidade visual definida (cores, tipografia, estilo)
- [ ] Nome e proposta do produto claros
- [ ] Hero section
- [ ] Benefícios e diferenciais
- [ ] Imagem/representação do produto (cartão de embarque)
- [ ] Como funciona
- [ ] Prova social (avaliações)
- [ ] Oferta/preço (3 planos)
- [ ] FAQ funcional
- [ ] CTA funcional (modal de sorteio)
- [ ] Sem conteúdo inadequado
- [ ] Repositório público no GitHub
- [ ] README com a jornada de construção preenchido
- [ ] Link enviado no Moodle (e pela dupla, se houver)

### Funcional
- [ ] Todos os botões "Sortear meu destino" abrem o modal
- [ ] O sorteio só habilita com orçamento e clima escolhidos
- [ ] O sorteio filtra corretamente e tem *fallback*
- [ ] O destino só aparece ao clicar em "Revelar"
- [ ] Modal fecha com X, clique no fundo e Esc
- [ ] FAQ abre e fecha, uma por vez
- [ ] Links do header rolam até as seções
- [ ] Layout funciona no celular e no desktop

---

## 12. Ordem de desenvolvimento (etapas)

Faça uma etapa por vez e pare para eu validar:

1. **Setup:** criar o projeto React, estrutura de pastas FSD vazia, `global.css` com variáveis e fontes.
2. **Shared UI:** `Container`, `Button`, `SectionTitle`, `Modal`, `BoardingPass` (com seus `.module.css`).
3. **Entities:** dados mockados (`plans`, `destinations`, `testimonials`, `faqItems`) e os cards (`PlanCard`, `TestimonialCard`).
4. **Feature `draw-destination`:** hook `useDrawDestination` e `DrawModal`, mais o estado de abrir/fechar o modal.
5. **Widgets estáticos:** `header`, `hero`, `benefits`, `how-it-works`, `footer`.
6. **Widgets com dados:** `pricing`, `testimonials`, `faq` (com `toggle-faq`), `final-cta`.
7. **Page e App:** montar `HomePage` e ligar tudo no `App.jsx`.
8. **Revisão:** responsividade, acessibilidade, checklist da seção 11 e correção de erros.
9. **README:** me ajudar a revisar o `README.md` com base nas decisões tomadas.

---

## 13. O que NÃO fazer

- Não usar Tailwind, Bootstrap, styled-components ou outras bibliotecas de estilo.
- Não usar bibliotecas de UI, de animação ou de ícones (usar SVG e emoji).
- Não usar React Router (é uma página única, com âncoras).
- Não usar Redux, Zustand ou outras bibliotecas de estado.
- Não usar TypeScript (a menos que eu peça).
- Não fazer chamadas de rede (`fetch`, `axios`) nem usar `localStorage`.
- Não usar imagens, logos ou marcas de terceiros.
- Não importar entre slices da mesma camada nem de camadas superiores.
- Não colocar tudo em um único arquivo ou pasta.

---

## 14. Prompt inicial sugerido

Depois de colar este documento, comece com:

> "Li a especificação do Vaipra. Vamos começar pela **Etapa 1 (Setup)**. Me explique em poucas linhas a estrutura que você vai criar, gere os arquivos e me diga o que rodar no terminal. Depois pare e aguarde minha confirmação para seguir para a Etapa 2."

Ao final de cada etapa, peça:

> "Resuma em 3 linhas o que foi feito e quais decisões você tomou, para eu registrar no README."
