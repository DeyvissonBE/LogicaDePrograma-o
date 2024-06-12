/*
Entre 6 - 11 - Bom Dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa Noite
Entre 0 - 5 - Boa madruda OBS: voce dormiu? precisa dormir meu caro.

If (SE) - POde ser usado sozinho
Else (Outro) - Sempre que eu utilo a palavra else, preciso de um if antes

Eu posso ter varios else's e if's na checagem

Só posso ter um Else na secagem

Podemos usar condiçoes sem else if, utilizando apenas if e else

 */

const hora = 45;

if (hora >= 6 && hora <= 11) {
    console.log('bom dia')  
} else if (hora >= 12 && hora <= 17 ) {
    console.log('boa tarde')
} else if (hora >=18 && hora <= 23) {
    console.log('Boa Noite')
} else if (hora >= 0 && hora <= 5) {
    console.log('Boa madruda OBS: voce dormiu? precisa dormir meu caro.')
} else {
    console.log('Essa hor não existe meu nobre')
}


const tenhoGrana = false

if (tenhoGrana) {
    console.log('Vou sair de casa')
} else {
    console.log('Não vou sair de casa')
}



//--------------------------------------------------------------------------------------


const numero = 8;

// Se (numero >= 0 && numero <= 5) ocorrer, faça isoo {código}
// Se não faça isso {código}

if (numero >= 0 && numero <= 5) {
    console.log('O numero esta entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero esta entre 6 e 8')
} else if (numero >= 9 && numero <= 11) { // verdadeiro
    console.log('O numero esta entre 9 e 8')
} else {
    console.log('O numero NÃO esta entre e 11.')
}


