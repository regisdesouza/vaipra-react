# Vaipra ✈️

> Você escolhe o clima. A gente escolhe o destino.

## Criador

- Reginaldo de Souza Lima

## Sobre o produto

A **Vaipra** é uma agência fictícia de **viagens-surpresa**. A pessoa escolhe o orçamento e o clima que quer (calor, frio, ameno ou aventura), escolhe um pacote (Fim de Semana, Semana ou Sem Limites) e a Vaipra sorteia o destino. Passagens, hospedagem e roteiro já vêm inclusos, e o destino só é revelado **no aeroporto, na hora do check-in**. Antes disso, a pessoa recebe apenas pistas e uma dica do que levar na mala.

O público são jovens adultos e casais que gostam de aventura e se cansam de passar horas decidindo para onde viajar.

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

Queríamos um produto com uma ação central divertida e fácil de simular sem backend. Viagem-surpresa encaixou bem: o ato de "sortear o destino" é, ao mesmo tempo, o CTA da página e o coração da proposta, e a surpresa dá pretexto para uma identidade visual leve, de aeroporto e cartão de embarque.

Antes de escrever código, definimos a ideia em um arquivo de especificação (`SPEC.md`, que está no repositório), seguindo a proposta da aula de Desenvolvimento Orientado a Especificação. Nele ficaram o produto, as seções da página, a paleta, a arquitetura FSD e as regras de trabalho com a IA, como construir por etapas e explicar as decisões.

Durante a construção, algumas alternativas foram colocadas na mesa e decididas:

- **Vite ou Create React App:** escolhemos o Vite por ser o padrão atual e mais simples de configurar.
- **Context API ou props para o estado do modal:** como não tínhamos certeza de que a Context API já havia sido vista em aula, guardamos o estado no `App.jsx` e passamos por props.
- **Revelar o destino no modal ou só no aeroporto:** a primeira versão revelava o destino no próprio modal. Depois mudamos para o destino secreto (veja "Evolução da solução").

### Pesquisa e referências

- O layout foi inspirado na página inicial do **C6 Bank** (c6bank.com.br). Dela aproveitamos a organização: header limpo com menu centralizado e botão em pílula, título grande no hero, mosaico de cards grandes e arredondados, seções bem espaçosas, FAQ em linhas simples e footer em colunas com títulos em caixa alta.
- A **paleta é própria** (azul-noite, laranja e amarelo) e não foi copiada do C6.
- O cartão de embarque (bordas tracejadas e canhoto com código de barras feito só com CSS) veio da ideia de que o "produto" da Vaipra é o próprio bilhete.
- Para o conteúdo, usamos o padrão de landing pages de produto pedido no enunciado: hero, benefícios, como funciona, prova social, preços, FAQ e CTA final.

### Ferramentas utilizadas

- React 18 com Vite
- CSS Modules
- Feature-Sliced Design
- Git e GitHub
- OpenCode(Neomotron 3.5) e Claude 

### Uso de IA

**Modelo utilizado:** Claude (Anthropic), em um único chat, do início ao fim. Escolhemos trabalhar com um modelo só para que ele mantivesse o contexto da especificação e das decisões anteriores sem precisarmos repetir tudo.

**Para que o Claude foi usado**

1. **Construção por etapas, guiada pela spec:** setup do projeto, componentes compartilhados, entidades com dados mockados, funcionalidades, widgets e página.
2. **Redesign:** depois da primeira versão, pedimos para aproximar o visual do C6 Bank mantendo a nossa paleta.
3. **Revisão do enunciado:** o Claude comparou o texto da atividade com o projeto e listou o que faltava, principalmente o README e a entrega.
4. **README:** estrutura e rascunho da jornada, a partir do que aconteceu no desenvolvimento.

**Sugestões da IA que mantivemos**

- Estrutura FSD com um `index.js` por slice.
- Vite no lugar do Create React App.
- Alias `@` para `src`, evitando imports como `../../../shared/ui`.
- Cartão de embarque desenhado só com CSS, sem imagens.
- Estado do modal no `App.jsx`, passado por props.
- Botão com `href` opcional, para o CTA "Ver como funciona" rolar até uma âncora.

**Sugestões da IA que alteramos ou descartamos**

- **Hooks próprios:** o Claude criou `useDrawDestination` e `useFaqToggle`. Como hooks personalizados não foram vistos em aula, pedimos a troca. Hoje o estado (`useState` e `useEffect`) fica direto nos componentes `DrawModal` e `Faq`, e a função de sortear ficou em um arquivo separado (`pickDestination.js`).
- **`Intl.NumberFormat` nos preços:** o Claude usou essa API para formatar valores. Ela também não foi apresentada em aula, então os preços passaram a ser textos simples nos dados (`'R$ 2.490'`).
- **Revelação do destino no modal:** foi uma decisão do Claude que descartamos, pelo motivo abaixo.

**Quando o resultado não foi satisfatório**

- **Destino aparecendo cedo demais:** a primeira versão do modal tinha um botão "Revelar destino". Percebemos que isso contradizia a ideia do produto, em que o destino só é descoberto no aeroporto. Pedimos a correção e o modal passou a mostrar só as pistas e o cartão com `???`.
- **Estrutura de pastas errada:** na primeira etapa, o Claude criou várias pastas FSD com nomes literais como `{header,hero,...}`, porque o terminal não expandiu as chaves. Ele percebeu o erro na etapa seguinte, assumiu e corrigiu a estrutura.
- **Inconsistência nos números:** o selo "Nota 4,9" do hero não batia com a média das avaliações exibidas, que é cerca de 4,7. O Claude apontou e corrigiu.

### Evolução da solução

- **Fluxo do CTA:** começou com "sortear e revelar o destino no modal". Mudou para "sortear, receber pistas e reservar", com a revelação só no aeroporto. A tela de reserva também passou a reforçar que o destino continua secreto.
- **Visual:** a primeira versão tinha seções compactas, cards pequenos e títulos centralizados. Depois do pedido de aproximar o visual do C6 Bank, ficou com seções espaçosas, títulos grandes à esquerda, mosaico de cards arredondados, passos numerados e FAQ em linhas simples. Também ganhou um painel de destaque no hero e números em destaque.
- **Código:** hooks próprios e `Intl.NumberFormat` foram removidos para respeitar o conteúdo visto em aula.
- **Imagens:** como não tínhamos fotos de destinos, usamos um painel de gradiente com o cartão de embarque no hero e emojis grandes nos cards como representação do produto.

### Resultado final

Estamos satisfeitos com o resultado. A página tem todas as seções pedidas, uma identidade visual consistente, um CTA funcional com um fluxo completo (formulário, carregamento, pistas, reserva simulada) e um código organizado em FSD, com cada parte da interface e dos dados no seu lugar. O que mais gostamos foi manter o destino secreto até o fim, porque a simulação passou a combinar de verdade com a proposta do produto.

**O que faríamos diferente com mais tempo**

- Usar fotos ou ilustrações reais de cada destino, no lugar dos emojis.
- Implementar o *focus trap* no modal, para que o foco do teclado não saia dele enquanto estiver aberto.
- Adicionar um modo claro, com seções de fundo branco alternadas, como no site que nos inspirou.
- Testar a página com leitores de tela.
- Aprender e aplicar os hooks personalizados depois que forem apresentados em aula, para separar melhor a lógica do sorteio da interface.

## Créditos

Projeto acadêmico. Textos, avaliações, preços e números são fictícios. Nenhuma viagem é vendida de verdade.
