# plugin-senhas-face
Plugin para Google Chrome que captura usuário e senha ao efetuar login no Facebook

Este plugin tem a finalidade apenas de testes e recomenda-se que seja usado sempre localmente.

O plugin só funciona no domínio facebook.com e nos seus subdomínios.

Para instalar o plugin no Google Chrome, faça o clone do projeto

$git clone git@github.com:jplobianco/plugin-senhas-face.git


E então acessar a página de extensões do seu Google Chrome em:

chrome://extensions


Clique no botão "Load unpacked Extension" e carrega a pasta do projeto.


Para informar o usuário e senha, o plugin faz uma requisição ajax passando os dois como parâmetros. Por padrão ele usa o endereço 127.0.0.1 na porta 8001.

Para testar o plugin suba um servidor na porta 8001:

$php -S 0.0.0.0:8001 


Para testar acessa a página do facebook http://facebook.com e tente fazer o login.

O usuário e senha apareceram no log do servidor que está rodando na porta 8001 (nesse exemplo no próprio terminal).

