function contador() { // "contador" os parêntes vazios significa que não tem parâmetro para ser enviado ou "coletado"
   const tempo = new Date(); // A variavel "tempo" somente leitura, a qual receberá o objeto "Date" do javascript 
 //while(document,getElementById("cbxMarcarTempo").checked) {
    //declaração do laço de repetição que está condicionado a executar a linhas dentro do bloco de código ao checkbox estar marcado
    setTimeout(contador, 1000);// essa linha apenas com 1 segundo

   let hora = tempo.getHours(); // A variavel "hora" temporaria, a qual receberá o retorno do método "getHours" 
   let minuto = tempo.getMinutes();
   let segundo = tempo.getSeconds ();
 console.log(hora) //mostrará o valor da variavel "hora" no console do navegador 
   if (document.getElementById("cbxMarcarTempo").checked == true) { //um validador do "cbxMarcarTempo" está checado (if = validador, condição)
       document.getElementById("div_hora").innerText = hora; // insere o texto "hora" (div_hora)
       document.getElementById("div_minuto").innerText = minuto; // insere o texto "minuto" (div_minuto)
       document.getElementById("div_segundo").innerText = segundo; // insere o texto "segundo" (div_segundo)
    }

   setInterval(contador,1000); //essa linha apenas conta 1 segundo
   if (document.getElementById("cbxMarcarTempo").checked == false) {
       // a linha abaixo deixará de mostrar o valor da variavel hora no console se a caixinha não estiver marcada
       document.getElementById("div_hora").innerText == ""; 
       document.getElementById("div_minuto").innerText == "";
       document.getElementById("div_segundo").innerText == "";
       clearInterval(); // ele vai limpar todos os "clearInterval" (absolutamente todos)
    //essa linha apenas conta 1 segundo
    } //encerra o bloco de codigos do if falso ("false")
} // encerra o bloco de codigos da função ("contador")


document.getElementById("cbxMarcarTempo").addEventListener('click',()=> { // adiciona a lista de eventos do java script o evento clique do objeto do "cbxMarcarTempo"
      contador(); // encerra o comando da linha
    }); //fecha os parametros do metodo






 //document.body.innerText = hora; // mostrara o valor da variavel "hora" no texto da tag "body"
 
 //window.setTimeout(contador, 1000); //executa apenas uma vez
 //window.setInterval(contador, 1000); // executa infinitamente    