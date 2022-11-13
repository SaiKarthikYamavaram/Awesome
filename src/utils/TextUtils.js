const strongRegex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');

const isValidPassword = (password) => {
    if (!strongRegex.test(email)) {
        return false;
    } else if (password.length < 8) {
        return false;
    }
    return true
};

export {
    isValidPassword,
};
