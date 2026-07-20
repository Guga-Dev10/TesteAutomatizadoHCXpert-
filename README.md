<<<<<<< HEAD
# Desafio Técnico HCXpert 2026 - QA/SDET Sênior

## 1. Parecer Crítico de Testabilidade
O site `automationexercise.com` apresenta uma estrutura de DOM amigável, com IDs e classes consistentes, o que facilita a automação via Cypress. Contudo, as regras de negócio de checkout e criação de conta exigem uma gestão rigorosa da massa de dados, visto que o sistema não permite duplicidade de e-mails, tornando o uso de fixtures dinâmicas essencial. A API é RESTful simples, mas carece de documentação de headers de segurança em alguns endpoints.

## 2. Matriz de Auditoria de Requisitos

| Requisito | Status | Comentário/Evidência |
|:--- |:---:|:--- |
| Framework Cypress (JS/TS) | **Atendido** | Desenvolvido em JavaScript com Cypress v15+. |
| Gherkin Declarativo | **Atendido** | Features escritas focando no comportamento (`search.feature`). |
| Padrão POM (Strict) | **Atendido** | Isolamento total em `cypress/support/page_objects/`. |
| Estrutura de Pastas | **Atendido** | Árvore de diretórios 100% conforme edital. |
| Cenários Positivos/Negativos | **Parcial** | Login e Checkout precisam ser expandidos conforme Parte 2. |
| Proibição de describe/it | **Atendido** | Step definitions utilizam apenas hooks do Cucumber. |
| Teste API Trello (GET) | **Atendido** | Validando Status 200 e extraindo `list.name`. |
| Teste API AE (POST) | **Não Atendido** | Endpoint `/api/createAccount` ainda não implementado. |
| Scripts de Apoio (/scripts) | **Atendido** | `.ps1` e `.mjs` criados para evidências e relatórios. |

## 3. Como Executar
1. `npm install`
2. `npx cypress run` para modo headless.
3. `npx cypress open` para modo interativo.
=======
# TesteAutomatizadoHCXpert-
>>>>>>> 77af50c55ac1ea9ca995f89d1f4fcadd334b6a2f
