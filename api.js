
const contenido = document.querySelector('#contenido');


async function consumirApi() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const opcionesApi = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    try {
        contenido.innerHTML = ''; 
        const respuesta = await fetch(url, opcionesApi);

        
        if (!respuesta.ok) {
            throw new Error('No se pudo extraer la información');
        }

        const lista = await respuesta.json();

        
        lista.forEach(dato => {
            const fila = `
                <tr>
                    <td>${dato.id}</td>
                    <td>${dato.name}</td>
                    <td>${dato.email}</td>
                    <td>${dato.company.name}</td>
                </tr>
            `;
            
            contenido.innerHTML += fila;
        });

    } catch (error) {
        console.error(error);
        contenido.innerHTML = `
            <tr>
                <td colspan="4">Error inesperado: ${error.message}</td>
            </tr>
        `;
    }
}


consumirApi();

