const fs = require('fs');

const diretorios = [
  'cypress/e2e/features',
  'cypress/e2e/step_definitions',
  'cypress/evidencias',
  'cypress/support/page_objects',
  'cypress/fixtures',
  'scripts/templates'
];

// Cria todas as pastas respeitando a arquitetura
diretorios.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

console.log('✅ Estrutura de diretórios criada com sucesso!');