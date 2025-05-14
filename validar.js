document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro");
    const inputs = form.querySelectorAll("input");

    const mensajesError = {
        usuario: {
            valueMissing: "El nombre de usuario es obligatorio.",
            patternMismatch: "El nombre solo puede contener letras y espacios.",
            tooShort: "El nombre de usuario debe tener al menos 3 caracteres."
        },
        password1: {
            valueMissing: "La contraseña es obligatoria.",
            patternMismatch: "Debe tener al menos una mayúscula, una minúscula, un número y un símbolo.",
            tooShort: "La contraseña debe tener al menos 8 caracteres."
        },
        password2: {
            valueMissing: "Debe repetir la contraseña.",
            patternMismatch: "Debe tener al menos una mayúscula, una minúscula, un número y un símbolo.",
            tooShort: "La contraseña debe tener al menos 8 caracteres."
        },
        email: {
            valueMissing: "El correo electrónico es obligatorio.",
            typeMismatch: "Debes introducir un correo válido (ej: usuario@dominio.com)."
        }
    };

    function actualizarMensajePersonalizado(input) {
        const errores = mensajesError[input.name];
        input.setCustomValidity("");

        if (!errores)
            return;

        for (const tipo in input.validity) {
            if (input.validity[tipo] && errores[tipo]) {
                input.setCustomValidity(errores[tipo]);
                break;
            }
        }
    }

    // Aplicar a todos los inputs
    inputs.forEach(input => {
        // Validación en tiempo real (sin mostrar mensaje)
        input.addEventListener("input", () => {
            actualizarMensajePersonalizado(input);
            if (!input.checkValidity()) {
                input.reportValidity();
            }
        });

        // Mostrar mensaje al hacer foco si es inválido
        input.addEventListener("mouseenter", () => {
            actualizarMensajePersonalizado(input);
            if (!input.checkValidity()) {
                input.reportValidity();
            }
        });
    });

    // Validación al enviar
    form.addEventListener("submit", function (e) {
        let primerCampoErroneo = null;

        inputs.forEach(input => {
            actualizarMensajePersonalizado(input);

            if (!input.checkValidity() && !primerCampoErroneo) {
                primerCampoErroneo = input;
            }
        });

        if (primerCampoErroneo) {
            primerCampoErroneo.reportValidity();
            e.preventDefault();
        }
    });
});
