function verificar() {
   var data = new Date();
   var ano = data.getFullYear(); //ano atual
   var fano = document.getElementById('txtano');
   var res = document.getElementById('res');
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked) {
        genero = 'Homem';
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebeMenino.jpg')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'homemJovem.jpg')
        } else if (idade < 59) {
            //adulto
            img.setAttribute('src', 'homemAdulto.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idoso.jpg')
        }
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos.';
        res.style.textAlign = 'center';
        res.appendChild(img);
    } else if (fsex[1].checked) {
        genero = 'Mulher';
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebeMenina.jpg')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'mulherJovem.jpg')
        } else if (idade < 59) {
            //adulto
            img.setAttribute('src', 'mulherAdulta.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idosa.jpg')
        }
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos.';
        res.style.textAlign = 'center';
        res.appendChild(img);
    }
   }
}