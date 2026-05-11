export const passwordValidate = {
    required: {
        value: true,
        message: "Password je obavezan!"
    },

    minLength: {
        value: 5,
        message: "Password je prekratak!"
    },

    maxLength: {
        value: 16,
        message: "Password je predugačak!"
    },

    validate: (value) => {
        if (value.trim() === '') {
            return "Password ne može biti samo razmak!";
        }

        if (!/[!@?#]/.test(value)) {
            return "Mora sadržavati specijalni znak (! @ ? #)";
        }

        if (!/[A-Z]/.test(value)) {
            return "Mora sadržavati veliko slovo!";
        }

        if (value === 'admin' || value === '123456') {
            return "Ovaj password nije dopušten!";
        }

        return true;
    }
};