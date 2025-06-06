const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasMinLength) {
        return "Password must be at least 6 characters long";
    }
    if (!hasUppercase) {
        return "Password must contain at least one uppercase letter";
    }
    if (!hasLowercase) {
        return "Password must contain at least one lowercase letter";
    }
    return null;
};

export default validatePassword;