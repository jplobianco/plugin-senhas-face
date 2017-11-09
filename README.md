# plugin-senhas-face
Plugin para Google Chrome que captura usuário e senha ao efetuar login no Facebook

Este plugin tem a finalidade apenas de testes e recomenda-se que seja usado sempre localmente.

O plugin só funciona no domínio facebook.com e nos seus subdomínios.

Para mostrar o usuário e senha, o plugin faz uma requisição ajax passando os dois como parâmetros. Por padrão ele usa o endereço 127.0.0.1 na porta 8001.

**Para testar o plugin:**

- Instale o plugin no Google Chrome:

  - Faça o clone do projeto:

     `git clone https://github.com/jplobianco/plugin-senhas-face.git`

  - Acesse a página de extensões do seu Google Chrome digitando no navegador a URL abaixo:

    `chrome://extensions` 
    
  - Marque a opção:
  
    `Modo desenvolvedor` ou `Developer Mode`
  
  - Clique no botão:
  
    `Carregar extensão expandida` ou `Load unpacked Extension`
  
  - Selecione a pasta do projeto e clique em:
  
    `Abrir` ou `Open`

- Instale as dependências (requer permissões de super usuário):

  `apt-get update`

  `apt-get install php`

- Pelo terminal, suba o servidor de aplicação na porta 8001:

  `cd plugin-senhas-face/`

  `php -S 0.0.0.0:8001`

- No Google Chrome acesse a página do Facebook (http://facebook.com) e tente fazer o login (**Atenção:** Não é necessário digitar o usuário e senha corretos para entender o funcionamento)

- Veja se o usuário e senha digitados apareceram no log do servidor (neste exemplo no próprio terminal).

- Somos apenas pontos em linahs infinitas. - Alguem Aleatorio.