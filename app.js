/* Elementos del html */
const inputTemperatura = document.getElementById('temperaturaInicial');
const unidadTemperatura = document.querySelector('select')
const primeraConversion= document.getElementById('primera-conversion')
const segundaConversion= document.getElementById('segunda-conversion')

/* Declaración de variables */
let temperaturaConversion = inputTemperatura.value;
let unidadSelect=unidadTemperatura.value;
let temperaturaFahrenheit;
let temperaturaKelvin;
let temperaturaCelsius;
let temperaturaFloat;

/* Función que valida el valor ingresado, si es correcto y lo convierte en
  una variable tiplo float, entra a un switch-case para saber en qué unidad 
  está la temperatura.
  En cada caso, se llama a la funcion que realiza la conversion */

function validacionTemperatura (temperatura){
  if(temperatura==""){
    console.log("Por favor ingrese una temperatura válida")
    primeraConversion.innerText="Por favor ingrese una temperatura válida";
    segundaConversion.classList.add('error');
    } 
  else{
    segundaConversion.classList.remove('error');
    temperaturaFloat=parseFloat(temperatura, 10);
    switch (unidadSelect) {
      case "celsius":
        console.log("celsius");
        conversionCelsius(temperaturaFloat);
        break;
      case "fahrenheit":
        console.log("fahrenheit");
        conversionFahrenheit(temperaturaFloat);
        break;
      case "kelvin":
        console.log("kelvin");
        conversionKelvin(temperaturaFloat);
      break;
  
      default:
        console.log("Ocurrió un error, por favor Floatentelo de nuevo");
      break;
    }
  }
}


/* Funciones que realizan la conversion de temperatura, en cada una 
  el resultado se redondea a dos cifras decimales y se realiza la actualizacion
  de lo que se muestra en pantalla */


/* Conversion desde celsius a fahrenheit y kelvin*/

function conversionCelsius(temperatura){
    temperaturaFahrenheit= ((temperatura*1.8)+32).toFixed(2);
    console.log(temperaturaFahrenheit+" °F");
    primeraConversion.innerText=temperaturaFahrenheit+" °F";
    temperaturaKelvin= (temperatura+273.15).toFixed(2);
    console.log(temperaturaKelvin+" K");
    segundaConversion.innerText=temperaturaKelvin+" K";
}

/* Conversion desde fahrenheit a celsius y kelvin*/

function conversionFahrenheit(temperatura){
  temperaturaCelsius= ((temperatura-32)/1.8).toFixed(2);
  console.log(temperaturaCelsius+" °C");
  primeraConversion.innerText=temperaturaCelsius+" °C";
  temperaturaKelvin= (((temperatura-32)/1.8)+273.15).toFixed(2);
  console.log(temperaturaKelvin+" K");
  segundaConversion.innerText=temperaturaKelvin+" K";
}

/* Conversion desde kelvin a celsius y fahrenheit*/

function conversionKelvin(temperatura){
  temperaturaCelsius= (temperatura-273.15).toFixed(2);
  console.log(temperaturaCelsius+" °C");
  primeraConversion.innerText=temperaturaCelsius+" °C";
  temperaturaFahrenheit= (((temperatura-273.15)*1.8)+32).toFixed(2);
  console.log(temperaturaFahrenheit+" °F");
  segundaConversion.innerText=temperaturaFahrenheit+" °F";
}

validacionTemperatura(temperaturaConversion);

/* Añadir event listeners para que cada vez que se ingrese una temperatura
  o se cambie de unidad, la function se actualice*/
inputTemperatura.addEventListener('keydown',(e)=>{
  if(e.key=='Enter'){
    validacionTemperatura(temperaturaConversion);
  }
})

inputTemperatura.addEventListener('change',(b)=>{
  temperaturaConversion=b.target.value;
  validacionTemperatura(temperaturaConversion)
});

unidadTemperatura.addEventListener('change',(b)=>{
  unidadSelect=b.target.value;
  validacionTemperatura(temperaturaConversion)
});