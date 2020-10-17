import { database } from './database';

export const login = (username, password) => {
    if (username.length === 0 || password.length === 0) {
        return null;
    }

    const user = database.users.find((user) => {
        return user.email === username;
    });

    if (user.password === password) {
        return user;
    }

    return null;
};