# Amigo-Secreto

Este proyecto permite gestionar una lista de amigos y realizar un sorteo aleatorio para seleccionar un amigo secreto. A continuación, se detallan las tres funciones principales implementadas en JavaScript que permiten agregar amigos, actualizar la lista y sortear un amigo aleatorio.

## Funciones Implementadas

### 1. `agregarAmigo()`

Esta función permite al usuario agregar un amigo a la lista.

#### Descripción:
- Obtiene el nombre del amigo desde un campo de texto.
- Verifica si el campo de entrada no está vacío.
- Si el nombre es válido, lo agrega al array `amigos`.
- Luego, limpia el campo de texto para permitir la entrada de un nuevo nombre.
- Finalmente, actualiza la lista de amigos en la interfaz HTML.

#### Comportamiento:
1. Si el campo de texto está vacío, muestra una alerta solicitando que se ingrese un nombre.
2. Si el nombre es válido, se agrega al array `amigos`.
3. Se limpia el campo de entrada y se actualiza la lista visual de amigos.

---

### 2. `actualizarListaAmigos()`

Esta función actualiza la lista de amigos en la interfaz HTML, mostrando todos los amigos en una lista `<ul>`.

#### Descripción:
- Limpia la lista existente de amigos en la interfaz HTML.
- Itera sobre el array `amigos` y agrega cada nombre como un nuevo elemento `<li>` en la lista de amigos visible.

#### Comportamiento:
1. La lista HTML es limpiada antes de ser actualizada para evitar duplicados.
2. Se recorre el array `amigos` y se crea un nuevo elemento `<li>` para cada amigo, que se añade a la lista en el DOM.

---

### 3. `sortearAmigo()`

Esta función selecciona aleatoriamente un amigo de la lista y lo muestra en una sección de resultados.

#### Descripción:
- Verifica si el array `amigos` tiene elementos antes de intentar realizar el sorteo.
- Si hay amigos, genera un índice aleatorio para seleccionar un amigo de la lista.
- Muestra el nombre del amigo sorteado en la interfaz HTML.

#### Comportamiento:
1. Si no hay amigos en el array, muestra una alerta indicando que no se puede realizar el sorteo.
2. Si hay amigos, se genera un índice aleatorio utilizando `Math.random()` y `Math.floor()`.
3. El nombre del amigo sorteado se muestra en un elemento `<li>` dentro de la sección de resultados.

---
