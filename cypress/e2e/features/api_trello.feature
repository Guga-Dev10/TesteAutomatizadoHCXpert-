# language: pt
Funcionalidade: Validacao de API do Trello
  Como um automatizador de testes
  Eu quero validar os dados de uma acao no Trello
  Para garantir que a integracao e o retorno dos dados estao corretos

  Cenario: Validar consulta de nome da lista em uma acao especifica
    Quando eu consulto os detalhes da acao "592f11060f95a3d3d46a987a" no Trello
    Entao o status code da resposta deve ser 200
    E o nome da lista associada deve ser exibido no console de execucao
