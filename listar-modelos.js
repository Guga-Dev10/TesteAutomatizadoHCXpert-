const apiKey = 'AQ.Ab8RN6JikVrYPnunGWBBJMUBSlFJZd3ytNc1taarttzK76sEFg'; // <-- Substitua pela sua chave do Google AI Studio

async function descobrirModelos() {
  console.log('Consultando a API do Google...');
  
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();

    if (data.error) {
      console.error('Erro retornado pela API:', data.error.message);
      return;
    }

    // Filtra apenas os modelos que suportam geração de texto (generateContent)
    const modelosSuportados = data.models
      .filter(modelo => modelo.supportedGenerationMethods.includes('generateContent'))
      .map(modelo => modelo.name.replace('models/', '')); // Limpa o prefixo 'models/'

    console.log('\n✅ Sucesso! Use um destes nomes exatos no seu config.json:');
    console.table(modelosSuportados);
    
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
}

descobrirModelos();