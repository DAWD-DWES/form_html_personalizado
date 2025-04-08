document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro");

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

    const inputs = form.querySelectorAll("input");

    // Validación reactiva: actualiza el mensaje personalizado en tiempo real
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            const errores = mensajesError[input.name];
            input.setCustomValidity(""); // limpia primero

            if (!errores)
                return;

            for (const tipo in input.validity) {
                if (input.validity[tipo] && errores?.[tipo]) {
                    input.setCustomValidity(errores[tipo]);
                    break;
                }
            }

            input.reportValidity(); // muestra mensaje actualizado si hay
        });
    });


    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let primerCampoErroneo = null;

        inputs.forEach(input => {
            const errores = mensajesError[input.name];
            input.setCustomValidity("");

            if (!errores)
                return;

            for (const tipo in input.validity) {
                if (input.validity[tipo] && errores?.[tipo]) {
                    input.setCustomValidity(errores[tipo]);
                    if (!primerCampoErroneo)
                        primerCampoErroneo = input;
                    break;
                }
            }
        });

        if (primerCampoErroneo) {
            primerCampoErroneo.reportValidity(); // solo el primero
        } else {
            console.log("Formulario válido. Enviando...");
            form.submit();
        }
    });
});
