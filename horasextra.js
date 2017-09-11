function calculo()
{
var sueldo = document.getElementById('sueldo').value;
var horas = document.getElementById('horas').value;
var vhoras = (parseFloat(sueldo) / 30 / 8 * 1.5);
var hextra = (parseFloat(vhoras) * parseFloat(horas));
respuesta.value = hextra; 
}
// Con parseInt son calcula numeros enteros, con parseFloat decimales
