let registroVacunados = [];
let vacunados = document.getElementById('vacunados');

function mostrarVacunados() {
    vacunados.innerHTML = '';

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    vacunados.appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Identificación";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Nombre completo";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Teléfono";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Dosis";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "Acción";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    thead.appendChild(row_1);

    registroVacunados.forEach(vacunado => {
        let fila = document.createElement('tr');
        let valor_identificacion = document.createElement('td');
        valor_identificacion.innerHTML = vacunado.identificacion;
        let valor_nombre = document.createElement('td');
        valor_nombre.innerHTML = `${vacunado.nombre} ${vacunado.apellido}`;
        let valor_telefono = document.createElement('td');
        valor_telefono.innerHTML = vacunado.telefono;
        let valor_dosis = document.createElement('td');
        valor_dosis.innerHTML = vacunado.dosis;

        const eliminar_botton = document.createElement('button');
        eliminar_botton.addEventListener('click', () => {
            eliminarVacunado(vacunado.identificacion);
        });
        eliminar_botton.textContent = `Eliminar`;
        let valor_accion = document.createElement('td');
        valor_accion.appendChild(eliminar_botton);

        fila.appendChild(valor_identificacion);
        fila.appendChild(valor_nombre);
        fila.appendChild(valor_telefono);
        fila.appendChild(valor_dosis);
        fila.appendChild(valor_accion);
        tbody.appendChild(fila);
    });
}

function eliminarVacunado(identificacion) {
    registroVacunados = registroVacunados.filter(v => v.identificacion != identificacion);
    localStorage.setItem('registro_vacunados', JSON.stringify(registroVacunados));
    mostrarVacunados();
}

window.onload = () => {
    const str_registro = localStorage.getItem('registro_vacunados');
    registroVacunados = JSON.parse(str_registro);

    if (!registroVacunados) {
        registroVacunados = [];
    }

    console.log(registroVacunados);

    mostrarVacunados();
}