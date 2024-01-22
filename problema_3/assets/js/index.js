const num_1 = document.querySelector('#num1');
const num_2 = document.querySelector('#num2');
const num_3 = document.querySelector('#num3');

const respuesta = document.querySelector('.enviar');

respuesta.addEventListener('click', function() {
    let numeroAnotado = num_1.value + num_2.value + num_3.value;
    if (numeroAnotado == '911') {
        let mensaje = document.querySelector('.mensaje');
        mensaje.innerHTML = 'password correcto';
    } else if (numeroAnotado == '714') {
        let mensaje = document.querySelector('.mensaje');
        mensaje.innerHTML = 'password correcto';
    } else {
        let mensaje = document.querySelector('.mensaje');
        mensaje.innerHTML = 'password incorrecto';
    }
})