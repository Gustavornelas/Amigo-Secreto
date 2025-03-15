// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []


function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nombreAmigo = document.getElementById("amigo").value;

    // Validar si el campo está vacío
    if (nombreAmigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return; // Si está vacío, salir de la función
    }

    // Si la entrada es válida, agregar el nombre al arreglo de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = '';

    // Mostrar los amigos en la consola para verificar
    console.log(amigos);
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    // Obtener el elemento de la lista en HTML
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo de amigos y agregar cada uno como un <li>
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        
        // Crear un nuevo elemento <li>
        const li = document.createElement('li');
        
        // Establecer el texto del <li> al nombre del amigo
        li.textContent = amigo;
        
        // Agregar el <li> a la lista
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return; // Si no hay amigos, salir de la función
    }

    // Generar un índice aleatorio entre 0 y la longitud del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

     // Mostrar el amigo sorteado en la lista de resultados
     const resultado = document.getElementById('resultado');
     resultado.innerHTML = '';  // Limpiar cualquier resultado anterior
 
     // Crear el elemento <li> para mostrar el resultado
     const liResultado = document.createElement('li');
     liResultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
     resultado.appendChild(liResultado);
}