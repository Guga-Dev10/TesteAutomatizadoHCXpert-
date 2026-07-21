# language: pt
Funcionalidade: Autenticacao de Usuario
  Como um usuario cadastrado
  Eu quero realizar login no sistema
  Para acessar minhas informacoes e realizar pedidos

  Cenario: Login com sucesso usando massa de dados
    Dado que eu esteja na pagina de login
    Quando eu insiro as credenciais da fixture "users.json"
    Entao devo ver o nome do usuario na barra de navegacao

  Cenario: Login com senha incorreta
    Dado que eu esteja na pagina de login
    Quando eu tento logar com o email "test@test.com" e senha "senha_errada"
    Entao devo ver a mensagem de erro "Your email or password is incorrect!"
