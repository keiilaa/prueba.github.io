//Conversion larga: 
var celsius1 = prompt("Introduzca la temperatura en grados celsius:");
celsius1 = parseFloat(celsius1);

//Conversion corta:
//var celsius1 = parseFloat(prompt("Introduzca la temperatura en grados celsius: "));

//Proceso a hacer la conversiomn de  celsius a Farenhit:
var Farenhit = (9/5)*celsius1+32;

document.write("De celsius a Farenheit es: ", Farenhit);