# language: pt
Funcionalidade: Pesquisa de Produtos
  Como um usuário do site Automation Exercise
  Eu quero pesquisar produtos
  Para encontrar rapidamente o que desejo comprar

  Contexto:
    Dado que eu esteja na página de produtos

  Cenário: Pesquisa bem-sucedida de um produto existente
    Quando eu pesquiso pelo produto "Blue Top"
    Então devo ver a seção "SEARCHED PRODUCTS"
    E o produto "Blue Top" deve estar visível na lista de resultados

  Cenário: Pesquisa de produto inexistente
    Quando eu pesquiso pelo produto "ProdutoInexistente123"
    Então devo ver a seção "SEARCHED PRODUCTS"
    E nenhum produto deve ser exibido na lista de resultados
