// validacion de formulario
const enviar = document.getElementById('enviar');

const validacion = (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const asunto = document.getElementById('text__area');
    if (name.value === "") {
        alert("por favor introduce tu nombre");
        usuario.focus();
        return false;
    }

    if (email.value === "") {
        alert("por favor introduce tu email");
        email.focus();
        return false;
    }

    if (!emailValido(email.value)) {
        alert("por favor introduce un email valido");
        email.focus();
        return false;
    }

    return true;
}

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

enviar.addEventListener('click', validate);