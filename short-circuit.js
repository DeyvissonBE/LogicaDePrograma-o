/*
&& -> false && true -> false "o valor mesmo"
|| -> true e false -> vai retornar "o valor verdadeiro"

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

console.log('Deyvisson' && '' && 'santos');
//&& -> false && true -> false "o valor mesmo"

function falaOI () {
    return 'oi';
}

let vaiExecutar = 'Joaozinho'

console.log(vaiExecutar && falaOI());



//|| -> true e false -> vai retornar "o valor verdadeiro"
console.log(0 || false || null || "luiz bezerra" || true);

const corUsuario = 'vermelho';
const corPadrão = corUsuario || 'red';
console.log(corPadrão)


const a = 0;
const b = null;
const c = 'false'; // Aqui
const d = false;
const e = undefined;

console.log(a || b || c || d || e);