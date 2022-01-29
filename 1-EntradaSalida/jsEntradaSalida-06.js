/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUNO=parseInt(txtIdNumeroUno.value);
	var numeroDOS=parseInt(txtIdNumeroDos.value);
	alert(parseInt(numeroUNO+numeroDOS));
	txtIdNumeroUno.value = "";
	txtIdNumeroDos.value = "";
}