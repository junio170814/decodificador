    var  textIn = document.querySelector('#digite');
    var textOn = document.querySelector('#digite');

    function criptog() {
        var texto = textIn.value

        var resultado = texto.replace(/e/g, "enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");

        document.getElementById('retangulo').innerHTML = resultado;
    }

    function descrip() {
        var texto = textOn.value

        var resultado = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");

        document.getElementById('retangulo').innerHTML = resultado
    }

    function copiar() {
        var textoCopiado = document.getElementById('digite');

        textoCopiado.select();
        document.execCommand('copy');

        document.getElementById('digite').value = " ";

        alert('texto copiado com sucesso')
    }