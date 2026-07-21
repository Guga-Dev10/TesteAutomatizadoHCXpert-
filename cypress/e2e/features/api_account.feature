# language: pt
Funcionalidade: Cadastro de Usuario via API
  Como um sistema externo
  Eu quero criar uma conta de usuario via API
  Para garantir a agilidade no provisionamento de dados

  Cenario: Validar erro ao tentar criar conta sem parametros obrigatorios
    Quando eu envio um POST para o endpoint "/api/createAccount" sem o parametro "name"
    Entao o status code da resposta deve ser 200
    E resposta JSON deve conter a mensagem "Bad request, name parameter is missing in POST request."