# Desafio Técnico HCXpert 2026 - QA/SDET Sênior

Este repositório contém o framework de automação desenvolvido para o site [Automation Exercise](https://automationexercise.com) e validações de API (Trello e Automation Exercise), seguindo rigorosamente os padrões de Engenharia de Qualidade Sênior.

## 1. Parecer Crítico de Testabilidade

O ecossistema do **Automation Exercise** apresenta uma testabilidade mista. Do ponto de vista de automação Web, o site é amigável devido ao uso extensivo de atributos `data-qa`, o que garante seletores resilientes a mudanças no layout. Contudo, o principal desafio de negócio é a **gestão de estado da massa de dados**: o sistema impede a duplicidade de e-mails, exigindo que a automação utilize estratégias de limpeza ou geração dinâmica de dados (resolvido aqui via fixtures e isolamento de cenários).

Quanto às APIs, observou-se que o site não segue estritamente o padrão RESTful para códigos de status em erros de requisição (retornando `200 OK` com mensagens de erro no body), o que exige asserções de negócio mais profundas do que a simples validação de `status code`.

## 2. Matriz de Auditoria de Requisitos

| Requisito | Status | Comentário / Evidência |
| :--- | :---: | :--- |
| **Framework Cypress (JS/TS)** | **Atendido** | Desenvolvido em JavaScript com Cypress v15 e esbuild. |
| **Gherkin Declarativo** | **Atendido** | Cenários focados em comportamento, evitando termos técnicos. |
| **Padrão POM (Strict)** | **Atendido** | Isolamento total de elementos em `cypress/support/page_objects/`. |
| **Estrutura de Pastas** | **Atendido** | Árvore de diretórios 100% conforme edital. |
| **Cenários Positivos/Negativos** | **Atendido** | Cobertura completa de Login, Busca e APIs. |
| **Proibição de describe/it** | **Atendido** | Integração via Cucumber sem o uso de Mocha/xUnit nos steps. |
| **Uso de Fixtures** | **Atendido** | Massa de dados centralizada em `cypress/fixtures/users.json`. |
| **Teste API Trello (GET)** | **Atendido** | Extração do campo `data.list.name` com validação de status. |
| **Teste API AE (POST)** | **Atendido** | Validação de regra de negócio (parâmetros ausentes). |
| **Scripts de Apoio (/scripts)** | **Atendido** | Scripts de evidências e relatórios operacionais. |

## 3. Arquitetura do Projeto

```text
├── cypress/
│   ├── e2e/
│   │   ├── features/          # Especificações BDD (.feature)
│   │   └── step_definitions/  # Implementação dos passos
│   ├── fixtures/              # Massa de dados (JSON)
│   ├── support/
│   │   └── page_objects/      # Mapeamento de elementos e ações (POM)
│   └── evidencias/            # Local para logs e screenshots
├── scripts/                   # Scripts utilitários (PowerShell/Node)
├── cypress.config.js          # Configuração do Cypress e Cucumber
└── package.json               # Dependências do projeto
```

## 4. Como Executar

### Pré-requisitos
- Node.js (v18+)
- Cypress v15+

### Instalação
```bash
npm install
```

### Execução dos Testes
- **Modo Headless (Terminal):**
  ```bash
  npx cypress run
  ```
- **Modo Interativo (Interface):**
  ```bash
  npx cypress open
  ```

## 5. Scripts Utilitários
Localizados na pasta `/scripts`:
- `capture-chrome-window.ps1`: Captura de evidências em ambiente Windows.
- `generate-report.mjs`: Consolidação de resultados pós-execução.
