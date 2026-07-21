# Desafio Tecnico HCXpert 2026 - QA/SDET Senior

Este repositorio contem o framework de automacao desenvolvido para o site [Automation Exercise](https://automationexercise.com) e validacoes de API (Trello e Automation Exercise), seguindo rigorosamente os padroes de Engenharia de Qualidade Senior.

## 1. Parecer Critico de Testabilidade

O ecossistema do **Automation Exercise** apresenta uma testabilidade mista. Do ponto de vista de automacao Web, o site e amigavel devido ao uso extensivo de atributos `data-qa`, o que garante seletores resilientes a mudancas no layout. Contudo, o principal desafio de negocio e a **gestao de estado da massa de dados**: o sistema impede a duplicidade de e-mails, exigindo que a automacao utilize estrategias de limpeza ou geracao dinamica de dados (resolvido aqui via fixtures e isolamento de cenarios).

Quanto as APIs, observou-se que o site nao segue estritamente o padrao RESTful para codigos de status em erros de requisicao (retornando `200 OK` com mensagens de erro no body), o que exige assercoes de negocio mais profundas do que a simples validacao de `status code`.

## 2. Matriz de Auditoria de Requisitos

| Requisito | Status | Comentario / Evidencia |
| :--- | :---: | :--- |
| **Framework Cypress (JS/TS)** | **Atendido** | Desenvolvido em JavaScript com Cypress v15 e esbuild. |
| **Gherkin Declarativo** | **Atendido** | Cenarios focados em comportamento, evitando termos tecnicos. |
| **Padrao POM (Strict)** | **Atendido** | Isolamento total de elementos em `cypress/support/page_objects/`. |
| **Estrutura de Pastas** | **Atendido** | Arvore de diretorios 100% conforme edital. |
| **Cenarios Positivos/Negativos** | **Atendido** | Cobertura completa de Login, Busca e APIs. |
| **Proibicao de describe/it** | **Atendido** | Integracao via Cucumber sem o uso de Mocha/xUnit nos steps. |
| **Uso de Fixtures** | **Atendido** | Massa de dados centralizada em `cypress/fixtures/users.json`. |
| **Teste API Trello (GET)** | **Atendido** | Extracao do campo `data.list.name` com validacao de status. |
| **Teste API AE (POST)** | **Atendido** | Validacao de regra de negocio (parametros ausentes). |
| **Scripts de Apoio (/scripts)** | **Atendido** | Scripts de evidencias e relatorios operacionais. |

## 3. Arquitetura do Projeto

```text
├── cypress/
│   ├── e2e/
│   │   ├── features/          # Especificacoes BDD (.feature)
│   │   └── step_definitions/  # Implementacao dos passos
│   ├── fixtures/              # Massa de dados (JSON)
│   ├── support/
│   │   └── page_objects/      # Mapeamento de elementos e acoes (POM)
│   └── evidencias/            # Local para logs e screenshots
├── scripts/                   # Scripts utilitarios (PowerShell/Node)
├── cypress.config.js          # Configuracao do Cypress e Cucumber
└── package.json               # Dependencias do projeto
```

## 4. Como Executar

### Pre-requisitos
- Node.js (v18+)
- Cypress v15+

### Instalacao
```bash
npm install
```

### Execucao dos Testes
- **Modo Headless (Terminal):**
  ```bash
  npx cypress run
  ```
- **Modo Interativo (Interface):**
  ```bash
  npx cypress open
  ```

## 5. Scripts Utilitarios
Localizados na pasta `/scripts`:
- `capture-chrome-window.ps1`: Captura de evidencias em ambiente Windows.
- `generate-report.mjs`: Consolidacao de resultados pos-execucao.
