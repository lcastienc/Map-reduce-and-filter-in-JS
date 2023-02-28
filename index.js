/*1. Una funció que donat un array retorni un nou array amb 
l'arrel quadrada de cadascun dels valors*/
//Array creada per la comprobacio de la funció
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 43, 12];

function act1() {
  //mapajem l'array de numeros y fem els seus quadrats
  var numArray2up = numbers.map(Math.sqrt);
  //retornem el valor resultant
  return numArray2up;
}

//comprobacion de que la funcio es correcta
console.log("act1", act1());

//2. Una funció que retorni la suma dels elements positius d'un array.
//Cambiem els numeros dins l'array  per tal que la funcion no doni error
var numbers = [1, -1, -6, 4, -9, 7, 2, 5, -10, -34, 10];

function act2() {
  //filtrem l'array per tal d'agafar el numeros positius
  var positive = numbers.filter((number) => number > 0);
  //reasignem un nou valor a la variable on sumem els numeros positius conseguits anteriorment
  var positive = positive.reduce((a, b) => a + b);
  //retornem el resultat
  return positive;
}

//comprobacion de que la funcio es correcta
console.log("Act2", act2());

/*3. Una funció que calculi el factorial d'un número. (proveu què fa
Array.from(Array(10).keys())*/
//Cambiamos los datos de number
var numbers = 5;

function act3() {
  //Esto nos crear un nuevo array de 10 elementos cuyos valores
  //seran del 0 al 9 a causa del .keys
  var dude = Array.from(Array(10).keys());

  //Esta es una manera de hacerlo que se puede simplificar un poco más
  //   var factorial = Array.from(Array(numbers + 1).keys()).slice(1);
  //   var factorial = factorial.reduce((a, b) => a * b, 1);

  //version "simplificada"
  var factorial = Array.from({ length: numbers }, (_, i) => i + 1).reduce(
    (a, b) => a * b,
    1
  );

  return factorial;
}

//comprobacion de que la funcio es correcta
console.log("Act3", act3());

/*4. Una funció que et retorni la mida de cada array en un array d'arrays*/
//Updating and adding dades in the array numbers
var numbers = [
  [1, -1, -6, 4, -9, 7, 2, 5],
  ["John", 50000, "IT"],
  ["asd", "das", "dsad", "dsada", "wqee"],
];

function act4() {
  //devolvemos el resultado despues de mapear y ver la longitud de los arrays interiores
  return numbers.map((num) => num.length);
}

//comprobacion de que la funcio es correcta
console.log("Act4", act4());

/*5.  Donat el següent array, volem que ens retorni els noms dels
 treballadors del deparatament IT que cobren menys de 60000 */
//array proporcionado por el profesor para la act5
const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

function act5() {
  //   var poormoney = employees.filter((employees) => employees.salary < 6000);
  //   var names = poormoney.map((employees) => employees.name);
  //   return names;

  var lowMoney = employees.filter((money) => money.salary < 60000);
  var lowMoney = lowMoney.map((personaName) => personaName.name);
  return lowMoney;
}

//comprobacion de que la funcio es correcta
console.log("Act5", act5());
