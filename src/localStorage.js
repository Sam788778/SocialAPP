export function ParseProfile() {
    try {
        return JSON.parse(localStorage.getItem('profile')) || null;
    } catch {
        localStorage.removeItem('profile');
        return null;
    }
}

export function ParseStatus() {
    try {
        return JSON.parse(localStorage.getItem('status')) || null;
    } catch {
        localStorage.removeItem('status');
        return null;
    }
}