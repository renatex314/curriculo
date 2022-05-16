var textoDiv         = document.querySelector('#biografia');
var curriculosDiv    = document.querySelector('#curriculos');
var botoesCurriculos = curriculosDiv.querySelectorAll('a');

function repeatText(text, n) {
    var finalText = '';
    
    for (var i = 0; i < n; i++) {
        finalText = finalText.concat(text);
    }

    return finalText;
}

var dados = [
    {
        texto: 'asdsajkdhkdhksajh'
    },
    {
        texto: 'asdgasdsakdksajhdsahdkjsahdkjsahdkjsahd'
    },
    {
        texto: repeatText('texto', 1000)
    }
];

function mostrarTexto(indice) {textoDiv.textContent = dados[indice].texto}

botoesCurriculos.forEach((elemento, indice) => elemento.addEventListener('mouseover', () => mostrarTexto(indice)));