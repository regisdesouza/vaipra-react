# Vaipra ✈️

Landing page de uma agência fictícia de **viagens-surpresa**: você escolhe o orçamento e o clima, e o Vaipra sorteia o destino. Projeto acadêmico, nenhuma viagem é vendida de verdade.

## Tecnologias
React 18 + Vite, CSS Modules e Feature-Sliced Design (FSD). Sem bibliotecas externas além do React.

## Como rodar
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção
```

## Estrutura (FSD)
```
src/
├── app/        # entrada, App.jsx (estado do modal) e estilos globais
├── pages/      # home
├── widgets/    # header, hero, benefits, how-it-works, pricing, testimonials, faq, final-cta, footer
├── features/   # draw-destination (modal do sorteio), toggle-faq
├── entities/   # destination, plan, testimonial, faq-item
└── shared/     # ui (Button, Modal, Container, SectionTitle, BoardingPass, Logo) e lib (formatPrice)
```
Regra de dependência: cada camada só importa das camadas abaixo dela, e slices da mesma camada não se importam entre si. Cada slice expõe sua API pública no `index.js`.

## Jornada de construção
- **Setup:** Vite + alias `@` para `src`, evitando imports relativos longos.
- **Shared UI:** componentes genéricos criados primeiro, para os widgets só montarem.
- **Dados em `entities`:** destinos, planos, avaliações e FAQ ficam em arquivos de dados, separados da interface.
- **Sorteio:** a lógica (etapas form → loading → result → reserved, filtro por clima e orçamento) vive num hook, `useDrawDestination`. O destino sorteado nunca aparece na tela: o modal mostra só pistas, porque a revelação acontece no aeroporto (fora da simulação). O `DrawModal` só exibe o que o hook entrega.
- **Estado do modal:** fica no `App.jsx` e desce por props até os botões de CTA (sem Context API).
- **Acessibilidade:** `aria-expanded` no FAQ, `role="dialog"` no modal, foco visível, `prefers-reduced-motion`.
- **Limitação conhecida:** o modal não prende o foco do teclado dentro dele (focus trap).

## Créditos
Projeto acadêmico. Textos, avaliações e preços são fictícios.
# vaipra-react
