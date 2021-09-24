let registerButton = document.getElementById('boton-registro');
let campo_cedula = document.getElementById('identificacion');
let campo_nombre = document.getElementById('nombre');
let campo_apellido = document.getElementById('apellido');
let campo_telefono = document.getElementById('telefono');

registerButton.addEventListener('click', () => {
    const campos_dosis = document.getElementsByName('dosis');
    let dosis = '';
    for (let i = 0; i < campos_dosis.length; i++) {
        const campo_dosis = campos_dosis[i];
        if (campo_dosis.checked) {
            dosis = campo_dosis.value;
        }
    }

    const nuevo_vacunado = {
        identificacion: campo_cedula.value,
        nombre: campo_nombre.value,
        apellido: campo_apellido.value,
        telefono: campo_telefono.value,
        dosis: dosis
    }

    alert(JSON.stringify(nuevo_vacunado));
    registroVacunados.push(nuevo_vacunado);
    localStorage.setItem('registro_vacunados', JSON.stringify(registroVacunados));

    clearForm();
});

function clearForm() {
    campo_cedula.value = "";
    campo_nombre.value = "";
    campo_apellido.value = "";
    campo_telefono.value = "";
}

window.onload = () => {
    const str_registro = localStorage.getItem('registro_vacunados');
    registroVacunados = JSON.parse(str_registro);

    if (!registroVacunados) {
        registroVacunados = [];
    }

    console.log(registroVacunados);
}