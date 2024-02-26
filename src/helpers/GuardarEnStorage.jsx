// Guardar en el almacenamiento local
export const GuardarEnStorage = (key, element) => {

    // Conseguir los elementos que ya tenemos en localStorage
    let elementos = JSON.parse(localStorage.getItem(key));

    // Comprobar si es un array
    if(Array.isArray(elementos)){
        // Añadir dentro del array un elemento nuevo
        elementos.push(element);
    
    } else {
        // Crear un array con el nuevo elemento
        elementos = [element];
    }

    // Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(elementos));

    // Devolver objeto guardado
    return element;

}