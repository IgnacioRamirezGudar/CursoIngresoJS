/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var numeroUNO;
var numeroDOS;
function sumar()
{	
	numeroUNO=parseInt(txtIdNumeroUno.value);
	numeroDOS=parseInt(txtIdNumeroDos.value);	
	alert("La suma es "+parseInt(numeroUNO+numeroDOS));
	txtIdNumeroUno.value = "";
	txtIdNumeroDos.value = "";
}

function restar()
{
	numeroUNO=parseInt(txtIdNumeroUno.value);
	numeroDOS=parseInt(txtIdNumeroDos.value);	
	alert("La resta es "+parseInt(numeroUNO-numeroDOS));
	txtIdNumeroUno.value = "";
	txtIdNumeroDos.value = "";
}

function multiplicar()
{ 
	numeroUNO=parseInt(txtIdNumeroUno.value);
	numeroDOS=parseInt(txtIdNumeroDos.value);	
	alert("La multiplicacion es "+parseInt(numeroUNO*numeroDOS));
	txtIdNumeroUno.value = "";
	txtIdNumeroDos.value = "";
}

function dividir()
{
	numeroUNO=parseInt(txtIdNumeroUno.value);
	numeroDOS=parseInt(txtIdNumeroDos.value);	
	alert("La division es "+parseInt(numeroUNO/numeroDOS));
	txtIdNumeroUno.value = "";
	txtIdNumeroDos.value = "";
}