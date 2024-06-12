/*
&& -> AND -> E 
|| -> OR -> OU
! -> NOT -> NÃO
*/

//&& -> AND -> E -> Todas as expressoes precisam ser verdadeiras para retornar verdadeiro (true)
const expressaoAND = true && true && false && true;
console.log(expressaoAND);

//|| -> OR -> OU -> Ao menos uma expressão precisa ser false OU (OR, ||), ou True apra retornar verdadeiro. Caso falte true ou false, vai retornar false
const expressaoOR = false || true || true || true;
console.log(expressaoOR);


const usuario = 'Deyvisson'
const senha = '123456'
//const loginOK = usuario === 'Deyvisson' && senha === '123456';
const loginOK = usuario === 'Deyvisson' || senha === '12345';
console.log(loginOK);

//! -> NOT -> NÃO 
console.log(!!!false);