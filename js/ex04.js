/**4- Crie um script em que o usuário entre com o login e senha e exiba uma
     mensagem com alert caso os dados estejam correto ou incorretos */

function validar(){
    var u, s
    u = document.getElementById("usuario").value
    s = document.getElementById("senha").value
    if(u=="usuario1@gmail.com" && s=="12345678" || u=="usuario2@gmail.com" && 
        s=="87654321" || u=="usuario3@gmail.com" && s=="92759883" ){
            alert("Login efetuado com sucesso")
    }else{
        alert("Login ou senha incorretos")
    }
}