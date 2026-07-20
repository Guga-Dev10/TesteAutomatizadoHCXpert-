# language: pt
Funcionalidade: Autenticação de Usuário
  Como um usuário cadastrado
  Eu quero realizar login no sistema
  Para acessar minhas informações e realizar pedidos

  Cenário: Login com sucesso usando massa de dados
    Dado que eu esteja na página de login
    Quando eu insiro as credenciais da fixture "users.json"
    Então devo ver o nome do usuário na barra de navegação

  Cenário: Login com senha incorreta
    Dado que eu esteja na página de login
    Quando eu tento logar com o email "test@test.com" e senha "senha_errada"
    Então devo ver a mensagem de erro "Your email or password is incorrect!"
