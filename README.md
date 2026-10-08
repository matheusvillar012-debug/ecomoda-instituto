# EcoModa — Moda com História

Protótipo acadêmico para o **Estudo de Caso 4: Instituto EcoModa Sustentável**, da disciplina **Design Profissional — Produção de Portfólio & Desenvolvimento Empresarial**.

> A proposta parte do cenário do enunciado: uma ONG e marca autoral que trabalha com upcycling, emprega mulheres em situação de vulnerabilidade social e precisa ampliar as vendas para o público nacional. O estudo de caso também destaca o greenwashing praticado por grandes marcas e apresenta a rastreabilidade do impacto social de cada produto como oportunidade para a EcoModa.

## Problema escolhido

**Dificuldade do consumidor em diferenciar uma moda realmente sustentável de uma comunicação baseada em greenwashing, somada à falta de transparência sobre a origem, produção e impacto de cada peça.**

Esse problema se conecta à dor operacional da EcoModa: o processo de venda por Instagram e mensagens privadas exige respostas manuais, cálculo de frete, envio de dados para PIX e dificulta a expansão nacional.

## Solução

Foi desenvolvido um **site institucional + e-commerce demonstrativo**, com foco em:

- catálogo visual e filtros;
- história individual de cada peça;
- identificação por código de rastreabilidade;
- material, produção e artesã associados ao produto;
- sacola com quantidade e total;
- checkout demonstrativo;
- seção de impacto e artesãs;
- journal/editorial sobre consumo consciente;
- busca de produtos;
- newsletter demonstrativa;
- layout responsivo para celular, tablet e desktop.

## Design

A direção visual usa uma linguagem editorial de moda: verde floresta, creme, tons terrosos, fotografia quente, bastante espaço em branco e títulos serifados.

### Paleta principal

- **Verde floresta:** `#123C2B`
- **Verde secundário:** `#1C4D39`
- **Creme:** `#F6F1E7`
- **Areia:** `#EEE5D7`
- **Texto:** `#18231D`
- **Terracota:** `#BC7B56`

## Imagens

As imagens usadas no site foram **geradas especificamente para este protótipo** e armazenadas localmente na pasta `assets/`. Assim, o repositório não depende de fotos externas com licença que precisaria ser conferida separadamente.

Isso evita inserir conteúdo de terceiros sem conseguir verificar a autorização de uso neste ambiente.

## Mapa do site

```text
Início
 ├── Hero / proposta de valor
 ├── Benefícios
 ├── Coleção
 ├── Nossa diferença
 ├── Nosso impacto
 ├── Rastreabilidade
 ├── Artesãs
 ├── Journal
 └── Newsletter

Interações
 ├── Filtro de produtos
 ├── Busca
 ├── História da peça
 ├── Favoritos demonstrativos
 ├── Sacola
 ├── Alteração de quantidade
 └── Checkout demonstrativo
```

## Wireframe resumido

```text
┌────────────────────────────────────────────────────────────┐
│ LOGO   Início  Loja  História  Impacto  Artesãs  Journal  🛍│
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ROUPAS COM PROPÓSITO                  FOTO EDITORIAL      │
│  Sustentabilidade que veste histórias                     │
│  [Conheça nossa coleção]                                   │
│                                                            │
├────────────────────────────────────────────────────────────┤
│  UPCYCLING | IMPACTO SOCIAL | COMPRA | TRANSPARÊNCIA       │
├────────────────────────────────────────────────────────────┤
│  COLEÇÃO EM DESTAQUE                                       │
│  [produto] [produto] [produto] [produto]                  │
├────────────────────────────────────────────────────────────┤
│  FOTO / NOSSA DIFERENÇA                                    │
├────────────────────────────────────────────────────────────┤
│  NOSSO IMPACTO        2.500+ | 10 | 12 t     FOTO ARTESÃ   │
├────────────────────────────────────────────────────────────┤
│  RASTREABILIDADE      [ ECM-001          🔎 ]              │
│  Cada peça tem uma história                                │
├────────────────────────────────────────────────────────────┤
│  ARTESÃS        [foto] [manifesto] [produção]              │
├────────────────────────────────────────────────────────────┤
│  JOURNAL        [artigo] [artigo] [artigo]                 │
├────────────────────────────────────────────────────────────┤
│  NEWSLETTER     [ e-mail                         ]          │
└────────────────────────────────────────────────────────────┘
```

## Arquitetura técnica

Projeto web estático, adequado a uma atividade acadêmica introdutória:

```text
/ecomoda-instituto
├── index.html
├── style.css
├── script.js
├── README.md
├── LICENSE
├── .gitignore
└── assets/
    ├── README.txt
    ├── hero-model.jpg
    ├── produto-vestido.jpg
    ├── produto-jaqueta.jpg
    ├── produto-turbante.jpg
    ├── produto-bolsa.jpg
    ├── artesa.jpg
    ├── tag-rastreio.jpg
    └── texturas.jpg
```

### Tecnologias

- HTML5
- CSS3
- JavaScript puro (Vanilla JS)
- Google Fonts
- LocalStorage para manter a sacola no navegador

Não existe banco de dados, API de pagamento ou credencial no projeto.

## Como executar

Basta abrir `index.html` no navegador.

Para publicar no GitHub Pages, envie os arquivos para um repositório e habilite o Pages apontando para a branch principal.

## GitHub e segurança

O repositório contém:

- `.gitignore`;
- `LICENSE` MIT;
- `README.md` com briefing, solução, design, wireframe e arquitetura;
- nenhuma senha, token ou chave de API;
- nenhum pagamento real.

### Git sugerido

```bash
git init
git add .
git commit -m "feat: cria site EcoModa"
git branch -M main
git remote add origin SEU_REPOSITORIO
git push -u origin main
```

## Apresentação ao professor

### Dor
A operação de vendas do caso é muito manual e difícil de escalar para o público nacional.

### Problema de mercado
Greenwashing e baixa transparência tornam difícil para o consumidor avaliar se uma peça é realmente sustentável.

### Solução
Um e-commerce institucional que transforma rastreabilidade em parte da experiência de compra.

### Diferencial
O cliente não recebe apenas a descrição da roupa: ele pode consultar material, produção, artesã e impacto por código.

### Resultado esperado
Mais alcance, processo de venda organizado, valorização das artesãs e maior confiança na marca.
