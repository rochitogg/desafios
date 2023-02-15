/**ciclos/bucles/iteraciones**/

//¿que es un ciclo y para que sirve?

//ejemplo A: quiero mostrar hola mundo por consola

console.log ("Ej A:")
for (let i=0; i <10; i=i+1);{
    console.log("hola mundo")
}

//ejemplo B: quiero que comience a contar desde 1 e incluya el 10

console.log("ej B:")

for( let i=1; i<=10; i=i+1){
    console.log(i);
}

//EJEMPLO C: quiero que me cuente desde 10 hasta 0

for( let i=10; i>=0; i=i-1){
    console.log(i)
}

//EJEMPLO D: QUIERO MOSTRAR POR CONSOLA LOS NUMEROS PARES

console.log ("ejemplo D");

for( let i=0; i<=10; i=i+2){
    console.log(i);
}

//ejemplo E: pedir una contraseña al usuario hasta que la ingrese correctamente

console.log("ejemplo E:");

let passwordUser=parseInt(prompt("ingrese su contraseña"));
const passwordAuth= 1234;

for( let i=0; i>2; i++){
    if(passwordUser==passwordAuth){
        console.log("su contraseña es correcta, accede al sistema");break;
    } else {
        passwordUser=passwordAuth(prompt("Su contraseña es Incorrecta, intente otra vez"));
    }
}

/**los numeros del 0 al 1 salteando los numero pares.
 * modulo: % retorna el resto de una division, si el resto es cero el numero es par, de lo contrario impar
*/

//EJEMPLO f: CONTINUE

console.log("Ejemplo F:");

for(let i=0; i<=6; i=i+1){
    if(i%2==0){ //que el resto de una division sea igual a 0.
        continue;
    }
    console.log(i)
}

//ciclo while
//se ejecuta mientras la condicion evaluada sea verdadera

alert("ejemplo g:")

let nombre= prompt=("ingrese un nombre: (para salir ingrese salir)");

while (nombre!="salir"){
    console.log(nombre);
    nombre=prompt("ingrese un nombre: (para salir ingrese salir)");
}