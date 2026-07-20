# language: pt
Funcionalidade: Cadastro de Usuário via API
  Como um sistema externo
  Eu quero criar uma conta de usuário via API
  Para garantir a agilidade no provisionamento de dados

  Cenário: Validar erro ao tentar criar conta sem parâmetros obrigatórios
    Quando eu envio um POST para o endpoint "/api/createAccount" sem o parâmetro "name"
    Então o status code da resposta deve ser 200
    E a resposta JSON deve conter a mensagem "Bad request, name parameter is missing!"
