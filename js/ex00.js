/*Exercícios

OBS: APÓS TERMINAR TODOS OS SCRIPTS ESTILIZE VIA CSS.*/


function somar(){
    var v1, v2, result
    v1 = document.getElementById("primeiro_valor").value 
    v2 = document.getElementById("segundo_valor").value
    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        result = parseFloat(v1) + parseFloat(v2)
        document.getElementById("resultado").innerHTML=`O resultado da soma é ${result}`
    }
}

/**1-No mesmo script usando os mesmos valores de n1 e n2, crie novos botões para: multiplicar,
 *  dividir(não pode haver divisão por zero) e subtrair */

function equacoes(){
    var v1, v2, multi, div, subtrair
    v1 = document.getElementById("primeiro_valor").value
    v2 = document.getElementById("segundo_valor").value
    if(v1=="" || v2=="" || v1==0 || v2==0){
        alert("Os campos devem ser preenchidos")
    }else{
        multi = parseFloat(v1) * parseFloat(v2)
        div = parseFloat(v1) / parseFloat(v2)
        subtrair = parseFloat(v1) - parseFloat(v2)
        document.getElementById("multi").innerHTML = `O resultado da multiplicação é ${multi}`
        document.getElementById("div").innerHTML = `O resultado da divisão é ${div}`
        document.getElementById("sub").innerHTML = `O resultado da subtração é ${subtrair}`
    }
    
}


/**3- Crie um novo documento HTML onde o usuário deve entrar o peso e altura e o programa deve exibir o IMC. Dependendo da faixa do
 IMC deve informar se o usuário está abaixo do peso, peso normal, sobrepeso, obesidade mórbida. Desafio extra: Apresente as informações 
 em cores azul para abaixo do peso, verde peso normal, sobrepeso amarlo e obesidade vermelho */

 