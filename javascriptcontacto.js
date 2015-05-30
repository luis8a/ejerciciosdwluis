function validacion()
	{
	/*Si el campo "minombre2" está en blanco, entonces
		se coloca el fondo "rosado", para
		indicarle al usuario que debe escribir su nombre*/
		
		if(minombre2.value=="")
			{
				minombre2.style.background="#FFDDDD";
			}
			
		/*De lo contrario, verificamos si el campo "micorreo2" está en blanco,
			si está en blanco, colocamos el fondo en rosado, para
			indicarle al usuario que debe escribir su correo*/
			
		else if(micorreo2.value=="")
			{
				micorreo2.style.background="#FFDDDD";
			}
			/*De lo contrario, verificamos si los campos "micelular2" y
				"mitelfonofijo2" estan en blanco. si están en blanco
				enviamos el mensaje "Inserte al menos un numero d Telefono" y
				colocamos en fondo rosado tanto el campo de celular como el
				de telefono fijo para que sirva de alertaal usuario, de que
				debe llenar alguno de estos campos*/
				
			else if(micelular2.value=="" && mitelfonofijo2.value0="")
				{
					micelular2.setCustomValidity('Inserte al menos un número de teléfono');
					micelular2.style.background='#FFDDDD';
					mitelfonofijo2.style.background='#FFDDDD';
				}
			else
				
			/*De lo contrario, colocamos en blancos el mensaje de "setCustomValidity" y
				colocamos en fondo rosado el campo "comentario" para identificarle al usuario
				que debe escribir algo en el campo "comentario" */
				{
					micelular2.setCustomValidity('');
					micomentario2.style.background='#FFDDDD';
				}
			
	}
	
function cambiarrango()
	{
	/*Con la instrucción "var" declaramos una variable local llamada salida. Esta variable
		va a referenciar al campo "rango" del formulario*/
		
		var salida=document.getElementById('rango');
	
	/*Creamos otra variable local "calculo" y le asignamos el valor
		del campo "miedad2" y le restamos "20" */
		
		var calculo=miedad2.value-20;
		
	/*Para no permitir rango de edad cero
		forzamos el valor cero a la variable
		"calculo" y veinte al campo
		"miedad2.value"*/
		
		if(calculo<20)
			{
				calculo=0;
				miedad2.value=20;
			}
		/*Sustituimos el nuevo rango en el formulario*/
		
		salida.innerHTML=calculo+' a '+miedad2.value;
	}

function iniciar()
	{
	/*Creamos una variable global, para cada uno
		de los campos del formulario. Estas variables
		se le asignan valores referenciado al elemento
		por el "id" */
		
		minombre2=document.getElementById('minombre');
		micorreo2=document.getElementById('micorreo');
		micelular2=document.getElementById('micelular');
		mitelfonofijo2=document.getElementById('mitelfonofijo');
		miedad2=document.getElementById('miedad');
		micomentario2=document.getElementById('micomentario');
		
	/*Se Agrega un Escuchador al evento "input", de los campos
		minombre2, micorreo2, micelular2, y mitelfonofijo2.
		Cuando el usuario hace un "input", es decir agrega
		algún valor a los campos antes mncionados, se llama
		a la función "validación" */
		
		minombre2.addEventListener("input", validacion, false);
		micorreo2.addEventListener("input", validacion, false);
		micelular2.addEventListener("input", validacion, false);
		mitelefono2.addEventListener("input", validacion, false);
		
	/*Se agrega un escucha al evento chang del campo "miedad2".
		Cada vz que hay un "cambio" (change) en el campo
		se llama a la función "cambiarrango" */
		
		miedad2.addEventListener('change', cambiarrango, false);
		
	/*Se agrega un escucha al evento "input", del campo
		micomentario2. Cuando el usuario hace un "input", es decir agrega
		a la funcion "validacion" */
		
		micomentario2.addEventListener('input', validacion, false);
		validacion();
	}
	/*Cuando se llama al programa Javascript, esta es la
		primera linea que se ejecuta. Aquí s "agrega" un
		escuchaal evento "load", es decir, cuando se carga
		el formulario, se llama a la función "iniciar"
		que está mas arriba */
		
window.addEventListener('load', iniciar, false);