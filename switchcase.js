

function colorir() {
    document.body.bgColor = " #ffffff";
    document.body.style.color = " #000000";

    let txtCor = document.getElementById("txtCor") //a variavel 'cor' esta recebendo em letras minusculas o valor do 'txtCor'
    let cor = txtCor.value.toLowerCase(); //a variável esta recebendo em letras minusculas o valor do 'txtCor'
    
    switch (cor) { //o algorismo 'switch' vai procurar a cor e vai executar a troca dela.
        default:
            document.body.bgColor = " #ffffff";
            break; //linha de quebra (pra não juntar no sistema)
        case "azul":
            document.body.bgColor = " #0000ff";
            break;
        case "laranja":
            document.body.bgColor = " #ff5733";
            break;
        case "roxo":
            document.body.bgColor = " #8633ff";
            break;
        case "preto":
            document.body.bgColor = " #000000";
            document.body.style.color = " #ffffff";
            break;
        case "ciano":
            document.body.bgColor = " #0fd3dc";
            break;
        case "vermelho":
            document.body.bgColor = " #ff0000";
            break;
        case "amarelo":
            document.body.bgColor = " #f3e236";
            break; 
        case "azul":
            document.body.bgColor = " #0000ff";
            break;
        case "roxa":
            document.body.bgColor = " #8633ff";
            break;
        case "preta":
            document.body.bgColor = " #000000";
            document.body.style.color = " #ffffff";
            break;
        case "ciana":
            document.body.bgColor = " #0fd3dc";
            break;
        case "vermelha":
            document.body.bgColor = " #ff0000";
            break;
        case "amarela":
            document.body.bgColor = " #f3e236";
            break; 
        case "verde":
            document.body.bgColor = " #00ff4d";
            break;
    }
}

function colorirTexto() {
    document.body.style.color = " #000000"
    
    let txtCorTexto = document.getElementById("txtCorTexto")
    let cor2 = txtCorTexto.value.toLowerCase()

    switch (cor2) { //o algorismo 'switch' vai procurar a cor e vai executar a troca dela.
        default:
            document.body.style.color = " #000000";
            break; //linha de quebra (pra não juntar no sistema)
        case "azul":
            document.body.style.color = " #0000ff";
            break;
        case "laranja":
            document.body.style.color = " #ff5733";
            break;
        case "roxo":
            document.body.style.color = " #8633ff";
            break;
        case "preto":
            document.body.style.color = " #000000";
            break;
        case "ciano":
            document.body.style.color = " #0fd3dc";
            break;
        case "vermelho":
            document.body.style.color = " #ff0000";
            break;
        case "amarelo":
            document.body.style.color = " #f3e236";
            break; 
        case "azul":
            document.body.style.color = " #0000ff";
            break;
        case "roxa":
            document.body.style.color = " #8633ff";
            break;
        case "preta":
            document.body.style.color = " #000000";
            break;
        case "ciana":
            document.body.style.color = " #0fd3dc";
            break;
        case "vermelha":
            document.body.style.color = " #ff0000";
            break;
        case "amarela":
            document.body.style.color = " #f3e236";
            break; 
        case "verde":
            document.body.style.color = " #00ff4d";
            break;
    }
}

document.getElementById("txtCor").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {                     //código 13 é quando a tecla ENTER é teclada
        colorir();                                 //chama a função de colorir
    }
});

document.getElementById("txtCorTexto").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {                     //código 13 é quando a tecla ENTER é teclada
        colorirTexto();                                 //chama a função de colorir
    }
});

