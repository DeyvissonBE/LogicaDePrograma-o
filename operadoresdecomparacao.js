/*
Operadoes de marcação
> maior que
>=maior ou igual a
<menor que
<=menor ou igual a
==igualdade (valor) *****
===igualdade estrita (valor e tipo)
!= diferente ( valor) ****
!== diferente estrito (valor e tipo)
*/

//> maior que
const comp = 10 > 5;
console.log(comp);

//>=maior ou igual a
const compigual = 10 >= 9;
console.log(compigual)

//< menor que
const menor = 5 < 2
console.log(menor)

//<=menor ou igual a e variaveis separadas
const menorque = 7 <= 7
console.log(menorque)

const num1 = 12
const num2 = 12
const comp1 = num1 == num2
console.log(comp1)

//==igualdade (valor) ***** Não usar, pode gerar algum efeito colateral no codigo
const num3 = 11 //number
const num4 = '11' //string
const comp2 = num3 == num4
console.log(comp2)


//===igualdade estrita (valor e tipo)
const num5 = 11 
const num6 = 11 
const comp3 = num5 === num6;
console.log(comp3)

//!= diferente ( valor) **** Não usar, pode gerar algum efeito colateral no codigo
const num7 = 11  //number
const num8 = '11' //string
const comp4 = num7 != num8;
console.log(comp4)

//!== diferente estrito (valor e tipo)
const num9 = 11  //number
const num10 = '11' //string
const comp5 = num9 !== num10;
console.log(comp5)