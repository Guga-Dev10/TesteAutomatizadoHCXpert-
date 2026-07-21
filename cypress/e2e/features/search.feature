# language: pt
Funcionalidade: Pesquisa de Produtos
  Como um usuario do site Automation Exercise
  Eu quero pesquisar produtos
  Para encontrar rapidamente o que desejo comprar

  Contexto:
    Dado que eu esteja na pagina de produtos

  Cenario: Pesquisa bem-sucedida de um produto existente
    Quando eu pesquiso pelo produto "Blue Top"
    Entao devo ver a secao "SEARCHED PRODUCTS"
    E o produto "Blue Top" deve estar visivel na lista de resultados

  Cenario: Pesquisa de produto inexistente
    Quando eu pesquiso pelo produto "ProdutoInexistente123"
    Entao devo ver a secao "SEARCHED PRODUCTS"
    E nenhum produto deve ser exibido na lista de resultados
