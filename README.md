# Vaipra ✈️

> Você escolhe o clima. A gente escolhe o destino.

## Criador

- Reginaldo d Souza Lima

## Sobre o produto

A **Vaipra** é uma agência fictícia de **viagens-surpresa**. A pessoa escolhe o orçamento e o clima que quer (calor, frio, ameno ou aventura), escolhe um pacote (Fim de Semana, Semana ou Sem Limites) e a Vaipra sorteia o destino. Passagens, hospedagem e roteiro já vêm inclusos, e o destino só é revelado **no aeroporto, na hora do check-in**. Antes disso, a pessoa recebe apenas pistas e uma dica do que levar na mala.

O público é formado por jovens adultos e casais que gostam de aventura e estão cansados de passar horas decidindo para onde viajar.

A aplicação é 100% client-side, feita com React e CSS Modules. Todos os dados (destinos, planos, avaliações e FAQ) são fictícios e ficam em arquivos de dados.

**CTA principal:** o botão "Sortear meu destino" abre um modal que simula o sorteio: escolha de orçamento e clima, tela de carregamento, pistas do destino secreto e uma reserva simulada.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção
```

## Arquitetura (FSD)

O projeto usa **Feature-Sliced Design**. Cada camada só importa das camadas abaixo dela, e slices da mesma camada não se importam entre si. Cada slice expõe sua API pública no `index.js`.

```
src/
├── app/        # entrada, App.jsx (estado do modal) e estilos globais
├── pages/      # home
├── widgets/    # header, hero, benefits, how-it-works, pricing, testimonials, faq, final-cta, footer
├── features/   # draw-destination (modal do sorteio)
├── entities/   # destination, plan, testimonial, faq-item
└── shared/     # ui: Button, Modal, Container, SectionTitle, BoardingPass, Logo
```

## Jornada de construção

### Ideia inicial

[PREENCHER: como surgiu a ideia da Vaipra e quais outras ideias de produto vocês consideraram e descartaram. Escreva com suas palavras, por exemplo: "queríamos algo divertido e visual, pensamos em X e Y, mas escolhemos viagens-surpresa porque..."]

A parte que facilitou a escolha: viagem-surpresa tem um CTA natural e interativo (o sorteio), o que combina com o requisito de ter pelo menos uma ação funcional ou simulada.

### Pesquisa e referências

- [PREENCHER: outros sites, produtos ou referências que vocês pesquisaram por conta própria.]
- O layout foi inspirado na página inicial do **C6 Bank** (c6bank.com.br): header limpo com menu centralizado e botão em pílula, título grande no hero, mosaico de cards grandes e arredondados, seções bem espaçosas, FAQ em linhas simples e footer em colunas. A **paleta de cores é própria** (azul-noite, laranja e amarelo) e não foi copiada do C6.
- A identidade do cartão de embarque (bordas tracejadas, canhoto com código de barras feito só com CSS) veio da ideia de que o "produto" da Vaipra é o próprio bilhete.

### Ferramentas utilizadas

- React 18 + Vite
- CSS Modules
- Feature-Sliced Design
- Claude (Anthropic), pelo chat do claude.ai
- [PREENCHER: VS Code, OpenCode, Figma, Git/GitHub ou qualquer outra ferramenta que vocês realmente usaram]

### Uso de IA

**Modelo utilizado:** Claude (Anthropic), em um único chat. [PREENCHER: se usaram outros modelos como GPT ou Gemini, descreva para que cada um serviu e por que trocaram.]

**Como a IA foi usada**

1. **Especificação antes do código.** Seguindo a proposta da aula de Desenvolvimento Orientado a Especificação, escrevemos um arquivo de especificação (`SPEC.md`, mantido no repositório) com o produto, as seções, a paleta, a arquitetura FSD e regras como "avançar etapa por etapa". Ele foi dado ao Claude para guiar toda a construção.
2. **Construção por etapas:** setup, componentes compartilhados, entidades com dados mockados, funcionalidades, widgets e página.
3. **Revisão do enunciado:** o Claude comparou o texto da atividade com o projeto e listou o que faltava (principalmente o README e a entrega).

**Sugestões da IA que foram mantidas**

- Estrutura FSD com um `index.js` por slice.
- Usar **Vite** em vez de Create React App.
- Alias `@` para `src`, evitando imports como `../../../shared/ui`.
- Cartão de embarque desenhado só com CSS, sem imagens.
- Estado do modal guardado no `App.jsx` e passado por props, em vez de Context API.

**Sugestões da IA que foram alteradas ou descartadas**

- **Hooks próprios:** o Claude criou `useDrawDestination` e `useFaqToggle`. Como hooks personalizados não foram vistos em aula, pedimos a troca: o estado (`useState` e `useEffect`) agora fica direto nos componentes `DrawModal` e `Faq`. A função de sortear ficou em um arquivo separado (`pickDestination.js`).
- **`Intl.NumberFormat` para os preços:** o Claude usou essa API para formatar valores. Também não foi apresentada em aula, então os preços passaram a ser textos simples nos dados (`'R$ 2.490'`).

**Quando o resultado não foi satisfatório**

- **Estrutura de pastas errada:** na primeira etapa, o Claude gerou várias pastas FSD com nomes literais como `{header,hero,...}`, porque o terminal não expandiu as chaves. O erro só foi percebido na etapa seguinte, quando o Claude conferiu e corrigiu a estrutura.
- **Destino aparecendo cedo demais:** a primeira versão do modal tinha um botão "Revelar destino", o que contradizia a ideia do produto, em que o destino só é revelado no aeroporto. [PREENCHER: confirme que foi você quem percebeu o erro.] Corrigimos: o modal agora mostra só as pistas e o cartão com `???`.
- **Inconsistência nos números:** o selo "Nota 4,9" do hero não batia com a média real das avaliações, que é cerca de 4,7. O Claude apontou e corrigiu.

### Evolução da solução

- **Fluxo do CTA:** começou com "sortear e revelar o destino no modal". Mudou para "sortear, receber pistas e reservar", com a revelação só no aeroporto.
- **Visual:** a primeira versão tinha seções mais compactas, com cards pequenos e títulos centralizados. Depois do pedido de aproximar o visual do C6 Bank, ficou com seções mais espaçosas, títulos grandes à esquerda, mosaico de cards arredondados, passos numerados e FAQ em linhas. A paleta foi mantida.
- **Imagens:** sem fotos de destinos, usamos um painel de gradiente com o cartão de embarque no hero e emojis grandes nos cards. [PREENCHER: se trocarem por imagens reais ou ilustrações, descreva aqui.]
- **Código:** hooks próprios e `Intl.NumberFormat` foram removidos para respeitar o conteúdo visto em aula.

### Resultado final

[PREENCHER: sua avaliação pessoal do resultado.]

O que ficou bom: a identidade visual é consistente, o fluxo do sorteio é completo (formulário, carregamento, pistas, reserva) e o código está organizado em FSD.

**O que faríamos diferente com mais tempo**

- Usar fotos ou ilustrações reais de cada destino, no lugar dos emojis.
- Implementar o *focus trap* no modal, para que o foco do teclado não saia dele.
- Adicionar um modo claro, com seções de fundo branco alternadas.
- Testar a página com leitores de tela.

## Créditos

Projeto acadêmico. Textos, avaliações, preços e números são fictícios. Nenhuma viagem é vendida de verdade.
