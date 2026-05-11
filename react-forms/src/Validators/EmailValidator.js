export const emailValidate = {
    required: {
        value: true,
        message: "Email je obavezan!"
    },
    minLength: {
        value: 10,
        message: "Email je prekratak!"
    },
    pattern: {
        value: /^[^\s@]+@gmail\.[^\s@]+$/,
        message: "Email nije ispravan; mora sadržavati .gmail!"
    },
    validate: (value) =>
        value !== "admin@gmail.com" &&
        value !== "test@gmail.com" ||
        "Ovaj email nije dopušten!"
};