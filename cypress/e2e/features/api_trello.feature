# language: pt
Funcionalidade: Validação de API do Trello
  Como um automatizador de testes
  Eu quero validar os dados de uma ação no Trello
  Para garantir que a integração e o retorno dos dados estão corretos

  Cenário: Validar consulta de nome da lista em uma ação específica
    Quando eu consulto os detalhes da ação "592f11060f95a3d3d46a987a" no Trello
    Então o status code da resposta deve ser 200
    E o nome da lista associada deve ser exibido no console de execução
