/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre = txtIdNombre.value;
	var edad = txtIdEdad.value;
	alert("Usted se llama "+nombre+" y tiene "+edad+" años");
	nombre.value = "";
	edad.value = "";
}

